function Card(props) {
  return (
    <div className="p-2 rounded-xl shadow-lg border border-black">
      {props.children}
    </div>
  );
}

export default Card;
