import * as React from 'react';
import Header from '../components/Header';
import "./login.css";

export default function Login() {


  return (
    <div>
      <Header/>
      <div class="content">
        <p class="desc">Join now to view and upload pictures of Leo The Maltipoo</p>
      
        <main>
          <div class="loginForm">
            <div class="usernameInput">
              <input type="text" placeholder="Username"></input>
            </div>
            <div class="passwordInput">
              <input type="password" placeholder="Password"></input>
            </div>
          </div>

          <button>Log in</button>
          <p>Or if you dont have an account</p>
          <button> Sign Up</button>
        </main>
      </div>
      
    </div>
    
  );
}
