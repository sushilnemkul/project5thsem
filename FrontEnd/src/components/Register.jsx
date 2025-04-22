import React from 'react'
import Navbar from './Navbar'
import './Register.css';

const Register = () => {
  return (
    <>

<section className="container">
  <header>Registration Form</header>
  <form className="form" action="#">
      <div className="input-box">
          <label>Full Name</label>
          <input required="" placeholder="Enter full name" type="text"/>
      </div>
      <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input required="" placeholder="Enter phone number" type="telephone"/>
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input required="" placeholder="Enter birth date" type="date"/>
          </div>
      </div>
      <div className="gender-box">
        <label>Gender</label>
        <div className="gender-option">
          <div className="gender">
            <input checked="" name="gender" id="check-male" type="radio"/>
            <label for="check-male">Male</label>
          </div>
          <div className="gender">
            <input name="gender" id="check-female" type="radio"/>
            <label for="check-female">Female</label>
          </div>
          <div className="gender">
            <input name="gender" id="check-other" type="radio"/>
            <label for="check-other">Prefer not to say</label>
          </div>
        </div>
      </div>
      <div className="input-box address">
        <label>Address</label>
        <input required="" placeholder="Enter street address" type="text"/>
        <div className="column">
          <div className="select-box">
            <select>
              <option hidden="">Country</option>
              <option>USA</option>
              <option>UK</option>
              <option>Germany</option>
              <option>Japan</option>
            </select>
          </div>
        <input required="" placeholder="Enter your city" type="text"/>
        </div>
      </div>
      <button>Submit</button>
  </form>
</section>
    </> 
  )
}

export default Register