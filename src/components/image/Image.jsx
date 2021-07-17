import React from "react";
import Button from "../button/Button";

import "./image.css";

const Image = (props) => {
  return (
    <div className="image">
      <img src={props.img} alt="" />
      <h3>{props.artist}</h3>
      <p>{props.title}</p>
      <Button btn="Select"/>
    </div>
  );
};

export default Image;
