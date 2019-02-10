import React, { Component } from "react";
import AdminLayout from "../../../HOC/AdminLayout";
import FormField from "../../UI/FormField";
import { validate } from "../../UI/misc";

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
      }
    }
  };
  render() {
    return <div />;
  }
}

export default AddEditPlayers;
