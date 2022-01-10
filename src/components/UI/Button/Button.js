function Button(props) {
  return (
    <button
      className={`rounded-md border border-black px-2 py-1 box-border bg-yellow-100 ${props.width ? `w-${props.width}` : "w-full"} hover:bg-yellow-200`}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}

export default Button;
