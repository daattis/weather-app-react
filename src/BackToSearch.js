import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import "./BackToSearch.css";

const BackToSearch = ({ onClick }) => {
  return (
    <div className="replay-container" onClick={onClick}>
      <p className="replay-item">Make another search </p>
      <ReplayIcon className="replay-item replay-icon" />
    </div>
  );
};

export default BackToSearch;
