import './Login.css';
import React,{useState} from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

const Login = () => {
    /*
* Included Jquery
*/
$(document).ready(function(){
    $(".form").on("submit",function(e){
      e.preventDefault();
    });
      $(".signinForm .trigger").on("click",function(){
          $(".signupForm").addClass("active");
          setTimeout(function(){
              $(".signinForm").removeClass("active");
          },600);
      });
      $(".signupForm .trigger").on("click",function(){
          $(".signinForm").addClass("active");
          $(".signupForm").removeClass("active");
      });
  });

  const [username,setUserName]=useState('')
   const [password,setPassword]=useState('')

   const handleClick=(e)=>{
    const participant={username,password}
    console.log(participant)
    fetch("http://localhost:8080/saveuser",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(participant)
    }).then(()=>{
      console.log("Your details has been added")
    })
   }


  return (
    <div class="main">
      <div class="e">
      <div class="container1">
    <div class="formContainer1">
      <div class="form signinForm">
        <form action="#">
          <div class="formIcon">
            <i class="fa fa-user"></i>
          </div>
          <div class="formHeading">
            <span class="mainHeading">Welcome</span>
            <span class="subHeading">Login to your account</span>
          </div>
          <div class="formBody">
            <div class="inputGroup">
              <i class="fa fa-user"></i>
              <input type="text" id="signin_username" placeholder="Username" />
            </div>
            <div class="inputGroup">
              <i class="fa fa-lock"></i>
              <input type="password" id="signin_password" placeholder="Password"/>
            </div>
            <div class="formGroup">
              <a href="#">Forgot Password ?</a>
              <Link to ='/Home'><button type="submit">Login</button></Link>
            </div>
          </div>
          <div class="formFooter">
           <a href="#" class="trigger">Don't have an account?&nbsp;&nbsp;Signup</a>
          </div>
        </form>
      </div>
      <div class="form signupForm">
          <form action="#">
              <div class="formIcon">
                <i class="fa fa-user"></i>
              </div>
              <div class="formHeading">
                <span class="mainHeading">Welcome</span>
                <span class="subHeading">Create a new account</span>
              </div>
              <div class="formBody">
                <div class="inputGroup">
                  <i class="fa fa-user"></i>
                  <input type="text" id="signup_email" placeholder="Username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
                </div>
                <div class="inputGroup">
                  <i class="fa fa-lock"></i>
                  <input type="password" id="signup_password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div class="formGroup">
                  <a href="#">Forgot Password ?</a>
                  <Link to ='/Home'><button onClick={handleClick}>Sign up</button></Link>
                </div>
              </div>
              <div class="formFooter">
               <a href="#" class="trigger">Already have an account?&nbsp;&nbsp;Login</a>
              </div>
            </form>
      </div>
    </div>
  
  
  </div>
  </div>
    </div>
  )
}

export default Login
