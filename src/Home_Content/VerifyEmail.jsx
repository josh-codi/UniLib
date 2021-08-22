import React from 'react'
import './VerifyEmail.css'
import {Link} from 'react-router-dom'

const VerifyEmail = () => {
    const logout=()=>{
        localStorage.removeItem("registrationState")
    }
    return (
        <>
        <div class="">
            <div class="background">
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
            </div>
        <header className="head">
            <div class="logo">
                <i className="fab fa-angular"></i>
            </div>
            <section class="header-content">
                <h2>Welcome To UniLib <i className="fab fa-angular"></i></h2>
                <p>We are very glad to have you here,<br/>
                    Please kindly verify the Email you provided in your mail inbox...
                </p>
                <button>Watch UniLib Demo</button>
                <Link to="/login" onClick={logout}>
                    <button onClick={logout}>Go back to Login</button>
                </Link>
                
            </section>
        </header>
        </div>
        </>
    )
}

export default VerifyEmail
