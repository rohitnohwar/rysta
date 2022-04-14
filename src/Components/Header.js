import React, {useState} from "react";
import './authentication.css'

function Header(props){
 

    return <div>
        <div style={{display:'flex', marginTop:'20px', justifyContent:'space-around'}}>
            <img src={require('../images/Logo.png')}></img>
            <div style={{width: '35%', display:'flex', justifyContent:'space-around'}}>
                <div style={{}}>What is Rystas?</div>
                <div style={{}}>Contact us</div>
                <div style={{}}>Sign up</div>
                <div style={{}}>Join out waitlist</div>
            </div>
        </div>
    </div>
}

export default Header;
        