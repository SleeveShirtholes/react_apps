import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";

function Backdrops(props) {
  return <div className={classes.backdrop} onClick={props.onClose} />;
}

function Overlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrops onClose={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <Overlay>{props.children}</Overlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
