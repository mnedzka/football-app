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
    console.log(element);
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };

    newElement.value = element.e.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;

    this.setState({
      formData: newFormData
    });
  }

  submitForm = () => {};

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
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
