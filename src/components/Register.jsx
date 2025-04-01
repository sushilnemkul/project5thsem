import React from 'react'
import Navbar from './Navbar'

const Register = () => {
  return (
    <>
<div style={{backgroundColor: "#f0f0f0", height: "600px", width: "400px",marginLeft: "auto", marginRight: "auto",marginTop: "50px", display: "flex", flexDirection: "column", alignItems: "center"}}>
    <h1 style={{textAlign: "center", marginTop: "100px"}}>Register</h1>
    <form style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
      <input type="text" placeholder="Username" style={{marginBottom: "20px"}}/>
      <input type="email" placeholder="Email" style={{marginBottom: "20px"}}/>
      <input type="password" placeholder="Password" style={{marginBottom: "20px"}}/>
      <button type="submit" style={{padding: "10px 20px"}}>Register</button>    
 
    <p style={{marginTop: "20px"}}>Already have an account? <a href="/login">Login</a></p>

    </form>
    <div style={{textAlign: "center", marginTop: "20px"}}>
      <p>Or register with:</p>
      <button style={{marginRight: "10px"}}><i class="bi bi-google"></i></button>
      <button><i class="bi bi-facebook"></i></button>    
    </div>
  </div>
    </> 
  )
}

export default Register