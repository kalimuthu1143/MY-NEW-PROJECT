import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EventDetail({ match }) {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`/api/events/${match.params.id}`);
        setEvent(response.data);
      } catch (error) {
        console.error('Error fetching event:', error.response.data);
      }
    };
    fetchEvent();
  }, [match.params.id]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{event.title}</h2>
      <p>{event.description}</p>
      <p>Date: {new Date(event.date).toLocaleString()}</p>
      <p>Location: {event.location}</p>
      <p>Created By: {event.created_by}</p>
    </div>
  );
}

export default EventDetail;