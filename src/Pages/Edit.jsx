import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Edit = ({id}) => {
    const navi=useNavigate()
    const [edit,setEdit]=useState({
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
            bs:''
        }
    })
useEffect(()=>{
fetchData();
},[])
const fetchData=async()=>{
    await axios.get(`https://66462c1a51e227f23aae13b2.mockapi.io/api/UserData/${id}`)
    .then(res=>setEdit(res.data))
    .catch(err=>console.log(err))
}
const handleChange=(e)=>{
    const {name,value}=e.target;
    setEdit((prev)=>(
        {...prev,
            address:{...prev.address,[name]:value},
            company:{...prev.company,[name]:value},
            [name]:value}
    ))
    }
const handleSubmit=async(e)=>{
   e.preventDefault();
    await axios.put(`https://66462c1a51e227f23aae13b2.mockapi.io/api/UserData/${id}`,edit)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    navi('/product')

}
    return (
        <div>
            <form onSubmit={handleSubmit}>
           <label className='col-12 col-sm-2 m-2' >User ID</label>
<input type="text" name='userid' className='m-2' value={edit.userid} onChange={handleChange} />
<br />
<label className='col-12 col-sm-2 m-2' >Name</label>
<input type="text" name='name' className='m-2' value={edit.name} onChange={handleChange} /><br />
<label className='col-12 col-sm-2 m-2'  >User Name</label>
<input type="text" name='username' className='m-2' value={edit.username} onChange={handleChange}/><br />
<label className='col-12 col-sm-2 m-2' >Email</label>
<input type="email" name='email' className='m-2' value={edit.email} onChange={handleChange}/><br />
<label className='col-12 col-sm-2 m-2' >Flat No</label>
<input type="text" name='suite' className='m-2' value={edit.address.suite} onChange={handleChange}/><br />
<label className='col-12 col-sm-2 m-2' >Street</label>
<input type="text" name='street' className='m-2' value={edit.address.street} onChange={handleChange}/><br />
<label className='col-12 col-sm-2 m-2' >City</label>
<input type="text" name='city' className='m-2' value={edit.address.city} onChange={handleChange}/><br />
<label className='col-12 col-sm-2 m-2' >zipcode</label>
<input type="text" name='zipcode' className='m-2' value={edit.address.zipcode} onChange={handleChange}/><br />
<label className='col-12 col-sm-2 m-2' >Phone</label>
<input type="text" name='phone' className='m-2' value={edit.phone} onChange={handleChange}/><br />

<label className='col-12 col-sm-2 m-2' >Website</label>
<input type="text" name='website'className='m-2' value={edit.website} onChange={handleChange}/><br />

<label className='col-12 col-sm-2 m-2' >Company</label>
<input type="text" name='companyname' className='m-2' value={edit.company.companyname} onChange={handleChange}/><br />

<label className='col-12 col-sm-2 m-2' >Company CatchPhrase</label>
<input type="text" name='catchPhrase' className='m-2' value={edit.company.catchPhrase} onChange={handleChange}/><br />

<label className='col-12 col-sm-2 m-2' >Business</label>
<input type="text" name='bs' className='m-2' value={edit.company.bs} onChange={handleChange}/><br />




<br /> <br />
<button type="submit" className='btn btn-danger'>Update</button><br /><br />
</form>
        </div>
    );
};

export default Edit;