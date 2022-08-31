import React, { useState } from 'react';
import { IoCallOutline } from 'react-icons/io5'
import { BsCameraVideo } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'

const ChatContent = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

    return (
        <div id='chat-content' className='w-100'>
            <div className="chat-content-header d-flex justify-content-between align-items-center">
                <div className='picture-and-username d-flex'>
                    <div className="chat-content-pictures">
                        <img src="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar4.jpg" alt="kullanici resmi" />
                    </div>
                    <div className="chat-content-username">
                        <h3>Burak Çakır</h3>
                        <h5>writing...</h5>
                    </div>
                </div>
                <div className="chat-content-header-actions">
                    <span><IoCallOutline size={18} /></span>
                    <span><BsCameraVideo size={18} /></span>
                    {/* <span><FiMoreHorizontal size={18} /></span> */}
                    <span onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
                        <div className={`btn-group ${dropdownIsOpen ? 'show' : ''}`}>
                            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <FiMoreHorizontal size={18} />
                            </button>
                            <div className={`dropdown-menu dropdown-menu-right ${dropdownIsOpen ? 'show' : ''}`}>
                                <button className="dropdown-item" type="button">Profile</button>
                                <button className="dropdown-item" type="button">Add to archive</button>
                                <button className="dropdown-item" type="button">Delete</button>
                                <div className="dropdown-divider"></div>
                                <button className="dropdown-item" type="button">Block</button>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            <div className="chat-content-messages flex-fill">
                yazilan mesajların listelendiği alan
            </div>
            <div className="chat-content-input">
                yeni mesaj yazma alanı
            </div>
        </div>
    )
}

export default ChatContent

/* FiMoreHorizontal */