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
      Update: false,
    };
    // this.showclickData = this.showclickData.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  // showclickData = (item) => {
  //   this.setState({ singleUserData: item });
  // };

  addItem = (e, item) => {
    const { UserData } = this.state;
    this.setState({ singleUserData: item, Update: true });
    // let updateData = UserData.map((userupdates) => {
    //   if (userupdates.index === UserData.index) {
    //     userupdates.Name = UserData.Name;
    //     userupdates.Std = UserData.Std;
    //   }
    //   {
    //     return userupdates;
    //   }
    // });
  };

  removeItem = (index, item) => {
    const { UserData } = this.state;
    console.log("clickUserData", index, item);
    UserData.splice(index, 1);
    console.log("remainUserdata", UserData);
    this.setState({ UserData: UserData });
  };

  onFormsubmit = (e) => {
    e.preventDefault();
    const { singleUserData } = this.state;
    let UserData = [...this.state.UserData];

    UserData.push(singleUserData);
    this.setState({
      UserData,
      singleUserData: {},
      Update: false,
    });
    // console.log("data", singleUserData, UserData);
    e.target.reset();
  };

  InputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(() => ({
      singleUserData: { ...this.state.singleUserData, [name]: value },
    }));
  };

  render() {
    const { userData, singleUserData, UserData, Update } = this.state;

    // console.log("userData", this.state.UserData);
    // console.log("singleUserData", this.state.singleUserData);
    // console.log(typeof userData);

    return (
      <div>
        <Form
          submitdata={this.onFormsubmit}
          singleUserinfo={this.state.singleUserData}
          handleInputChange={this.InputChange}
          chagedtext={this.state.text}
          updateBtn={this.changebtn}
          updatedData={this.state.Update}
        />
        <Table
          usertabVal={this.state.UserData}
          deleteItem={this.removeItem}
          editItem={this.addItem}
          // handleClick={this.showclickData}
        />

        {/* <ClickuserData singleUserValue={singleUserData} /> */}
      </div>
    );
  }
}

export default TableComponent;
