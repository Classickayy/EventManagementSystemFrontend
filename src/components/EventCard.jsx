import React from 'react'
import { useNavigate } from 'react-router-dom'
const EventCard = ({event, filters}) => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    const handleRSVP = () => {
      if(user) {
        localStorage.setItem("event", JSON.stringify(event))
        navigate("/rsvpconfirm")
      } else {
        navigate("/login")
      }
    }
    const imagePicker = () => {
        if(event.name.includes("Web")) {
            return "Webdev.jpeg"
        } else if(event.name.includes("Health")) {
            return "Health.jpeg"
        } else if(event.name.includes("Club")) {
          return "Photo.jpeg"
        }
    }
  return (
    <div className='border flex flex-col justify-end items-center p-4 rounded-lg border-black shadow-lg hover:shadow-xl transition-all duration-300'>
        <img style={{width:"10rem"}} className='h-auto' src={imagePicker()} alt="" />
        <div className='flex flex-col gap-2'>
            <h1 className='font-bold text-xl text-center'> {event.name}</h1>
            <p>{event.description}</p>
            <div className='flex gap-2'>
              <p>{event.event_time}</p>,
              <p>{event.event_date}</p>
            </div>
            <p>{event.location}</p>
            <button onClick={handleRSVP} className='bg-black px-4 py-2 text-white w-full rounded-md'>RSVP Now</button>
        </div>
    </div>
  )
}

export default EventCard