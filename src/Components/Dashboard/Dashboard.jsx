import React from "react";
import Posts from "../posteos/Posts";

const Dashboard = () => {
  console.log("dashboard render");
  return (
    <div className="App-header">
      <Posts />
    </div>
  );
};

export default Dashboard;
