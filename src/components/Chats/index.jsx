import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { AiOutlinePlusCircle } from 'react-icons/ai'

const Chats = () => {
    return (
        <div>
            <div className="sidebar-group-header">
                <h1 className='poppins mb-0'>Chats</h1>
                <div>
                    <span><FiUsers /></span>
                    <span><AiOutlinePlusCircle /></span>
                </div>
            </div>
            <div className="sidebar-group-input poppins">
                <input type="text" placeholder='Search chats' />
            </div>
        </div>
    )
}

export default Chats