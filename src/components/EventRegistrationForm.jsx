import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EventRegistrationForm = () => {
  const { eventName } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    year: '',
    college: ''
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
      await axios.post('http://localhost:5000/api/register', {
        ...formData,
        event: eventName
      });
      alert('Registration complete');
      navigate('/');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('There was an error submitting the form');
    }
  };

  return (
    <div className="flex justify-center xl:mt-12">
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 bg-black-100 p-8 rounded-2xl">
        <h2 className="text-white font-bold text-3xl mb-8">Register for {eventName}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-tertiary py-3 px-4 text-white rounded-lg outline-none border-none"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Branch</span>
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="bg-tertiary py-3 px-4 text-white rounded-lg outline-none border-none"
              required
            >
              <option value="">Select your branch</option>
              <option value="cse">CSE</option>
              <option value="it">IT</option>
              <option value="ece">ECE</option>
              <option value="ee">EE</option>
              <option value="mechanical">Mechanical</option>
              <option value="biotech">Biotech</option>
              <option value="civil">Civil</option>
              <option value="mca">MCA</option>
              <option value="architecture">Architecture</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Year</span>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="bg-tertiary py-3 px-4 text-white rounded-lg outline-none border-none"
              required
            >
              <option value="">Select your year</option>
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="third">Third</option>
              <option value="third">Fourth</option>
            </select>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">College</span>
            <input
              type="text"
              name="college"
              value={formData.college}
              onChange={handleChange}
              placeholder="Enter your college"
              className="bg-tertiary py-3 px-4 text-white rounded-lg outline-none border-none"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-primary py-3 px-8 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            Submit
          </button>
        </form>
        <button
          className="bg-secondary py-3 px-8 mt-4 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          onClick={() => navigate('/')}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default EventRegistrationForm;
