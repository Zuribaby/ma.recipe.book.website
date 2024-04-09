import React, { useState } from "react";
import "../css/ContactForm.css";

const ContactFormBox = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      if (!formData.name) {
        throw new Error("Name field cannot be empty");
      }

      if (!formData.email) {
        throw new Error("Email field cannot be empty");
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      if (!formData.message) {
        throw new Error("Message field cannot be empty");
      }

      // If all validations pass, you can proceed with form submission
      console.log("Form submitted:", formData);
      // You can add code here to send the form data to your backend or handle it accordingly

      // Clear form after submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setErrors({ ...errors, [error.field]: error.message });
    }
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contacth2">Contact Us</h2>
      <div className="contact-form-box">
        <div className="contact-form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <span className="error">{errors.message}</span>
              )}
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormBox;
