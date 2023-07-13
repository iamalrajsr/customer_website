import React from "react";
import { NavLink } from "react-router-dom";



function Products() {
    return (

        <div className="pro">
            <div class="container">
            <div class="card-heading  mt-">
                               <h2 className="fw-bold ">Our Vendors</h2>
                            </div>
                <div class="row mt-">
                    <div class="col-md-3 mb-5 mt-3">
                        <div class="card-sl ">
                            <div class="card-image">
                                <img src="https://m.media-amazon.com/images/I/61dUCXFgN3L.jpg" />
                            </div>

                            <a class="" href="#"></a>
                            <div class="card-heading mt-2">
                                Rarichans 
                            </div>
                            {/* <div class="card-text">
                                Rarichan products  is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
                            </div> */}
                            {/* <div class="card-text text-center">
                                $40
                            </div> */}
                            <NavLink to="/Rarichan"><button type="submit"className="card-button"><b>View Product</b></button></NavLink>
                        </div>
                    </div>
                    <div class="col-md-3 mb-5 mt-3">
                        <div class="card-sl ">
                            <div class="card-image">
                                <img src="https://images-cdn.ubuy.co.in/633bdb3169bbc509126945e3-ziyad-shaker-premium-helba-ground.jpg" />
                            </div>

                            {/* <a class="card-action" href="#"><i class="fa fa-heart"></i></a> */}
                            <div class="card-heading pt-4">
                                Helba 
                            </div>
                            {/* <div class="card-text pt-4">
                                Helba products  is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
                            </div> */}
                            {/* <div class="card-text text-center">
                                $40
                            </div> */}
                           <NavLink to="/Helba"><button type="submit"className="card-button"><b>View Product</b></button></NavLink>
                        </div>
                    </div>
                    <div class="col-md-3 mb-5 mt-3">
                        <div class="card-sl">
                            <div class="card-image">
                                <img src="https://eastern.in/wp-content/uploads/2016/09/cropped-logo-easternapp.png" />
                            </div>

                            {/* <a class="card-action" href="#"><i class="fa fa-heart"></i></a> */}
                            <div class="card-heading pt-4">
                                Estern
                            </div>
                            {/* <div class="card-text pt-4">
                                Banana  is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
                            </div> */}
                            {/* <div class="card-text text-center">
                                $40
                            </div> */}
                            <a href="#" class="card-button"><b>View Product</b></a>
                        </div>
                    </div>


                    <div class="col-md-3 mb-5 mt-3">
                        <div class="card-sl pt-4">
                            <div class="card-image">
                                <img src="https://images.squarespace-cdn.com/content/v1/55e45319e4b0fe8647d43b01/1589999290509-RPV53Z34VS1VK15DS1ZA/NESTLElogo-Alternative-with-wordmark-signature-oak-978x800px-RGB.png" />
                            </div>

                            {/* <a class="card-action" href="#"><i class="fa fa-heart"></i></a> */}
                            <div class="card-heading pt-5">
                                Nestle
                            </div>
                            {/* <div class="card-text pt-4">
                                Banana  is a full-size luxury crossover SUV coupé made by Audi that was launched in 2018.
                            </div> */}
                            {/* <div class="card-text text-center">
                                $40
                            </div> */}
                            <a href="#" class="card-button"><b>View Product</b></a>
                        </div>
                    </div>



                  
                    
                            </div>
                        </div>
                    </div>
               
    );
}

export default Products;