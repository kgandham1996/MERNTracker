import * as React from 'react';
import Tiktok from '../../assests/tiktok.png'
import Insta from '../../assests/insta.png'

import "./Footer.css";
export default function Footer() {
    
    return (
        <div className="footer-div">
            <h3 className="footer-h3">Contact</h3>
            <img src={Tiktok}/>
            <img src={Insta}/>
        </div>
        
    )
}