import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../UI/FormField";
import { validate } from "../../UI/misc";

class Enroll extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          require: "true",
          email: "true"
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  updateForm(element) {
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
  }

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

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={e => this.submitForm(e)}>
            <div className="enroll_title">Enter your email</div>

            <div className="enroll_input">
              <FormField
                id="email"
                formdata={this.state.formData.email}
                change={element => this.updateForm(element)}
              />

              {this.state.formError ? (
                <div className="error_label">Something is wrong try again</div>
              ) : null}

              <button onClick={e => this.submitForm(e)}>Enroll</button>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
