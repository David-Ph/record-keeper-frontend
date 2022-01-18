import React from "react";

const Option = (props, ref) => {
  return (
    <div className="flex justify-between m-2 flex-col md:flex-row">
      <label htmlFor={props.input.id} className="md:w-1/3">
        {props.label}
      </label>
      <select
        {...props.input}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={`bg-yellow-100 rounded-md border w-full md:w-2/3 px-2 py-1 box-border focus:outline-teal-600 focus:scale-105 transition-all`}
      >
        {props.options.map((opt) => {
          return <option key={opt} value={opt}>{opt}</option>;
        })}
      </select>
    </div>
  );
};

export default Option;
