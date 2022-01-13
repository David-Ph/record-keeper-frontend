import React from "react";

function ErrorMessage(props) {
  let message = props.message;

  if (Array.isArray(props.message)) {
    message = (
      <ul>
        {message.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="border border-red-500 rounded-md p-1">
      <p className="text-xs text-red-700">{message}</p>
    </div>
  );
}

export default ErrorMessage;
