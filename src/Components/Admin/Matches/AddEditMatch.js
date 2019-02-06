import React, { Component } from "react";
import AdminLayout from "../../../HOC/AdminLayout";
import FormField from "../../UI/FormField";
import { validate } from "../../UI/misc";

class AddEditMatch extends Component {
  state = {
    matchId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    teams: [],
    formData: {
      date: {
        element: "input",
        value: "",
        config: {
          label: "Event date",
          name: "date_input",
          type: "date"
        },
        validation: {
          require: "true"
        },
        valid: false,
        validationMessage: "",
        showLabel: true
      },
      local: {
        element: "select",
        value: "",
        config: {
          label: "Select a local team",
          name: "select_local",
          type: "select",
          options: []
        },
        validation: {
          require: "true"
        },
        valid: false,
        validationMessage: "",
        showLabel: false
      },
      resultLocal: {
        element: "input",
        value: "",
        config: {
          label: "Result local",
          name: "result_local_input",
          type: "text"
        },
        validation: {
          require: "true"
        },
        valid: false,
        validationMessage: "",
        showLabel: false
      },
      away: {
        element: "select",
        value: "",
        config: {
          label: "Select a local team",
          name: "select_local",
          type: "select",
          options: []
        },
        validation: {
          require: "true"
        },
        valid: false,
        validationMessage: "",
        showLabel: false
      },
      resultAway: {
        element: "input",
        value: "",
        config: {
          label: "Result local",
          name: "result_local_input",
          type: "text"
        },
        validation: {
          require: "true"
        },
        valid: false,
        validationMessage: "",
        showLabel: false
      },
      referee: {
        element: "input",
        value: "",
        config: {
          label: "Referee",
          name: "referee_input",
          type: "text"
        },
        validation: {
          require: "true"
        },
        valid: false,
        validationMessage: "",
        showLabel: true
      },
      stadium: {
        element: "input",
        value: "",
        config: {
          label: "Stadium",
          name: "stadium_input",
          type: "text"
        },
        validation: {
          require: "true"
        },
        valid: false,
        validationMessage: "",
        showLabel: true
      }
    }
  };

  render() {
    return (
      <AdminLayout>
        <div className="editmatch_dialog">
          <h2>{this.state.formType}</h2>
          <div>
            <form onSubmit={e => this.submitForm(e)}>
              <FormField
                id="date"
                formdata={this.state.formData.date}
                change={element => this.updateForm(element)}
              />

              <div className="select_team_layout">
                <div className="label_inputs">local</div>
                <div className="wrapper">
                  <div className="left">
                    <FormField
                      id="local"
                      formdata={this.state.formData.date}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                  <div>
                    <FormField
                      id="resultLocal"
                      formdata={this.state.formData.resultLocal}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                </div>
              </div>

              <div className="select_team_layout">
                <div className="label_inputs">Away</div>
                <div className="wrapper">
                  <div className="left">
                    <FormField
                      id="away"
                      formdata={this.state.formData.away}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                  <div>
                    <FormField
                      id="resultAway"
                      formdata={this.state.formData.resultAway}
                      change={element => this.updateForm(element)}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditMatch;
