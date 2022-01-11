import React from "react";

function ErrorMessage(props) {
  return (
    <div className="border border-red-500 rounded-md p-1">
      <p className="text-xs text-red-700">{props.message}</p>
    </div>
  );
}

export default ErrorMessage;
