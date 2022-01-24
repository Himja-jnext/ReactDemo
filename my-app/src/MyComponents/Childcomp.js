import React, { Component } from "react";

class Childcomp extends Component {
  render() {
    const { userVal } = this.props;
    console.log("singleUserValue", userVal);
    return (
      <div>
        <h2>{userVal.Name}</h2>
        <h3>{userVal.Std}</h3>
        <h3>{userVal.Age}</h3>
      </div>
    );
  }
}
export default Childcomp;
