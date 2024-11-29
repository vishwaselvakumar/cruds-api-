import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [check, setCheck] = useState(false);

  const navigate = useNavigate(); // useNavigate must be inside the functional component

 const postData  = () => {
  try {
    const response = axios.post(BASE_URL , {firstName, lastName, check})
    console.log(response.data)
    navigate("/read")
  } catch (error) {
    console.error("eeeee" , error)
  }
 }

 const handleSubmit =(e)=>  {
  e.preventDefault();
  postData();
 }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label> <br />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            name="firstName"
            required
          />
        </div>
        <div>
          <label>Last Name</label> <br />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            name="lastName"
            required
          />
        </div>
        <div>
          <label>Checked</label>
          <input
            type="checkbox"
            checked={check}
            onChange={() => setCheck((prev) => !prev)}
            name="checked"
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Create;
