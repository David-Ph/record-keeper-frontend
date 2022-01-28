import React from "react";

const Option = (props, ref) => {
  const inputClasses = props.inputClasses;
  const labelClasses = props.labelClasses;

  return (
    <div className="flex justify-between m-2 flex-col items-center md:flex-row md:items-center">
      {props.label && (
        <label
          htmlFor={props.input.id}
          className={`md:w-1/3 ${labelClasses ? labelClasses : ""}`}
        >
          {props.label}
        </label>
      )}
      <select
        {...props.input}
        onChange={props.onChange}
        onBlur={props.onBlur}
        defaultValue="Select Campaign"
        className={`bg-yellow-100 rounded-md border w-full px-2 py-1 box-border focus:outline-teal-600 transition-all ${
          inputClasses ? inputClasses : ""
        }`}
      >
        <option
          key="select-campaign"
          id="selectCampaign"
          value="Select Campaign"
        >
          Select Campaign
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
