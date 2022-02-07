import React from "react";

const Input = React.forwardRef((props, ref) => {
  const extraClasses = props.extraClasses;
  return (
    <input
      {...props.input}
      ref={ref}
      placeholder={props.label}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onKeyDown={props.onKeyDown}
      className={`bg-yellow-100 rounded-md border w-full max-w-2xl px-2 py-1 box-border focus:outline-teal-600 focus:scale-105 transition-all ${extraClasses}`}
    />
  );
});

export default Input;
