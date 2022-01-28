import React, { Component } from "react";

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      error: {},
    };
  }
  handleValidation() {
    let { fields } = this.state;
    let error = {};
    let formIsvalid = true;

    // Name validation

    // if (!fields["Name"]) {
    //   formIsvalid = false;
    //   error["Name"] = "*Name is required.";
    // }

    // if (typeof fields["Name"] !== "undefined") {
    //   if (!fields["Name"].match(/^[a-zA-Z]+$/)) {
    //     formIsvalid = false;
    //     error["Name"] = "*Only letters allowed.";
    //   }
    // }

    // Standard validation

    // if (!fields["Std"]) {
    //   formIsvalid = false;
    //   error["Std"] = "*Standard is required.";
    // }
    // if (typeof fields["Std"] !== "undefined") {
    //   if (!fields["Std"].match(/^[0-9\b]+$/)) {
    //     formIsvalid = false;
    //     error["Std"] = "*Only Numbers allowed.";
    //   }
    // }

    // Age validation

    // if (!fields["Age"]) {
    //   formIsvalid = false;
    //   error["Age"] = "*Age is required.";
    // }
    // if (typeof fields["Age"] !== "undefined") {
    //   if (!fields["Age"].match(/^[0-9\b]+$/)) {
    //     formIsvalid = false;
    //     error["Age"] = "*Only Numbers allowed.";
    //   }
    // }

    // AvgMarks validation

    // if (!fields["AvgMarks"]) {
    //   formIsvalid = false;
    //   error["AvgMarks"] = "*AvgMarks is required.";
    // }
    // if (typeof fields["AvgMarks"] !== "undefined") {
    //   if (!fields["AvgMarks"].match(/^[0-9\b]+$/)) {
    //     formIsvalid = false;
    //     error["AvgMarks"] = "*Only Numbers allowed.";
    //   }
    // }

    // Dropdown validation

    // if (fields["course"] !== "undefined") {
    //   formIsvalid = false;
    //   error["dropdown"] = "*tHIS is required.";
    // }

    // Radiobutton validation

    if (fields["radiobutton"] == "defined") {
      formIsvalid = true;
    }

    // Checkbox validation

    // if (!fields["course"]) {
    //   formIsvalid = false;
    //   error["course"] = "*This is required.";
    // }

    this.setState({ error: error });
    return formIsvalid;
  }

  formSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("error: Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
    console.log("hello", fields);
  }

  render() {
    const { singleUserinfo } = this.props;
    console.log("singleUserinfo", singleUserinfo);
    return (
      <div>
        <form
          className="dataform"
          onSubmit={
            ((e) => this.props.submitdata(e), this.formSubmit.bind(this))
          }
        >
          <div className="datablock">
            <label htmlFor="Name">Name :</label>
            <br></br>
            <input
              type="text"
              id="Name"
              name="Name"
              className="nameInput"
              placeholder="Enter Name"
              value={singleUserinfo.Name}
              onChange={
                ((e) => this.props.handleInputChange(e),
                this.handleChange.bind(this, "Name"))
              }
            />
            <p style={{ color: "rgb(231, 111, 5)" }}>
              {this.state.error["Name"]}
            </p>
          </div>
          <div className="datablock">
            <label htmlFor="Std">Standard :</label>
            <br></br>
            <input
              type="text"
              id="Std"
              name="Std"
              className="nameInput"
              placeholder="Enter Standard"
              value={singleUserinfo.Std}
              onChange={
                ((e) => this.props.handleInputChange(e),
                this.handleChange.bind(this, "Std"))
              }
            />
            <p style={{ color: "rgb(231, 111, 5)" }}>
              {this.state.error["Std"]}
            </p>
          </div>
          <div className="datablock">
            <label htmlFor="Age">Age :</label>
            <br></br>
            <input
              type="text"
              id="Age"
              name="Age"
              className="nameInput"
              placeholder="Enter Age"
              value={singleUserinfo.Age}
              onChange={
                ((e) => this.props.handleInputChange(e),
                this.handleChange.bind(this, "Age"))
              }
            />
            <p style={{ color: "rgb(231, 111, 5)" }}>
              {this.state.error["Age"]}
            </p>
          </div>
          <div className="datablock">
            <label htmlFor="AvgMarks">AvgMarks :</label>
            <br></br>
            <input
              type="text"
              id="AvgMarks"
              name="AvgMarks"
              className="nameInput"
              placeholder="Enter AvgMarks"
              value={singleUserinfo.AvgMarks}
              onChange={
                ((e) => this.props.handleInputChange(e),
                this.handleChange.bind(this, "AvgMarks"))
              }
            />
            <p style={{ color: "rgb(231, 111, 5)" }}>
              {this.state.error["AvgMarks"]}
            </p>
          </div>
          <div className="datablock">
            <select
              id="course"
              name="course"
              onChange={
                ((e) => this.props.handleInputChange(e),
                this.handleChange.bind(this, "course"))
              }
            >
              <option value>Please Select Your Course--</option>
              <option value={singleUserinfo.course}>HTML</option>
              <option value={singleUserinfo.course}>CSS</option>
              <option value={singleUserinfo.course}>JavaScript</option>
              <option value={singleUserinfo.course}>Reactjs</option>
              <option value={singleUserinfo.course}>Angular</option>
            </select>
            <p style={{ color: "rgb(231, 111, 5)" }}>
              {this.state.error["dropdown"]}
            </p>
          </div>

          <div className="radioblock">
            <p>Choose a favorite Web language: </p>
            <input
              type="radio"
              Name="lang"
              id="html"
              value="html"
              onChange={
                ((e) => this.props.handleInputChange(e),
                this.handleChange.bind(this, "lang"))
              }
            />
            <lable htmlFor="html">HTML</lable>
            <input
              type="radio"
              Name="lang"
              id="css"
              value="css"
              onChange={this.handleChange.bind(this, "lang")}
            />
            <lable htmlFor="css">CSS</lable>
            <input
              type="radio"
              Name="lang"
              id="java"
              value="JavaScript"
              onChange={this.handleChange.bind(this, "lang")}
            />
            <lable htmlFor="java">JavaScript</lable>
            <p style={{ color: "rgb(231, 111, 5)" }}>
              {this.state.error["radiobutton"]}
            </p>
          </div>
          <div className="datablock">
            <p name="hobby">Select your Hobbies: </p>
            <input type="checkbox" Name="Sport" id="Sport" />
            <lable htmlFor="Sport">Sports</lable>
            <input type="checkbox" Name="Cooking" id="Cooking" />
            <lable htmlFor="Cooking">Cooking</lable>
            <input type="checkbox" Name="Reading" id="Reading" />
            <lable htmlFor="Reading">Reading</lable>
            <input type="checkbox" Name="Singing" id="Singing" />
            <lable htmlFor="Singing">Singing</lable>
            <p style={{ color: "rgb(231, 111, 5)" }}>
              {this.state.error["hobby"]}
            </p>
          </div>
          <button type="submit" className="sub-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
