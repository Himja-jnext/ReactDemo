// import React from "react";

// class Clock extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       date: new Date(),
//     };
//   }
//   componentDidMount() {
//     this.setTimeref = setInterval(() => {
//       this.setTime();
//     }, 1000);
//   }
//   setTime() {
//     this.setState((state) => {
//       return {
//         date: new Date(),
//       };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <p>The current time is {this.state.date.toString()}</p>
//       </div>
//     );
//   }
// }
// export default Clock;
