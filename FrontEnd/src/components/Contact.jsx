import React from 'react'
import './Login.css'
import DavCollegeMap from './MapComponent'
const Contact = () => {
  return (
    <>
        <div className="contact-background">
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p>We would love to hear from you.<br/>
      Feel free to reach out using the below details.</p>
      </div>
      <div className="contact-containerr">
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
 </div>
 </div>
 <div className='map-container' style={{display:"flex"}}>
<DavCollegeMap/>
    
 <div className="contact-container" >
      <h1 className="contact-title">Visit Us</h1>
      <h3>Address : </h3>
      <p>FishTopia, Dhobighat, lalitpur-7, 44700</p>
      </div>
      </div>
    </>
  )
}

export default Contact