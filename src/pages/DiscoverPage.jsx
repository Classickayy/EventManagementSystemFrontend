import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'
import axios from 'axios'

const DiscoverPage = () => {
  const [events, setEvents] = useState([])
  const [filters, setFilters] = useState({
    eventType: [],
    date: '',
    location: ''
  })

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/events/getEvents")
      setEvents(response.data.events)
    } catch (error) {
      console.error("Error fetching events:", error)
    }
  }

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFilters(prev => ({
        ...prev,
        eventType: checked 
          ? [...prev.eventType, value]
          : prev.eventType.filter(type => type !== value)
      }))
    } else {
      setFilters(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Discover Events</h1>
        
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Filters</h2>
              
              <div className="mb-6">
                <h3 className="font-medium mb-2">Event Type</h3>
                <div className="space-y-2">
                  {['Workshop', 'Seminar', 'Conference', 'Social', 'Career Fair'].map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        name="eventType"
                        value={type}
                        onChange={handleFilterChange}
                        className="rounded border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Date</h3>
                <input
                  type="date"
                  name="date"
                  onChange={handleFilterChange}
                  className="w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">Location</h3>
                <input
                  type="text"
                  name="location"
                  placeholder="Enter location"
                  onChange={handleFilterChange}
                  className="w-full rounded-md border-gray-300 shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default DiscoverPage 