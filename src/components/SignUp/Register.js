import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'
import './SignUp.css'
import VerifyEmail from '../../Home_Content/VerifyEmail'


const Register = (props) => {

    const history=useHistory();
    useEffect(()=>{
        if((localStorage.getItem("registerationState"))){
            history.push('/verifyEmail');
        }
    })
    const [details, setDetails] = useState({email: "", password: ""});    

    // Axios Post......Posting credentials................
    const fetching =()=>{
        axios.post(('https://uenrlibrary.herokuapp.com/api/auth/register'),(details))
        .then((response)=>{
            console.log(response);
            localStorage.setItem("registrationState",(response));
            history.push('/verifyEmail')
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const submitHandler = e =>{            
        e.preventDefault();
        fetching();
    }

    const style={
        height:"100vh"
    }
    return (
        <div id="reg_cont" style={style}>
            <br/>
            <form onSubmit={submitHandler}>
            <div className="contain">
                <div className="login-header">
                    <h3>Register</h3>  
                    <br/>     
                </div>
                {/* END OF REGISTER HEADER AND ERRO */}


                <div className="content">

                    <div className="login-img">
                        <i className='fas fa-user-circle'></i>
                    </div>
                    {/* END OF PROFILE ICON */}

                    <div className="form">
                        <div className="form-contain">
                            <label htmlFor="email">| Email |</label><br/>
                            <input type="email" name="email" placeholder="Email" required onChange={e=> setDetails({...details, email: e.target.value})} value={details.email} />
                        </div>
                        <div className="form-contain">
                            <label htmlFor="password">| Password |</label><br/>
                            <input type="password" name="password" placeholder="Password" required onChange={e=> setDetails({...details, password: e.target.value})} value={details.password} />
                            <p>Password must contain at least one upper case, a number<br/>...</p>
                        </div>
                    </div>
                    {/* END OF FORM */}

                </div>
                {/* END OF FORM content */}
                

                {/* BUTTON FOR SUBMIT */}
                <div className="submit-contain">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>


            </div>
            {/* END OF CONTAIN */}
            
        </form>
        <br/><br/>
        Already having account, login here ...<br/>
        <Link to="/login">
           <button type="button" className="btn btn-primary">Login</button>
        </Link> 
        <br/><br/>
        </div>
    )
}

export default Register
