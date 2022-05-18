import Card from "../Card/Card";

function Textbox(props) {
  return (
    <div className="rounded-md my-2 flex">
      <Card>{props.children}</Card>
    </div>
  );
}

export default Textbox;
