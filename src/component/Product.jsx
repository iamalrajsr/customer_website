import React from "react";
import { useState,useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import Contact from "./Foot";
import Foot from "./Foot";


const Product = () => {

    const[data, setData] = useState([]);
    const[filter, setFilter] = useState([data]);
    const[loading, setLoading] = useState([false]);
    let componentMounted = true;

    useEffect(() =>{
        const getProduct = async () =>{
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products`);
            if(componentMounted){
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                console.log(filter)
            }
            return() =>{
                componentMounted =false;
            }
        }
        getProduct();
    },
   []);

   const Loading = () =>{
    return(
        <>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
            <Skeleton height={300}/>
        </div>
        
     
        </>
    );
};

const FilterProduct = (cat) =>{
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter (updatedList);

}


const ShowProduct = () =>{
    return(
        <>
         <div className="buttons d-flex justify-content-center mb-5 mt-3">
        <button className="btn btn-outline-dark me-2" onClick={() =>setFilter(data)}><b>All</b></button>
        
        <button className="btn btn-warning me-2 text-dark ms-2"onClick={() =>FilterProduct("women's clothing")}><b>Buy Two Get one</b></button>
        <button className="btn btn-warning me-2 text-dark ms-2"onClick={() =>FilterProduct("men's clothing")}><b>Special Offers</b></button>
        <button className="btn btn-warning me-2 text-dark ms-2"onClick={() =>FilterProduct("jewelery")}><b>Special Offers</b></button>
        <button className="btn btn-warning me-2 text-dark ms-2"onClick={() =>FilterProduct("electronics")}><b>20% Off</b></button>
    </div>
    {filter.map((Product) =>{
        return(
          
            <>
                <div className="col-md-3 mb-4 ">
                <div class="card h-100 text-center p-4" >
  <img src={Product.image} class="card-img-top" alt={Product.title} height="250px"/>
  <div class="card-body">
    <h5 class="card-title mb-0">...{Product.title.substring(0,12)}</h5>
    <p class="card-text lead fw-bolder">${Product.price}</p>
    <a href="#" class="btn btn-outline-warning"><b>View More</b></a>
  </div>
</div>
                </div>
            </>
        )
    })}
        </>
    );
};

  return (

 

    <div>
        <div className="container my-1 py-5">
            <div className="row">
                <div className="col-12 mb-4 mt-3">
                    <h1 className="display-6 fw-bolder text-center"> Opening Offer Products</h1>
                    <hr/>
                </div>
            </div>
            <div className=" row justify-content-center">
                {loading ? <Loading/>: <ShowProduct/>}
            </div>
        </div>
       <Foot/>
    </div>
  );
}


export default Product;