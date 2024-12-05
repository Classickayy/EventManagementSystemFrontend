import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className='w-full px-4 py-2 flex justify-between'>
        <div className='flex gap-3'>
                <FaCalendarAlt />

            <ul className='flex gap-2'>
                <li>Home</li>
                <li>Discover</li>
                <li>Calender</li>
            </ul>
        </div>

        <div>
            <button className='bg-black text-white px-4 py-5'>Profile</button>
        </div>
    </nav>
  )
}

export default NavBar