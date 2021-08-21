import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom'
import './SignUp.css'
import axios from 'axios'
import {Link} from 'react-router-dom'


const ApiDomain='https://uenrlibrary.herokuapp.com/';

const Login = (props) => {
    const history = useHistory();

    //Setting useStates....................  
    const [details, setDetails] = useState({email: "", password: ""});
    const [invalid, setInvalid] = useState("");

    useEffect(()=>{
        if((localStorage.getItem('loginState'))){
            history.push('/home')
        }else{

        }
    },[]);

    const submitHandler = e =>{  
        e.preventDefault();

        axios.post((ApiDomain+'api/auth/login'),(details))
        .then((response)=>{
            localStorage.setItem("loginState",JSON.stringify(response));
            history.push("/home")

        })
        .catch(err=>{
            setInvalid("Invalid Credentials");
        })
    }
    
    return (
        <div>
            <br/>
        <form onSubmit={submitHandler}>
            <div className="contain">

                <div className="login-header">
                    <h3>Login</h3> 
                    <br/>
                </div>
                {/* END OF LOGIN HEADER AND ERRO */}


                <div className="content">

                    <div className="login-img">
                        <i className='fas fa-user-circle'></i>
                    </div>
                    {/* END OF PROFILE ICON */}
                    
                    <div className="form">
                        <div className="form-contain">
                            <label htmlFor="email">| Email |</label><br/>
                            <input type="email" name="email" placeholder="Email" onChange={e=> setDetails({...details, email: e.target.value})} value={details.email} />
                        </div>
                        <div className="form-contain">
                            <label htmlFor="password">| Password |</label><br/>
                            <input type="password" name="password" placeholder="Password" onChange={e=> setDetails({...details, password: e.target.value})} value={details.password} />
                            <p className="invalid">{invalid}</p>
                        </div>
                    </div>
                    {/* END OF FORM */}

                </div>
                {/* END OF FORM content */}
                

                {/* BUTTON FOR SUBMIT */}
                <div className="submit-contain">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>


            </div>
            {/* END OF CONTAIN */}
            
        </form>
        <br/><br/>
        Not having an account, create one here ...<br/>
        <Link to="/register">
            <button type="button">Register</button>
        </Link>

        </div>
    )
    }


export default Login