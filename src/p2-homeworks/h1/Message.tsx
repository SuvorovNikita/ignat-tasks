import React from "react";
import classes from "./Message.module.css";

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageType) {

    let {avatar, name, message, time} = props;

    return (<div className={classes.wrapper}>
            <img className={classes.avatar} src={avatar} alt="Ошибка"/>
            <div className={`${classes.message} ${classes.left}`}>
                <div className={classes.chat}>
                    <div className={classes.name}>{name}</div>
                    <p className={classes.messages}>{message}</p>
                    <div className={classes.time}>{time}</div>
                </div>
            </div>
        </div>
    );
}

export default Message;
