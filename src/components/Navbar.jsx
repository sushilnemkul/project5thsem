import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position: "fixed", top: "0", width: "100%", zIndex: "1"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={{paddingLeft: "150px", height: "10px", width: "10px"}} href="/">
    <img src="../public/logo-removebg-preview.png" style={{maxHeight:"40px", display: "flex", marginTop: "-20px"}}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" style={{paddingLeft: "500px", gap: "10px", display: "flex", alignItems: "center"}} aria-current="page" href="/home">HOME</a>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            SHOP
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="/">Plants</Link></li>
            <li><Link className="dropdown-item" href="/">Live Stocks</Link></li>
            <li> <Link className="dropdown-item" href="/">Aquarium Hardscape</Link></li>
            <li><Link className="dropdown-item" href="/">Lights</Link></li>
            <li><Link className="dropdown-item" href="/">Tank</Link></li>
            <li><Link className="dropdown-item" href="/">Substrates</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/">CONTACT</Link>
        </li>
        <li className="nav-item">
  <Link className="nav-link" href="/">Rs.0.00<i className="bi bi-cart4" style={{paddingLeft: "10px", fontWeight: "bold"}}></i></Link>
</li>
<li className="nav-item">
  <Link className="nav-link" href="/login"><i className="bi bi-person-square" style={{paddingLeft: "10px", fontWeight: "bold"}}></i></Link>
</li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <Link href="/">
        <button className="btn btn-outline-success" type="submit" style={{marginRight: "100px"}}>Search</button>
        </Link>
        </form>
      
    </div>
  </div>
</nav>
  <div className="alert alert-danger alert-warning alert-dismissible fade show z-1" style={{position: "fixed", top: "0", width: "100%", zIndex: "1"}} role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  </>
  )
}

export default Navbar