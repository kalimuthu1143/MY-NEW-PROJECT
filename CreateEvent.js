import React, { useState } from 'react';
import axios from 'axios';

function CreateEvent() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/events', {
        ...formData,
        createdBy: 'user-id' // Replace with actual user ID from authentication
      });
      console.log('Event created:', response.data);
    } catch (error) {
      console.error('Error creating event:', error.response.data);
    }
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Date:</label>
          <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;