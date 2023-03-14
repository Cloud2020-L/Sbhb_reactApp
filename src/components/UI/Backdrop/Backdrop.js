import React from 'react';
import classes from './Backdrop.module.css';
import ReactDOM from 'react-dom';

const BackdropRoot = document.getElementById('backdrop-root');

const Backdrop = (props) => {
    return ReactDOM.createPortal(<div {...props} className={`${classes.Backdrop} ${props.className}`}>
        {props.children}
    </div>, BackdropRoot)
};

export default Backdrop;