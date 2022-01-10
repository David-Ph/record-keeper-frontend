import Card from "../Card/Card";

function Textbox(props) {
  return (
    <div className="bg-primary rounded-md m-2">
      <Card>{props.children}</Card>
    </div>
  );
}

export default Textbox;
