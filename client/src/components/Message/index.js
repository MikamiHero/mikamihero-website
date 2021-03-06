import React from "react";

const getStyle = (props) => {
  let baseClass = "alert ";
  if (!props.message.success) {
    baseClass += "alert-danger";
  } else {
    baseClass += "alert-primary";
  }
  return baseClass + " text-center";
};

const Message = (props) => {
  return (
    <div className={getStyle(props)} role="alert">
      {props.message.msg}
    </div>
  );
};

export default Message;
