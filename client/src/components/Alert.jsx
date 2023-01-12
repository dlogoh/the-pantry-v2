import React from "react";
import { useSelector } from "react-redux";
import "./Alert.css";

const Alert = () => {
  const { alertType, msg } = useSelector((state) => state.alert);

  if (alertType === "danger") {
    return (
      <div className='alert-container'>
        <h3 className='text-center'>{msg}</h3>
      </div>
    );
  }

  if (alertType === "none") {
    return <></>;
  }
};

export default Alert;
