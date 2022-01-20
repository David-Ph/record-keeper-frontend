function Button(props) {
  return (
    <button
      className={`rounded-md border border-black mt-2 px-2 py-1 box-border bg-secondary text-white ${
        props.width ? `w-${props.width}` : "w-full"
      } hover:bg-tertiary`}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
}

export default Button;
