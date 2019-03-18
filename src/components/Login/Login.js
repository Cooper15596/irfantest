import React, {Component} from 'react';
import './Login.scss';
import { Link } from "react-router-dom";

class Login extends Component {
    render(){
        return(
            <div className="app-root">
            <div className="green-bg"></div>
            <div className="login-root">
       
               <div className="header">
                 <img src={require("../../assets/images/man6.svg")}/>
                 <h2> Admin Login</h2>
                 <div className="sign-in">Sign in to your account</div>
               </div>
       
               <form> 
             
                 <input type="email" placeholder="email" name="email" className="type-in"/>
                 
               
                 <input type="password" placeholder="password" name="password" className="type-in" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and at least 8 or more characters"/>
               
                 
                 <div className="cta-container" >
                   <label className="remember-check" >
                      <input type="checkbox" />
                       Remember me
                   </label>
                   <Link to="/dashboard">
                     <button>LOGIN</button>
                   </Link>
                   
                 </div>
               </form>
       
            <div className="social-login-container">
              Connect with
            <div className="icon-container">
             <img src={require("../../assets/images/twitter-logo.svg")}/>
              
            </div>
       
            <div className="icon-container">
             <img src={require("../../assets/images/facebook-logo.svg")}/>
              
            </div>
       
       
       
       
       
            </div>
            
       
       
            </div>
       
            </div>

        );
    }
}

export default Login