import React from 'react'

const Home = () => {
  return (
    <>
  
    <div style={{backgroundImage: "url(../public/back11.jpg)",  width: "100%", height: "100vh", backgroundSize: "cover",marginTop:"50px", position: ""}} >
    
    <div>
    <h1 style={{textAlign: "left", marginLeft:"200px",paddingTop:"200px",textDecoration:"None", color:"white",fontSize:"60px"}}>Fresh Aquatic Plants!!!</h1>
    </div>
    <div style={{textAlign: "left", marginTop: "20px", marginLeft:"200px",textDecoration:"None", color:"white",fontSize:"25px"}}>
      <p>Discover our diverse selection of vibrant, healthy<br/>aquarium plants to create a stunning and thriving <br/>aquascape.</p>
      <p>Get the best deals on aquatic plants for your aquarium.</p>
      <div style={{display: "flex", gap: "10px", paddingTop: "20px"}}>
      <button style={{backgroundColor: "green", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px"}}>Shop Now</button>
      <button style={{backgroundColor: "green", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px"}}>Contact Us</button>
    
    </div>
    </div>
    </div>
    <br></br>

    {/* <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../public/back1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../public/back11.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="../public/back.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    <br></br> */}
    <div className="container" style={{ marginTop: "50px" }}>
  {/* Heading *outside* the flex container */}
  <h1 style={{ 
    textAlign: "center", 
    borderBottom: "1px solid rgb(0, 0, 0)", 
    paddingBottom: "10px",
    marginBottom: "30px"  // Adds space below the heading
  }}>
    Available Products
  </h1>

  {/* Flex container for cards */}
  <div style={{ 
    display: "flex", 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "space-around",  // Evenly spaces cards
    gap: "20px"  // Adds consistent spacing between cards
  }}>
    {/* Card 1 */}
    <div className="card" style={{ width: "18rem" }}>  {/* Fixed width syntax */}
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    {/* Card 2 */}
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    {/* Card 3 */}
    <div className="card" style={{ width: "18rem" }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>

{/* our featured products */}
<div className="container" style={{ marginTop: "50px" }}>
  {/* Heading *outside* the flex container */}
  <h1 style={{ 
    textAlign: "center", 
    borderBottom: "1px solid rgb(0, 0, 0)", 
    paddingBottom: "10px",
    marginBottom: "30px"  // Adds space below the heading
  }}>
    Our Featured Products
  </h1>
</div>
 




    </>
  )
}

export default Home
