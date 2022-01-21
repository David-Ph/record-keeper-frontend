import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import SectionBlock from "../UI/SectionBlock/SectionBlock";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="fixed top-0 left-0 w-full h-screen z-20 bg-black/50"
    ></div>
  );
};

const Overlay = (props) => {
  return (
    <div className="absolute mx-auto top-[10vh] w-4/5 max-w-xl z-30">
      <SectionBlock>{props.children}</SectionBlock>
    </div>
  );
};

const modalOverlay = document.getElementById("modal-overlay");

function Modal(props) {
  return (
    <div>
      <Fragment>
        {ReactDOM.createPortal(
          <Backdrop onClick={props.onClick} />,
          modalOverlay
        )}
        {ReactDOM.createPortal(
          <div className="flex justify-center">
            <Overlay>{props.children}</Overlay>
          </div>,
          modalOverlay
        )}
      </Fragment>
    </div>
  );
}

export default Modal;
