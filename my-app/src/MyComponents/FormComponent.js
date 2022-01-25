import React, { Component } from "react";

export default class Form extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <form className="dataform" onSubmit={() => this.props.submitData()}>
          <div className="datablock">
            <label for="fname">Name :</label>
            <br></br>
            <input
              type="text"
              id="fname"
              name="fname"
              className="nameInput"
              placeholder="Enter Name"
            />
          </div>
          <div className="datablock">
            <label for="std">Standard :</label>
            <br></br>
            <input
              type="text"
              id="std"
              name="std"
              className="nameInput"
              placeholder="Enter Standard"
            />
          </div>
          <div className="datablock">
            <label for="age">Age :</label>
            <br></br>
            <input
              type="text"
              id="age"
              name="age"
              className="nameInput"
              placeholder="Enter Age"
            />
          </div>
          <div className="datablock">
            <label for="avgMarks">AvgMarks :</label>
            <br></br>
            <input
              type="text"
              id="avgMarks"
              name="avgMarks"
              className="nameInput"
              placeholder="Enter AvgMarks"
            />
          </div>
          <button type="submit" className="sub-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
