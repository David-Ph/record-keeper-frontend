function Button(props) {
  const { color, width } = props;

  const buttonWidth = width ? width : "w-full";
  const buttonColor = color ? color : "bg-secondary text-white";

  return (
    <button
      className={`rounded-md border border-black my-1 px-2 py-1 box-border hover:bg-tertiary ${buttonWidth} ${buttonColor}`}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}

export default Button;
