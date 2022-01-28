import React, { Component } from "react";

export default class Table extends React.Component {
  render() {
    const { usertabVal } = this.props;
    console.log("usertabVal", usertabVal);
    return (
      <div>
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
            {usertabVal?.map((item, index) => {
              // console.log("item", item);
              return (
                <tr onClick={() => this.props.handleClick(item)}>
                  <td>{item?.Name}</td>
                  <td>{item?.Std}</td>
                  <td>{item?.Age}</td>
                  <td>{item?.AvgMarks}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
