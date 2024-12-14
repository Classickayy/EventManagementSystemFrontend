import React, { useState, useEffect } from 'react'
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if(user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  }

  return (
    <nav className='w-full px-4 py-2 flex justify-between border-b-4'>
        <div className='flex gap-10 items-center'>
                <FaCalendarAlt />

            <ul className='flex gap-4'>
                <li className="cursor-pointer" onClick={() => navigate('/')}>Home</li>
                <li className="cursor-pointer" onClick={() => navigate('/discover')}>Discover</li>
                <li className="cursor-pointer" onClick={() => navigate('/calendar')}>Calendar</li>
            </ul>
        </div>
{
  user ? (  
    <div className='flex gap-4'>
      <button className='bg-black text-white px-10 py-3 rounded-md' onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <div className='flex gap-4'>
            <button className='bg-black text-white px-10 py-3 rounded-md' onClick={() => navigate('/login')}>Login</button>
            <button className='bg-black text-white px-10 py-3 rounded-md' onClick={() => navigate('/signup')}>Sign Up</button>
        </div>
        )}
    </nav>
  )
}

export default NavBar