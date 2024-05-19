import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navi=useNavigate()
    const [create,setCreate]=useState({
        userid:'',
        name:'',
        username:'',
        email:'',
        address:{
            suite:'',
            street:'',
            city:'',
            zipcode:''
        },
        phone:'',
        website:'',
        company:{
            companyname:'',
            catchPhrase:'',
            bs:'',
        }
    })


    const handleChange=(e)=>{
        const {name,value}=e.target;
        setCreate((prev)=>(
            {...prev,
                address:{...prev.address,[name]:value},
                company:{...prev.company,[name]:value}
                ,[name]:value}
        ))
        }
        const handleSubmit=async(e)=>{
           e.preventDefault();
            await axios.post(`https://66462c1a51e227f23aae13b2.mockapi.io/api/UserData`,create)
            .then(res=>console.log(res.data))
            .catch(err=>console.log(err))
            navi('/product')
        
        }
    return (
        <div>
             <form onSubmit={handleSubmit}>
           <label className='col-12 col-sm-2 m-2 ' >User ID</label>
<input type="text" className='m-2' name='userid' value={create.userid} onChange={handleChange} />
<br />
<label className='col-12 col-sm-2 m-2 ' >Name</label>
<input type="text" name='name' className='m-2' value={create.name} onChange={handleChange} /><br />
<label className='col-12 col-sm-2 m-2 '  >User Name</label>
<input type="text" name='username' className='m-2'  value={create.username} onChange={handleChange}/><br />
<label className='col-12 col-sm-2 m-2 ' >Email</label>
<input type="email" name='email' className='m-2' value={create.email} onChange={handleChange}/><br />
<label className='col-12 col-sm-2 m-2' >Flat No</label>
<input type="text" name='suite' className='m-2' value={create.address.suite} onChange={handleChange}/><br />
<label className='col-12 col-sm-2 m-2 ' >Street</label>
<input type="text" name='street' className='m-2' value={create.address.street} onChange={handleChange}/><br />
<label className='col-12 col-sm-2 m-2 ' >City</label>
<input type="text" name='city' className='m-2' value={create.address.city} onChange={handleChange}/><br />
<label className='col-12 col-sm-2 m-2 ' >zipcode</label>
<input type="text" name='zipcode' className='m-2' value={create.address.zipcode} onChange={handleChange}/><br />
<label className='col-12 col-sm-2 m-2 ' >Phone</label>
<input type="text" name='phone' className='m-2' value={create.phone} onChange={handleChange}/><br />

<label className='col-12 col-sm-2 m-2 ' >Website</label>
<input type="text" name='website' className='m-2' value={create.website} onChange={handleChange}/><br />

<label className='col-12 col-sm-2 m-2 ' >Company</label>
<input type="text" name='companyname' className='m-2' value={create.company.companyname} onChange={handleChange}/><br />

<label className='col-12 col-sm-2 m-2 ' >Company CatchPhrase</label>
<input type="text" name='catchPhrase' className='m-2' value={create.company.catchPhrase} onChange={handleChange}/><br />

<label className='col-12 col-sm-2 m-2 ' >Business</label>
<input type="text" name='bs' className='m-2' value={create.company.bs} onChange={handleChange}/><br />


<br /> <br />
<button type="submit" className='btn btn-danger'>Add</button><br /><br />
</form>
        </div>
    );
};

export default Create;