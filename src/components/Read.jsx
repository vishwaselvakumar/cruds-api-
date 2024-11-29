import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  // Function to update user data
  const updateUser = ({ firstName, lastName, check, id }) => {
    localStorage.setItem("id", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("check", check);

    navigate("/update");
  };

  // Function to delete user data by ID
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      fetchUsers(); // Fetch updated user list after deletion
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Function to fetch user data
  const fetchUsers = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setUsers(response.data); // Assuming response.data contains an array of users
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Use useEffect to call fetchUsers on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <h1>Users</h1>
      </div>
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checked</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.check ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => updateUser(user)}>Update</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Read;
