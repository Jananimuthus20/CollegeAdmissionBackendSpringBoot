import './Admission.css';
import { MenuItem, TextField} from '@material-ui/core';
import openadmn from './openadmn.png';
import React,{useState} from 'react';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

import Login from './Login';
const Admission = () => {

const options=[
    {
      label:'CSE',
      value :'CSE',
    },
    {
      label: 'CIVIL',
      value: 'CIVIL',
    },
    {
      label: 'EEE',
      value: 'EEE',
    },
    {
      label: 'ECE',
      value: 'ECE',
    },
  
    {
      label: 'IT',
      value: 'IT',
    },
    {
      label: 'MECH',
      value: 'MECH',
    },
    {
      label: 'AIDS',
      value: 'AIDS',
    }
    
  ]
  const [name,setName]=useState('')
  // const [age,setAge]=useState('')
   const [course,setCourse]=useState('')
   const [address,setAddress]=useState('')
   const [phone,setPhone]=useState('')
   const [email,setEmail]=useState('')
   //const [typeOfEvent,setTypeOfEvent]=useState('')
 
   const handleClick=(e)=>{
     e.preventDefault()
     const participant={name,course,phone,email,address}
     console.log(participant)
     fetch("http://localhost:8080/save",{
       method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(participant)
     }).then(()=>{
       console.log("Your record has been saved")
     })
    }



  return (
    <div class="whole">
      <div className='open'>
    <h2 style={{position:"absolute",top:"4%",left:"39%"}}>Admission Form</h2><br/><br/>
    <div className='container' style={{position:"absolute",top:"18%"}}>
    <TextField id="outlined-basic" label="Student Name" variant="outlined" style={{width:"300px",paddingBottom:"10px"}} value={name} onChange={(e)=>setName(e.target.value)}/>
    <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:"300px", paddingBottom:"10px"}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <TextField select id="outlined-basic" label="Course"  variant="outlined" style={{width:"300px", paddingBottom:"10px"}} value={course} onChange={(e)=>setCourse(e.target.value)}>
     {
       options.map((option)=>(
         <MenuItem key={option.value} value={option.value}>
         {option.label}
         </MenuItem>
       ))
     }
     </TextField>

    <TextField id="outlined-basic" label="Address" variant="outlined" style={{width:"300px", paddingBottom:"10px"}} value={address} onChange={(e)=>setAddress(e.target.value)}/>
    <TextField id="outlined-basic" label="Phone no" variant="outlined" style={{width:"300px", paddingBottom:"10px"}} value={phone} onChange={(e)=>setPhone(e.target.value)}/>
    <Button variant="contained" style={{backgroundColor:"#2370C8 ", width:"150px",color:"white"}} onClick={handleClick}>Register</Button>
    
    </div>
   </div>  
    </div>
  )
}

export default Admission

    