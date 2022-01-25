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
      UserData: {},
    };

    this.submit = this.submit.bind(this);
  }

  // showclcikData = (item) => {
  //   this.setState({ singleUserData: item });
  // };
  submit = (item) => {
    this.setState({ userData: item });
  };

  render() {
    const { userData } = this.state;
    console.log("userData", this.state.userData);
    // console.log("singleUserData", this.state.singleUserData);
    // console.log(typeof userData);
    return (
      <div>
        <Form submitData={this.submit} />
        <Table usertabVal={userData} handleClick={this.showclcikData} />
        {/* <ClickuserData singleUserValue={singleUserData} /> */}
      </div>
    );
  }
}

export default TableComponent;
