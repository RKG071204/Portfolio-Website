import React, { useState } from 'react';
import '../styles/Contact.css'; // Import the CSS file for Contact component

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission and data saving here
    // Example: You can send the form data to an API endpoint or save it to a database
    console.log('Form submitted:', { name, email, mobile, message });
    // Reset form fields
    setName('');
    setEmail('');
    setMobile('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h2>Contact Information</h2>
      <p>Name:- RAKESH KUMAR GAUTAM</p>
      <p>Email:- rkg71204@gmail.com</p>
      <p>LinkedIn:- linkedin.com/in/rakesh-kumar-gautam-340b23133/</p>
      <p>GitHub:- github.com/RKG071204</p>

      <h2>Contact Form</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile No:</label>
          <input
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={250}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;