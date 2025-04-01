import React from 'react'

const Login = () => {
  return (
    <>

    <h1 style={{textAlign: "center", marginTop: "100px"}}>Login</h1>
    <form style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px"}}>
      <input type="text" placeholder="Username" style={{marginBottom: "20px"}}/>
      <input type="password" placeholder="Password" style={{marginBottom: "20px"}}/>
      <button type="submit" style={{padding: "10px 20px"}}>Login</button>
    </form>
    </>
  )
}

export default Login