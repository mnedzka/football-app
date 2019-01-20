import React from "react";
import { Link } from "react-router-dom";

export const Tag = ({ bck, size, color, children, link, linkTo }) => {
  const template = (
    <div
      style={{
        background: bck,
        fontSize: size,
        color: color,
        padding: "5px 10px",
        display: "inline-block",
        fontFamily: "Righteous"
      }}
    >
      {children}
    </div>
  );

  if (link) {
    return <Link to={linkTo}>{template}</Link>;
  } else {
    return template;
  }
};
