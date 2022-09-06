import React from 'react'
import styles from './Message.module.css'
const Messages = ({ message }) => {

    return (
        <div style={message.me ? { float: "right" } : {}}>
            <div className='d-flex w-100 align-items-end'>
                <p className={styles.other} style={message.me ? { backgroundColor: "#0a80ff", color: "#fff" } : {}}>{message.message}</p>
                <p className={styles.time}>{message.time}</p>
            </div>
        </div>
    )
}

export default Messages