import React from "react";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

import "./home.scss";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="widgets">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="projects" />
        <Widget type="balance" />
      </div>
      <div className="charts">
        <Featured />
        <Chart />
      </div>
    </div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <div className="home">
//       <Sidebar />
//       <div className="homeContainer">
//         <Navbar />
//         <div className="widgets">
//           <Widget type="user" />
//           <Widget type="order" />
//           <Widget type="projects" />
//           <Widget type="balance" />
//         </div>
//         <div className="charts">
//           <Featured />
//           <Chart />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
