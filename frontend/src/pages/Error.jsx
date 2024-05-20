import React from "react";
import { useNavigate } from "react-router-dom";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

const Error = () => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate("/");
  };
  return (
    <div className="errorPage">
      <ExclamationTriangleIcon className="er-icon" />
      <h2>Something went wrong. Please try again later.</h2> <br />
      <p>
        Please go back to{" "}
        <button onClick={goBackHandler} className="btn er-btn">
          Home
        </button>
      </p>
    </div>
  );
};

export default Error;
