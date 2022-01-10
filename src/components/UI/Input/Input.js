import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div className="flex justify-between mb-2 flex-col md:flex-row">
      <label htmlFor={props.input.id} className="md:w-1/3">
        {props.label}
      </label>
      <input
        {...props.input}
        ref={ref}
        className="bg-yellow-100 rounded-md border-black w-full md:w-2/3 px-2 py-1 box-border"
      />
    </div>
  );
});

export default Input;
