import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex justify-between m-2 flex-col md:flex-row md:items-center">
      <label htmlFor={props.input.id} className="md:w-1/3">
        {props.label}
      </label>
      <textarea
        {...props.input}
        ref={ref}
        onChange={props.onChange}
        onBlur={props.onBlur}
        rows="4"
        className={`bg-yellow-100 rounded-md border w-full md:w-2/3 px-2 py-1 box-border focus:outline-teal-600 focus:scale-105 transition-all`}
      >
        {props.input.value}
      </textarea>
    </div>
  );
});

export default Input;
