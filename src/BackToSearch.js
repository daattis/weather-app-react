import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import "./BackToSearch.css";

const BackToSearch = () => {
  return (
    <div className="replay-container">
      <p className="replay-item">Make another search </p>
      <ReplayIcon className="replay-item replay-icon" />
    </div>
  );
};

export default BackToSearch;
