import React, { useState } from "react";
const axios = require("axios");
import apiClient from "../../utils/apiClient";

function IdeaForm() {
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("email");
  const [formData, setFormData] = useState({
    ideaName: "",
    description: "",
    category: "",
    ownerName: username,
    ownerId: userId,
    reusable: "",
    businessValue: "",
    comments: "",
    link: "",
    pictureFile: "",
    createdDate: "",
    ownerEmail: email,
    ideaId: "",
  });
  const [message, setMessage] = useState(null);
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
      const response = await apiClient.post("/postIdea", formData);
      setMessage("Data saved successfully:", response.data);
      // console.log("Data saved successfully:", response.data);
    } catch (error) {
      setMessage("Error saving data:", error);
      // console.error("Error saving data:", error);
    }
  };

  return (
    <div>
      {message && <div>{message}</div>}
      <form onSubmit={handleSubmit} className="mb-3">
        <label className="form-label">
          Idea Name:
          <input
            className="form-control"
            type="text"
            name="ideaName"
            value={formData.ideaName}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className="form-label">
          Description:
          <textarea
            className="form-control"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className="form-label">
          Category:
          <input
            className="form-control"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className="form-label">
          Owner Name:
          <input
            className="form-control"
            type="text"
            name="ownerName"
            value={formData.ownerName}
            // onChange={handleChange}
            readOnly // Make the field read-only
          />
        </label>
        <br />

        <label className="form-label">
          Owner ID:
          <input
            className="form-control"
            type="number"
            name="ownerId"
            value={formData.ownerId}
            // onChange={handleChange}
            readOnly
          />
        </label>
        <br />

        <label className="form-label">
          Reusable:
          <input
            className="form-control"
            type="text"
            name="reusable"
            value={formData.reusable}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className="form-label">
          Business Value:
          <input
            className="form-control"
            type="text"
            name="businessValue"
            value={formData.businessValue}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className="form-label">
          Comments:
          <textarea
            className="form-control"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className="form-label">
          Link:
          <input
            className="form-control"
            type="url"
            name="link"
            value={formData.link}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className="form-label">
          Picture File:
          <input
            className="form-control"
            type="text"
            name="pictureFile"
            value={formData.pictureFile}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className="form-label">
          Created Date:
          <input
            className="form-control"
            type="date"
            name="createdDate"
            value={formData.createdDate}
            onChange={handleChange}
          />
        </label>
        <br />

        <label className="form-label">
          Owner Email:
          <input
            className="form-control"
            type="email"
            name="ownerEmail"
            value={formData.ownerEmail}
            // onChange={handleChange}
            readOnly
          />
        </label>
        <br />

        <label className="form-label">
          Idea ID:
          <input
            className="form-control"
            type="number"
            name="ideaId"
            value={formData.ideaId}
            onChange={handleChange}
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default IdeaForm;
