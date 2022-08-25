import React from 'react'
import { BsChatText, BsChat } from 'react-icons/bs'
import { AiOutlineUser, AiOutlineStar } from 'react-icons/ai'
import { GoArchive } from 'react-icons/go'
import { BiMoon } from 'react-icons/bi'

const Navigation = () => {
    return (
        <nav id='navigation'>
            <ul className="nav-group d-flex flex-column h-100 list-unstyled">
                <li className='nav-logo text-center'>
                    <BsChatText size={30} fill={"#0a80ff"} />
                </li>
                <li className="nav-list-item text-center position-relative">
                    <a href="!#">
                        <BsChat size={14} fill={"#0a80ff"} />
                        <span style={{ backgroundColor: "#ffb822" }}></span>
                    </a>
                </li>
                <li className="nav-list-item text-center position-relative">
                    <AiOutlineUser size={18}/*  fill={"#0a80ff"} */ />
                    <span style={{ backgroundColor: "#fd397a" }}></span>
                </li>
                <li className="nav-list-item text-center position-relative">
                    <AiOutlineStar size={18}/*  fill={"#0a80ff"} */ />
                </li>
                <li className="nav-list-item text-center position-relative archived">
                    <GoArchive size={18}/*  fill={"#0a80ff"} */ />
                </li>
                <li className="nav-list-item text-center position-relative">
                    <BiMoon size={18} />
                </li>
                <li className="nav-list-item text-center position-relative">
                    <img width="37px" className='rounded-circle' src="https://slek.laborasyon.com/demos/default/dist/media/img/women_avatar5.jpg" alt="User Profile" />
                </li>

            </ul>
        </nav>
    )
}

export default Navigation