import React, { Component } from "react";
import AdminLayout from "../../../HOC/AdminLayout";
import FormField from "../../UI/FormField";
import { validate } from "../../UI/misc";
import FileUploader from "../../UI/FileUploader";

import { firebasePlayers, firebaseDB, firebase } from "../../../firebase";

class AddEditPlayers extends Component {
  state = {
    playerId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    defaultImg: "",
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Player name",
          name: "name_input",
          type: "text"
        },
        validation: {
          require: "true"
        },
        valid: false,
        validationMessage: "",
        showLabel: true
      },
      lastname: {
        element: "input",
        value: "",
        config: {
          label: "Player lastname",
          name: "lastname_input",
          type: "text"
        },
        validation: {
          require: "true"
        },
        valid: false,
        validationMessage: "",
        showLabel: true
      },
      number: {
        element: "input",
        value: "",
        config: {
          label: "Player number",
          name: "number_input",
          type: "text"
        },
        validation: {
          require: "true"
        },
        valid: false,
        validationMessage: "",
        showLabel: true
      },
      position: {
        element: "select",
        value: "",
        config: {
          label: "Select a position",
          name: "select_position",
          type: "select",
          options: [
            { key: "Keeper", value: "Keeper" },
            { key: "Defence", value: "Defence" },
            { key: "Midfield", value: "Midfield" },
            { key: "Striker", value: "Striker" }
          ]
        },
        validation: {
          require: "true"
        },
        valid: false,
        validationMessage: "",
        showLabel: true
      },
      image: {
        element: "image",
        value: "",
        validation: {
          required: true
        },
        valid: true
      }
    }
  };

  componentDidMount() {
    const playerId = this.props.match.params.id;

    if (!playerId) {
      this.setState({
        formType: "Add Player"
      });
    } else {
    }
  }

  updateForm = element => {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };
    newElement.value = element.e.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;

    this.setState({
      formError: false,
      formData: newFormData
    });
  };

  submitForm = e => {
    e.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }

    if (formIsValid) {
    } else {
      this.setState({
        formError: true
      });
    }
  };

  resetImage = () => {};
  storeFilename = () => {};

  render() {
    return (
      <AdminLayout>
        <div className="editplayers_dialog_wrapper">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={e => this.submitForm(e)}>
              <FileUploader
                dir="players"
                tag={"Player image"}
                defaultImg={this.state.defaultImg}
                defaultImgName={this.state.formData.image.value}
                resetImage={() => this.resetImage()}
                filename={filename => this.storeFilename(filename)}
              />

              <FormField
                id="name"
                formdata={this.state.formData.name}
                change={element => this.updateForm(element)}
              />
              <FormField
                id="lastname"
                formdata={this.state.formData.lastname}
                change={element => this.updateForm(element)}
              />
              <FormField
                id="number"
                formdata={this.state.formData.number}
                change={element => this.updateForm(element)}
              />
              <FormField
                id="position"
                formdata={this.state.formData.position}
                change={element => this.updateForm(element)}
              />

              <div className="admin_submit">
                <button onClick={e => this.submitForm(e)}>
                  {this.state.formType}
                </button>
                <div className="success_label">{this.state.formSuccess}</div>
                {this.state.formError ? (
                  <div className="label_error">Sth is wrong</div>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditPlayers;
