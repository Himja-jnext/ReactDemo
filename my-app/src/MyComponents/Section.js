import { getValue } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
import Childcomp from "./Childcomp";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [
        { Name: "Jay", Std: 10, Age: 16, AvgMarks: 91 },
        { Name: "Daksh", Std: 7, Age: 13, AvgMarks: 63 },
        { Name: "Dev", Std: 3, Age: 8, AvgMarks: 78 },
      ],
      singleUserData: {},
    };

    this.showData = this.showData.bind(this);
  }

  showData = (item) => {
    this.setState({ singleUserData: item });
  };

  render() {
    const { userData, singleUserData } = this.state;
    // console.log("userData", this.state.userData);
    console.log("singleUserData", this.state.singleUserData);
    // console.log(typeof userData);
    return (
      <div>
        <Childcomp userVal={singleUserData} />
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Std</th>
              <th>Age</th>
              <th>AvgMarks</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((item, index) => {
              //console.log(item);
              return (
                <tr onClick={() => this.showData(item)}>
                  <td>{item?.Name}</td>
                  {/* <td>{item?.Std}</td>
                  <td>{item?.Age}</td>
                  <td>{item?.AvgMarks}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Section;
