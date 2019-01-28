import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../UI/FormField";

class Enroll extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_inout",
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

  submitForm = () => {};

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={e => this.submitForm(e)}>
            <div className="enroll_title">Enter your email</div>

            <div className="enroll_email">
              <FormField id="email" formdata={this.state.formData.email} />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
