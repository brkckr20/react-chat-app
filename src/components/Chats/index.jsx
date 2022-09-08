import React from 'react'

import { useSelector } from 'react-redux'

import { FiUsers } from 'react-icons/fi'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import UserMessage from '../UserMessage'

const Chats = () => {

    const { darkMode } = useSelector(state => state.theme)

    return (
        <div>
            <div className="sidebar-group-header">
                <h1 className='poppins mb-0'>Chats</h1>
                <div>
                    <span><FiUsers /></span>
                    <span><AiOutlinePlusCircle /></span>
                </div>
            </div>
            <div className={`sidebar-group-input poppins ${darkMode && 'dark-mode-on-input-bg'}`}>
                <input type="text" className={`${darkMode && 'dark-mode-on-input-bg text-white'}`} placeholder='Search chats' />
            </div>
            <div className="sidebar-group-chatlist">
                <div className="sidebar-group-chatitem">
                    <UserMessage username="Byrom Guittet" message="I sent you all the files. Good luck with 😃" image="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar4.jpg" />
                </div>
                <div className="sidebar-group-chatitem">
                    <UserMessage username="Burak Çakır" message="Hello!" image="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar3.jpg" />
                </div>
                <div className="sidebar-group-chatitem">
                    <UserMessage username="Byrom Guittet" message="I sent you all the files. Good luck with 😃" image="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar4.jpg" />
                </div>
                <div className="sidebar-group-chatitem">
                    <UserMessage username="Burak Çakır" message="Hello!" image="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar3.jpg" />
                </div>
                <div className="sidebar-group-chatitem">
                    <UserMessage username="Byrom Guittet" message="I sent you all the files. Good luck with 😃" image="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar4.jpg" />
                </div>
                <div className="sidebar-group-chatitem">
                    <UserMessage username="Burak Çakır" message="Hello!" image="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar3.jpg" />
                </div>
                <div className="sidebar-group-chatitem">
                    <UserMessage username="Byrom Guittet" message="I sent you all the files. Good luck with 😃" image="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar4.jpg" />
                </div>
                <div className="sidebar-group-chatitem">
                    <UserMessage username="Burak Çakır" message="Hello!" image="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar3.jpg" />
                </div>
                <div className="sidebar-group-chatitem">
                    <UserMessage username="Byrom Guittet" message="I sent you all the files. Good luck with 😃" image="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar4.jpg" />
                </div>
                <div className="sidebar-group-chatitem">
                    <UserMessage username="Burak Çakır" message="Hello!" image="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar3.jpg" />
                </div>
                <div className="sidebar-group-chatitem">
                    <UserMessage username="Byrom Guittet" message="I sent you all the files. Good luck with 😃" image="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar4.jpg" />
                </div>
                <div className="sidebar-group-chatitem">
                    <UserMessage username="Burak Çakır" message="Hello!" image="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar3.jpg" />
                </div>
            </div>
        </div>
    )
}

export default Chats