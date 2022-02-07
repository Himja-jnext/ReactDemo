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
    this.setState({ singleUserData: item, Update: true });
    // console.log("singleUserData", item);
  };

  // let updateData = UserData.map((userupdates) => {
  //   if (userupdates.index === UserData.index) {
  //     userupdates.Name = UserData.Name;
  //     userupdates.Std = UserData.Std;
  //   }
  //   {
  //     return userupdates;
  //   }
  // }); line-41 :"try" : subitem.Name,

  removeItem = (index, item) => {
    const { UserData } = this.state;
    // console.log("clickUserData", index, item);
    UserData.splice(index, 1);
    // console.log("remainUserdata", UserData);
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

  onUpdate = (e, index) => {
    e.preventDefault();
    const { UserData, singleUserData } = this.state;
    console.log("hello", UserData, singleUserData, index);

    var updatedData = [];
    UserData.map((item, i) => {
      console.log("userData.update", item, i, object);
      var object = {
        ...singleUserData,
        Name: i === i ? item.Name : e.target.value,
        Std: i === i ? item.Std : e.target.value,
        Age: i === i ? item.Age : e.target.value,
        AvgMarks: i === i ? item.AvgMarks : e.target.value,
      };
      return (updatedData[i] = object);
    });
    this.setState({ UserData: updatedData });
    console.log("updatedData", updatedData);
  };

  //   var updatedData = [];
  //   UserData.map((item, i) => {
  //     // console.log("userData.update", item, i);
  //     var object = {
  //       ...UserData,
  //       Name: singleUserData.id === item?.id ? item.Name : e.target.value,
  //     };
  //     return (updatedData[i] = object);
  //   });
  //   this.setState({ UserData: updatedData });
  //   console.log("updatedData", updatedData);
  // };

  //   const updatedData = this.state.UserData.map((x) =>
  //     x.id === item.id ? { ...x, Name: item.Name } : x
  //   );
  //   this.setState({ UserData: updatedData });
  // };
  //   var updatedData = [];
  //   UserData.map((item, subitem, i) => {
  //     console.log("userData.update", item, subitem, i);
  //     var object = {
  //       Name: item.id === item?.id ? item.name : item,
  //     };
  //     return (updatedData[i] = object);
  //   });

  //   this.setState({ UserData: updatedData });
  //   console.log("updatedData", updatedData);

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
          updatedData={this.state.Update}
          onupdatedata={this.onUpdate}
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
