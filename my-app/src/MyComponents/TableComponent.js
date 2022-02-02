import React, { Component } from "react";
// import ClickuserData from "./ClickuserData";
import Table from "./Table";
import Form from "./FormComponent";

class TableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // userData: [
      //   { Name: "Jay", Std: 10, Age: 16, AvgMarks: 85 },
      //   { Name: "Daksh", Std: 7, Age: 13, AvgMarks: 63 },
      //   { Name: "Kiya", Std: 3, Age: 8, AvgMarks: 78 },
      //   { Name: "Jarnav", Std: 5, Age: 10, AvgMarks: 94 },
      //   { Name: "Dhiya", Std: 12, Age: 18, AvgMarks: 56 },
      // ],
      singleUserData: {},
      UserData: [],
      Name: "",
      Std: "",
      Age: "",
      AvgMarks: "",
      id: "",
    };
    this.showclickData = this.showclickData.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  showclickData = (item) => {
    this.setState({ singleUserData: item });
  };

  // addItem = (index, item) => {
  //   const { UserData } = this.state;
  //   const singleUserData = {
  //     value: this.state.singleUserData,
  //     id: Math.random(),
  //   };
  //   UserData.slice(index, item);
  //   this.setState({ singleUserData: singleUserData });
  // };

  removeItem = (index, item) => {
    const { UserData } = this.state;
    console.log("UserData", UserData, index, item);
    UserData.splice(index, 1);
    this.setState({ UserData: UserData });
  };

  onFormsubmit = (e, value) => {
    e.preventDefault();
    const { singleUserData } = this.state;
    let UserData = [...this.state.UserData];

    UserData.push(singleUserData);
    this.setState({
      UserData,
    });

    // this.setState((e.target.value = ""));
    // this.setState({ Name: "", Std: "", Age: "", AvgMarks: "", id: "" });
  };
  resetform = (e, value, field) => {
    const { UserData } = this.state;
    console.log("hello", UserData);

    // this.setState({ Name: "", Std: "", Age: "", AvgMarks: "", id: "" });
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState((fields[field] = ""));
  };
  InputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((state) => ({
      singleUserData: { ...this.state.singleUserData, [name]: value },
    }));
  };
  render() {
    const { userData, singleUserData, UserData } = this.state;

    // console.log("userData", this.state.UserData);
    // console.log("singleUserData", this.state.singleUserData);
    // console.log(typeof userData);

    return (
      <div>
        <Form
          submitdata={this.onFormsubmit}
          singleUserinfo={this.state.singleUserData}
          handleInputChange={this.InputChange}
          resetData={this.resetform}
        />
        <Table
          usertabVal={this.state.UserData}
          deleteItem={this.removeItem}
          handleClick={this.showclickData}
          editItem={this.addItem}
        />

        {/* <ClickuserData singleUserValue={singleUserData} /> */}
      </div>
    );
  }
}

export default TableComponent;
