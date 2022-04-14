import React, {useState} from "react";
import Header from './Header'
import {Link, useNavigate} from "react-router-dom";

function Thanks(props){
    const navigate=useNavigate();

    return <div>
        <Header/>
<div style={{textAlign:'center'}}>
        <img src={require('../images/thanks.gif')} style={{margin:'auto'}} alt="loading..." />
        </div>
    </div>;
}

export default Thanks;