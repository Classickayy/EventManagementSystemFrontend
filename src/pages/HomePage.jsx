import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'
import {Calendar, dateFnsLocalizer } from "react-big-calendar";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {format, parse, startOfWeek, getDay} from 'date-fns';
import {enUS} from 'date-fns/locale';
import axios from 'axios';
const locales = {
    'en-US': enUS,
};

// Localizer setup for  date formatting
const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const HomePage = () => {
const [events, setEvents] = useState([])
const [calendarEvents, setCalendarEvents] = useState([])
const [filters, setFilters] = useState({
    eventType: [],
    date: ""
})

useEffect(()=>{
    fetchEvents()
    fetchEventsForCalendar()
},[])

const fetchEvents = async () => {
    try {
        const response = await axios.get("http://localhost:3000/api/events/getEvents")
        const formattedEvents = formatEventsForCalendar(response.data.events)
        setEvents(formattedEvents)
    } catch (error) {
        console.error("Error fetching events:", error)
    }
}

const fetchEventsForCalendar = async () => {
    const response = await axios.get("http://localhost:3000/api/events/getEvents")
    setCalendarEvents(response.data.events)
}

const formatEventsForCalendar = (events) => {
    return events.map(event => ({
        title: event.name,
        start: new Date(event.event_date + ' ' + event.event_time),
        end: new Date(event.event_date + ' ' + event.event_time),
        allDay: false,
        resource: {
            id: event.id,
            description: event.description,
            location: event.location,
        }
    }))
}

const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target
    setFilters(prev => ({
        ...prev,
        [name]: value
    }))
}

const filteredEvents = calendarEvents.filter(event => {
    const matchesType = filters.eventType.length === 0 || filters.eventType.includes(event.type);
    const matchesDate = !filters.date || event.event_date === filters.date;
    return matchesType && matchesDate;
});

  return (
    <div>
        <NavBar/>

        <main className='flex justify-center gap-60 p-10'>
            <section className='px-4 py-4 border flex flex-col gap-5 h-1/2 border-black w-4/12 rounded-lg shadow-lg'>
                    <h2 className='text-xl font-bold uppercase'>My Preferences</h2>
                    <div>
                        <h1>Event Type</h1>
                        <ul>
                            <li className='flex items-center'>
                                <input type="checkbox" name="eventType" value="Workshop" onChange={handleFilterChange} />
                                <p>Workshop</p>
                            </li>
                            <li className='flex items-center'>
                                <input type="checkbox" name="eventType" value="Seminars" onChange={handleFilterChange} />
                                <p>Seminars</p>
                            </li>
                            <li className='flex items-center'>
                                <input type="checkbox" name="eventType" value="Club activities" onChange={handleFilterChange} />
                                <p>Club activities</p>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="Date">Date</label>
                            <input type="date" name="date" onChange={handleFilterChange} />
                        </div>
                    </div>
            </section>

            <section className='mr-6 flex flex-col gap-3'>
              <h1 className='font-bold text-2xl uppercase'>Events You Might Like</h1>

                <div className='flex gap-5 border-b-2 border-black pb-6'>
                    {filteredEvents.slice(0, 3).map((event) => (
                        <EventCard key={event.id} filters={filters} event={event} />
                    ))}
                </div>

<div>
    <h1 className='font-bold'>Event Calendar</h1>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    selectable
                    className='bg-white text-black'
                />
</div>
        
            </section>

        </main>

        <Footer/>
    </div>
  )
}

export default HomePage