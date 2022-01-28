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
    let fields = this.state.fields;
    let error = {};
    let formIsvalid = true;

    if (!fields["Name"]) {
      formIsvalid = false;
      error["Name"] = "*Name is requierd.";
    }

    if (typeof fields["Name"] !== "undefined") {
      if (!fields["Name"].match(/^[a-zA-Z]+$/)) {
        formIsvalid = false;
        error["Name"] = "*Only letters allowed.";
      }
    }

    if (!fields["Std"]) {
      formIsvalid = false;
      error["Std"] = "*Standard is requierd.";
    }
    if (typeof fields["Std"] !== "undefined") {
      if (!fields["Std"].match(/^[0-9\b]+$/)) {
        formIsvalid = false;
        error["Std"] = "*Only Numbers allowed.";
      }
    }

    if (!fields["Age"]) {
      formIsvalid = false;
      error["Age"] = "*Age is requierd.";
    }
    if (typeof fields["Age"] !== "undefined") {
      if (!fields["Age"].match(/^[0-9\b]+$/)) {
        formIsvalid = false;
        error["Age"] = "*Only Numbers allowed.";
      }
    }
    if (!fields["AvgMarks"]) {
      formIsvalid = false;
      error["AvgMarks"] = "*AvgMarks is requierd.";
    }
    if (typeof fields["AvgMarks"] !== "undefined") {
      if (!fields["AvgMarks"].match(/^[0-9\b]+$/)) {
        formIsvalid = false;
        error["AvgMarks"] = "*Only Numbers allowed.";
      }
    }

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
  }

  render() {
    const { singleUserinfo } = this.props;
    // console.log("singleUserinfo", singleUserinfo);
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
          <button type="submit" className="sub-btn">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
