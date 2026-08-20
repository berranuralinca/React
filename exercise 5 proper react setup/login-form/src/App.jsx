import { useState } from 'react'
import './App.css'


      
    function App(){

        const [showPassword,setShowPassword] =useState(false);



        return(
            <>
                <p>
                    Hello,welcome to my website
                </p>
                <LoginForm showPassword={showPassword} setShowPassword={setShowPassword}/>
            </>
        );
    }

    function LoginForm({showPassword,setShowPassword}){
        
        function ShowPassword(){
            setShowPassword(!showPassword)
        }
        
        return(
            <div className="form-container">
                <div className="email-input">
                    <input 
                        placeholder="Email"
                    />
                </div>
                <div className="password-input">
                    <input 
                        placeholder="Password"
                        type={showPassword ? "text":"password"}
                    />
                    <button className="show-button" onClick={ShowPassword}>{showPassword ? "Hide":"Show"}</button>
                </div>
                <button className="login-button">
                    Login
                </button>
                <button className="sign-up-button">
                    Sign up
                </button>
            </div>
        );
    }



export default App
