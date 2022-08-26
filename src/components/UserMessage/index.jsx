import React from 'react'

const UserMessage = ({ username, message, image }) => {
    return (
        <div className='d-flex'>
            <div className="user-message-profile-pictures">
                <img src={image} alt="kullanici profili" />
            </div>
            <div className='d-flex w-100 justify-content-between'>
                <div className="user-message-user-info">
                    <h2 className="user-name">
                        {username}
                    </h2>
                    <p className="user-message">
                        {message.length > 30 ? message.substring(0, 30) + '...' : message}
                    </p>
                </div>
                <div className="user-message-msg-info">
                    <div className='text-right new-message-count'><span>3</span></div>
                    <div className='text-right message-time'>03:41 PM</div>
                </div>
            </div>
        </div>
    )
}

export default UserMessage