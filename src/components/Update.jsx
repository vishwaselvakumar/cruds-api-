import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants';
import { useNavigate } from 'react-router-dom';

const Update = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [check, setCheck] = useState(false);
  const [id, setId] = useState('');

  const navigate = useNavigate();

  // Function to handle update
  const handleUpdate = async (event) => {
    event.preventDefault(); // Prevent form reload
    try {
      await axios.put(`${BASE_URL}/${id}`, { firstName, lastName, check });
      navigate('/read');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  // Populate state with data from localStorage
  useEffect(() => {
    setId(localStorage.getItem('id'));
    setFirstName(localStorage.getItem('firstName') || '');
    setLastName(localStorage.getItem('lastName') || '');
    setCheck(JSON.parse(localStorage.getItem('check')) || false);
  }, []);

  return (
    <>
      <div>
        <h1>Update User</h1>
      </div>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="firstName">First Name</label> <br />
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label> <br />
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            required
          />
        </div>
        <div>
          <label htmlFor="checked">Checked</label>
          <input
            id="checked"
            type="checkbox"
            checked={check}
            onChange={() => setCheck((prev) => !prev)}
            name="checked"
          />
        </div>
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default Update;
