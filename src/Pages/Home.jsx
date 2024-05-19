import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
await axios.get("https://66462c1a51e227f23aae13b2.mockapi.io/api/UserData")
.then(res=>setData(res.data))
.catch(error=>console.log(error))
    }
    return (
        <>
        <div className="row row-cols-1 row-cols-sm-3 g-4 m-2 ">
        {data.map((ele,index)=>{
return(
    <div className="col " key={index}>

<div className="card h-100  mb-3">
  <div className="card-header row g-0 fw-bolder "><div className="col">Name: </div>
  <div className="col text-success  ">{ele.name}</div></div>
  <div className="card-body ">
  <p className="card-title row row-cols-2"><div className="col lab">User ID:</div>
  <div className="col">{ele.userid}</div> </p>

    <p className="card-text row row-cols-2"><div className="col lab">UserName: </div>
    <div className="col">{ele.username}</div></p>
    <p className='card-text row row-cols-2'><div className="col lab">Floor No: </div><div className="col">{ele.address.suite}</div></p>
    <p className="card-text row row-cols-2"><div className="col lab">Street: </div>
    <div className="col">{ele.address.street}</div></p>
    <p className="card-text row row-cols-2"><div className="col lab">City: </div>
    <div className="col">{ele.address.city}</div></p>
    <p className="card-text row row-cols-2"><div className="col lab">zipcode: </div>
    <div className="col">{ele.address.zipcode}</div></p>
    <p className="card-text row row-cols-2">
        <div className="col lab">Phone No: </div>
        <div className="col">{ele.phone}</div></p>
        <p className="card-text row row-cols-2">
        <div className="col lab">Website </div>
        <div className="col">{ele.website}</div></p>
        <p className="card-text row row-cols-2">
        <div className="col lab">Company: </div>
        <div className="col">{ele.company.name}</div></p>
        
        <p className="card-text row row-cols-2">
        <div className="col lab">Company CatchPhrase: </div>
        <div className="col">{ele.company.catchPhrase}</div></p>
        
        <p className="card-text row row-cols-2">
        <div className="col lab">Business: </div>
        <div className="col">{ele.company.bs}</div></p>

  </div>
</div>
    </div>

)

})}
        </div>



</>
    );
};

export default Home;