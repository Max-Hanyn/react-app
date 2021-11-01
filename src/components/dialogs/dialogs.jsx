import React from "react";
import classes from './dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
   return (
       <div>
           <div className={classes.dialog + ' ' + classes.active}>
               <NavLink to={path}>{props.name}</NavLink>
           </div>
       </div>
   );
}

const MessageItem = (props) => {

    return (
        <div className={classes.message}>
            {props.message}
        </div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name='Name-1' id='1'/>
                <DialogItem name='Name-2' id='2'/>
                <DialogItem name='Name-3' id='3'/>

            </div>
            <div className={classes.messagesItem}>
                <MessageItem message='123'/>
                <MessageItem message='456'/>
                <MessageItem message='789'/>
            </div>


        </div>
    );
}

export default Dialogs;