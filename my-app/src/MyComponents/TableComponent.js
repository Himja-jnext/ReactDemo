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
      formdata: {},
      UserData: [],
      Name: "",
      Std: "",
      Age: "",
      AvgMarks: "",
      id: "",
      Search: "",
      Update: false,
      clickedItemData: {},
    };
    // this.showclickData = this.showclickData.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  // showclickData = (item) => {
  //   this.setState({ singleUserData: item });
  // };

  addItem = (e, item) => {
    this.setState({
      clickedItemData: item,
      Update: true,
      formdata: item,
    });
    // console.log("itemid", item.userId);
    console.log("clickedItemData", item, item.userId);
  };

  removeItem = (index, item) => {
    const { UserData } = this.state;
    // console.log("clickUserData", index, item);
    UserData.splice(index, 1);
    // console.log("remainUserdata", UserData);
    this.setState({ UserData: UserData });
  };

  onFormsubmit = (e) => {
    e.preventDefault();
    const { formdata } = this.state;
    let UserData = [...this.state.UserData];

    // var autoId = UserData?.length;
    var obj = {
      userId: UserData?.length + 1,
      ...formdata,
    };
    UserData.push(obj);
    this.setState({
      UserData,
      formdata: {},
      Update: false,
    });
    // console.log("data", formdata, UserData);
    e.target.reset();
  };

  onUpdate = (e) => {
    const { clickedItemData, UserData, formdata } = this.state;
    console.log("update", clickedItemData, formdata);
    e.preventDefault();
    // const { UserData, formdata } = this.state;
    // console.log("hello", UserData, formdata);
    var updatedData = [];
    UserData.map((item, i) => {
      // console.log("userData", item, i);
      var object = {
        ...item,
        Name:
          item?.userId === clickedItemData?.userId
            ? formdata?.Name
            : item?.Name,
        Std:
          item?.userId === clickedItemData?.userId ? formdata?.Std : item?.Std,
        Age:
          item?.userId === clickedItemData?.userId ? formdata?.Age : item?.Age,
        AvgMarks:
          item?.userId === clickedItemData?.userId
            ? formdata?.AvgMarks
            : item?.AvgMarks,
      };
      return (updatedData[i] = object);
    });
    console.log("updatedData", updatedData);
    this.setState({ UserData: updatedData, formdata: {}, Update: false });
    e.target.reset();
  };

  InputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let searchvalue = e.target.value;
    this.setState(() => ({
      formdata: { ...this.state.formdata, [name]: value, Search: searchvalue },
    }));
    // this.setState();
  };

  onsearch = (e) => {
    const { Search } = this.state;
    // let searchvalue = e.target.value;
    let students = this.props.searchdata,
      searchstring = this.state.Search.trim().toLowerCase();
    if (Search?.length > 0) {
      students = students.filer((e) => {
        e.Name.toLowerCase().match(searchstring);
        console.log("hello", Search.length);
      });
      this.setState({ userData: searchstring });
    }
    console.log("hello", Search.length);
  };

  render() {
    const { userData, formdata, UserData, Update, Search } = this.state;

    // console.log("UserData", UserData);
    // console.log("singleUserData", this.state.singleUserData);
    // console.log(typeof userData);

    // let students = this.props.searchdata,
    //   searchstring = this.state.Search.trim().toLowerCase();
    // if (Search?.length > 0) {
    //   students = students.filer((e) => {
    //     e.Name.toLowerCase().match(searchstring);
    //   });
    //   this.setState({ userData: searchstring });
    // }

    return (
      <div>
        <Form
          submitdata={this.onFormsubmit}
          singleUserinfo={this.state.formdata}
          handleInputChange={this.InputChange}
          updatedData={this.state.Update}
          onupdatedata={this.onUpdate}
        />
        <Table
          usertabVal={this.state.UserData}
          deleteItem={this.removeItem}
          editItem={this.addItem}
          searchData={this.onsearch}
          // handleClick={this.showclickData}
        />

        {/* <ClickuserData singleUserValue={singleUserData} /> */}
      </div>
    );
  }
}

export default TableComponent;
