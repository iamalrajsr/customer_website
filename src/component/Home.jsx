import React from "react";
import Product from "./Product";



function Home() {
  return (
    <div className="hero ">
        <div className="card text-bg-dark text-white border-0 ">
  <img src="https://images.ctfassets.net/rxqefefl3t5b/6I2vL9f0IVsDQ8qFgdrxH7/7660c4bab3116a4a04025d5c4802efa5/Virgin-Red-online-shopping-offers.jpg?fl=progressive&q=80" className="card-img" alt="Home page background image" height="650px"/>
  <div className="card-img-overlay  d-flex flex-column justify-content-center mt-5">
    <div className="container mt-5 text-center">
    <h5 className="card-title display-5 fw-bolder mt-5  text-warning font-italic"><br/><br/><br/><br/>New Season Arrived</h5>
    <p className="card-title display-4 fw-bolder text-white font-italic ">Check Our Latest Collection</p>
   

    </div>
 
  </div>
</div>



<Product/>
    </div>
  );
}

export default Home;