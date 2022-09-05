import React, { useState } from 'react';
import { IoCallOutline } from 'react-icons/io5'
import { BsCameraVideo } from 'react-icons/bs'
import { FiMoreHorizontal } from 'react-icons/fi'
import Picker from 'emoji-picker-react';

const ChatContent = () => {

    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [emojiIsVisible, setEmojiIsVisible] = useState(false);

    function emojiSelect(e, emoji) {
        setChosenEmoji(emoji);

    }

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
            <div className="chat-content-input position-relative d-flex align-items-center">
                <div className='mr-16px'>
                    <div className='emoji-pick' style={emojiIsVisible ? { position: "absolute", bottom: 65 } : { display: "none", visibility: "hidden" }}>
                        <Picker onEmojiClick={emojiSelect} />
                    </div>
                    <button onClick={() => setEmojiIsVisible(!emojiIsVisible)} style={{ border: "1px solid gray", padding: "4px 10px" }} className="write-msg-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
                    </button>
                </div>
                <div className='flex-fill mr-16px'>
                    <input type="text" className='form-control' name="message" placeholder='Write a message' />
                </div>
                <div className="message-actions">
                    <button onClick={() => setEmojiIsVisible(!emojiIsVisible)} style={{ border: "1px solid gray", padding: "4px 10px" }} className="write-msg-btn mr-16px">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-paperclip"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
                    </button>
                    <button onClick={() => setEmojiIsVisible(!emojiIsVisible)} style={{ border: "1px solid gray", padding: "4px 10px" }} className="write-msg-btn bg-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatContent

/* FiMoreHorizontal */