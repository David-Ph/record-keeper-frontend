function SectionBlock(props) {
  return (
    <div className="bg-primary rounded-md my-2 p-2 w-full shadow-lg border border-black">
      {props.children}
    </div>
  );
}

export default SectionBlock;
