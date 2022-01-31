import React from "react";

const Option = (props, ref) => {
  const inputClasses = props.inputClasses;
  const labelClasses = props.labelClasses;
  const usedBy = props.usedBy;

  return (
    <div className="flex justify-between m-2 flex-col md:flex-row md:items-center">
      {props.label && (
        <label
          htmlFor={props.input.id}
          className={`md:w-1/3 text-left ${labelClasses ? labelClasses : ""}`}
        >
          {props.label}
        </label>
      )}
      <select
        {...props.input}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        defaultValue={`Select ${usedBy}`}
        className={`bg-yellow-100 rounded-md border w-full px-2 py-1 box-border focus:outline-teal-600 transition-all ${
          inputClasses && `${inputClasses}`
        } ${props.label && "md:w-2/3"}`}
      >
        <option
          key={`select-${usedBy}`}
          id={`select-${usedBy}`}
          value={`Select ${usedBy}`}
        >
          {`Select ${usedBy}`}
        </option>
        {props.options.map((opt) => {
          return (
            <option key={opt.id} id={opt.id} value={opt.id}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Option;
