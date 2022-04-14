import React, {useState} from "react";
import './authentication.css'
import Header from './Header'
import {Link, useNavigate} from "react-router-dom";

function Login(props){
    const navigate=useNavigate();

    return <div>

        <Header/>
    <form action="/login" class="register-form" method="POST">
    <img src={require('../images/building.png')} style={{width:'90%'}}></img>
    <div style={{marginTop:'10px'}}>JOIN OUR WAITLIST</div>
    <div style={{ fontSize: "15px", fontWeight: "300", marginTop:'10px' }}>We promise we won't spam your inbox</div>
    <div><input type="email" placeholder="Your name" name="username" class="reg-input" required></input></div>
    <div><input type="password" placeholder="Your email" name="password" class="reg-input" required></input></div>
    <div><button type="submit" class="reg-button" onClick={()=>{navigate('/thanks')}} >LOGIN</button></div>
    <div className="message"></div>
    </form> 
    </div>;
}

export default Login;