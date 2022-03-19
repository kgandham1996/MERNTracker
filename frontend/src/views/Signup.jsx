import * as React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer'


export default function Signup() {


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
            <div class="passwordInput2">
              <input type="password" placeholder="Confirm Password"></input>
            </div>
          </div>

          <button>Create Account</button>
          <p>Or if you already have an account</p>
          <button>Log in</button>
        </main>
      </div>
      <Footer />
      
    </div>
    
  );
}