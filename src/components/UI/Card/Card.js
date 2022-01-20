function Card(props) {
  return (
    <div className="p-2 rounded-md shadow-lg border border-slate-400 w-full md:flex md:justify-between">
      {props.children}
    </div>
  );
}

export default Card;
