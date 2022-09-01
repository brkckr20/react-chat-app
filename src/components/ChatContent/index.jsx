import React, { useState } from 'react';
import { IoCallOutline } from 'react-icons/io5'
import { BsCameraVideo } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import Picker from 'emoji-picker-react';

const ChatContent = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [emojiIsVisible, setEmojiIsVisible] = useState(false);

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
            <div className="chat-content-input position-relative">
                <div className='emoji-pick' style={emojiIsVisible ? { position: "absolute", bottom: 65 } : { display: "none", visibility: "hidden" }}>
                    <Picker />
                </div>
                <button onClick={() => setEmojiIsVisible(!emojiIsVisible)} style={{ border: "1px solid gray" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                </button>
            </div>
        </div>
    )
}

export default ChatContent

/* FiMoreHorizontal */