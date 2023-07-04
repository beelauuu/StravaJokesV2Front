import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get("message") || "Something went wrong! Whoops D:";

  return (
    <div>
      <h2 className="display-2 text-center mt-2">{message}</h2>
      <div className="text-center">
        <Link to="/" className="btn btn-outline-dark btn-lg my-2 mx-5">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Message;
