function Card(props) {
  return (
    <div className="p-2 rounded-md shadow-lg border border-black">
      {props.children}
    </div>
  );
}

export default Card;
