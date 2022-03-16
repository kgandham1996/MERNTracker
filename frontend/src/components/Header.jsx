import * as React from 'react';
import "./Header.css";
import LeoIcon from '../assests/leoPic.jpg'
import Paw from '../assests/paw.png'

export default function Header() {
    
    return (
        <nav class="header">
            <img src={LeoIcon} />
            <h3>LeoGram</h3>
            <h4>Just Fun Pics of Leo</h4>
        </nav>
        
    )
}
