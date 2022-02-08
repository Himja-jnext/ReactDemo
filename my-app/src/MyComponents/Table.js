import React, { Component } from "react";

export default class Table extends React.Component {
  render() {
    const { usertabVal } = this.props;
    // console.log("usertabVal", usertabVal);

    return (
      <div>
        <input
          type="text"
          name="Search"
          id="Search"
          className="searchfiled"
          placeholder="Search Students"
          onChange={(e) => this.props.searchData(e)}
        />
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
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
              // console.log("item", item, index);
              return (
                // <tr onClick={() => this.props.handleClick(item)}>
                <tr>
                  <td>{index + 1}</td>
                  <td>{item?.Name}</td>
                  <td>{item?.Std}</td>
                  <td>{item?.Age}</td>
                  <td>{item?.AvgMarks}</td>
                  <td>{item?.course}</td>
                  <td>{item?.lang}</td>
                  <td>{item?.hobby}</td>

                  <button
                    className="sub-btn edit-btn"
                    onClick={(e) => this.props.editItem(e, item)}
                  >
                    Edit
                  </button>
                  <button
                    className="sub-btn edit-btn"
                    onClick={(e) => this.props.deleteItem(index, item)}
                  >
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
