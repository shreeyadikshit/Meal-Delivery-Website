import React from 'react';
import classes from './Modal.module.css';
import reactDom from 'react-dom';

function Backdrop(props) {
  return (
    <div className={classes.backdrop} onClick={props.onClose}></div>
  )
}
function ModalOverlay(props) {
    return (<div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
  )
}

const portalElement = document.getElementById('overlays');

function Modal(props) {
    return (
        <>        
        {reactDom.createPortal(<Backdrop onClose={props.onHide}/>,portalElement)}
        {reactDom.createPortal( 
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement)}
        </>
    )
}

export default Modal