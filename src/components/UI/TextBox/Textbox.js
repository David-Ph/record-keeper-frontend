import Card from "../Card/Card";

function Textbox(props) {
  return (
    <div className="rounded-md my-2 flex text-center">
      <Card>{props.children}</Card>
    </div>
  );
}

export default Textbox;
