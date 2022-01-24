import React from "react";

class Header extends React.Component {
  render() {
    this.state = [
      { Name: "Jay", Std: 10, Age: 16 },
      { Name: "Daksh", Std: 7, Age: 13 },
      { Name: "Dev", Std: 3, Age: 8 },
    ];
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Std</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.map((userInfo) => {
              return (
                <tr>
                  <td>{userInfo.Name}</td>
                  <td>{userInfo.Std}</td>
                  <td>{userInfo.Age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Header;
