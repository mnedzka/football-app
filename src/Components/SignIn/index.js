import React, { Component } from "react";
import FormField from "../UI/FormField";
import { validate } from "../UI/misc";

class SignIn extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      password: {
        element: "input",
        value: "",
        config: {
          name: "password_input",
          type: "password",
          placeholder: "Enter your password"
        },
        validation: {
          require: "true"
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

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
      // console.log(dataToSubmit);
    } else {
      this.setState({
        formError: true
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="sigin_wrapper" style={{ margin: "100px" }}>
          <form onSubmit={e => this.submitForm(e)}>
            <h2>Please login</h2>

            <FormField
              id="email"
              formdata={this.state.formData.email}
              change={element => this.updateForm(element)}
            />

            <FormField
              id="password"
              formdata={this.state.formData.password}
              change={element => this.updateForm(element)}
            />

            <button onClick={e => this.submitForm(e)}>Log in</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignIn;
