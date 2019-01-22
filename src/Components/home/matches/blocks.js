import React, { Component } from "react";
import { firebaseMatches } from "../../../firebase";
import { firebaseLooper } from "../../UI/misc";

class Blocks extends Component {
  state = {
    matches: []
  };

  componentDidMount() {
    firebaseMatches
      .limitToLast(6)
      .once("value")
      .then(snapshot => {
        const matches = firebaseLooper(snapshot);

        // const reverseMatches = matches.reverse();

        // console.log(matches);
        // console.log(reverseMatches);
        this.setState({
          matches: matches.reverse()
        });
      });
  }

  showMatches = () => <div>match</div>;

  render() {
    console.log("state", this.state);
    return (
      <div className="home_matches">{this.showMatches(this.state.matches)}</div>
    );
  }
}

export default Blocks;
