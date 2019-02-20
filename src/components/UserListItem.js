import React from "react";

const styles = {
  borderBottom: "2px solid #eee",
  background: "#fafafa",
  padding: ".6rem 1rem",
  maxWidth: "500px"
};

const thumbStyle = {
  borderRadius: "50%",
  height: "60px",
  width: "60px",
  display: "inline-block"
};

export default ({ user: { general, contact, job }, onSelect }) => {
  var imageStyles = {
    backgroundImage: "url(" + general.avatar + ")"
  };
  var contactStyles = {
    backgroundColor: "#46733E"
  };

  return (
    <div className="contact" style={contactStyles}>
      <span className="image" style={imageStyles} />
      <div className="details">
        <span className="name">
          {" "}
          {general.firstName} {general.lastName}{" "}
        </span>
        <span className="name"> {job.company}</span>
      </div>
    </div>
  );
};
