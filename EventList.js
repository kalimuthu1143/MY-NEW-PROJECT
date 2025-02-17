import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('/api/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error.response.data);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/create-event">Create Event</Link>
    </div>
  );
}

export default EventList;