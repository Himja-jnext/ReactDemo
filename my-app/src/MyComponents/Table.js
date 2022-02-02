import React, { Component } from "react";

export default class Table extends React.Component {
  render() {
    const { usertabVal } = this.props;
    // console.log("usertabVal", usertabVal);

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Std</th>
              <th>Age</th>
              <th>AvgMarks</th>
              <th>Course</th>
              <th>Language</th>
              <th>Hobby</th>
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
                  <td>{item?.course}</td>
                  <td>{item?.lang}</td>
                  <td>{item?.hobby}</td>

                  <button onClick={(e) => this.props.editItem(index, item)}>
                    Edit
                  </button>
                  <button onClick={() => this.props.deleteItem(index, item)}>
                    Delete
                  </button>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
