import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className='w-full px-4 py-2 flex justify-between border-b-4'>
        <div className='flex gap-10 items-center'>
                <FaCalendarAlt />

            <ul className='flex gap-4'>
                <li>Home</li>
                <li>Discover</li>
                <li>Calender</li>
            </ul>
        </div>

        <div>
            <button className='bg-black text-white px-10 py-3 rounded-md'>Profile</button>
        </div>
    </nav>
  )
}

export default NavBar