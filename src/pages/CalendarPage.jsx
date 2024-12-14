import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import {Calendar, dateFnsLocalizer} from "react-big-calendar"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {format, parse, startOfWeek, getDay} from 'date-fns'
import {enUS} from 'date-fns/locale'
import axios from 'axios'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/events/getEvents');
      const formattedEvents = formatEventsForCalendar(response.data.events);
      setEvents(formattedEvents);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const formatEventsForCalendar = (events) => {
    return events.map((event) => ({
      title: event.name,
      start: new Date(event.event_date + ' ' + event.event_time),
      end: new Date(event.event_date + ' ' + event.event_time),
      allDay: false,
      resource: {
        id: event.id,
        description: event.description,
        location: event.location,
      },
    }));
  };

  return (
    <div>
      <NavBar />
      <main className="min-h-screen p-8">
        <h1 className="text-2xl font-bold mb-6">Event Calendar</h1>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 700 }}
          selectable
          className='bg-white text-black'
        />
      </main>
      <Footer />
    </div>
  )
}

export default CalendarPage 