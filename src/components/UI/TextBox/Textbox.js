import Card from "../Card/Card";

function Textbox(props) {
  return (
    <div className="bg-primary rounded-md my-2 border border-black">
      <Card>{props.children}</Card>
    </div>
  );
}

export default Textbox;
