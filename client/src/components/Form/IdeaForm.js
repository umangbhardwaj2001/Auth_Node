// src/components/IdeaForm.js

import React, { useState } from "react";

import axios from "axios";

function IdeaForm() {
  const [formData, setFormData] = useState({
    firstName: "",

    lastName: "",

    email: "",

    phoneNumber: "",

    address: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,

      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Assuming you have an API endpoint for saving user data

      const response = await axios.post("/api/users", formData);

      console.log("Data saved successfully:", response.data);
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <label class="form-label">
        First Name:
        <input
          class="form-control"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>

      <br />

      <label class="form-label">
        Last Name:
        <input
          class="form-control"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>

      <br />

      <label class="form-label">
        Email:
        <input
          class="form-control"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <br />

      <label class="form-label">
        Phone Number:
        <input
          class="form-control"
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </label>

      <br />

      <label class="form-label">
        Address:
        <textarea
          class="form-control"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default IdeaForm;
