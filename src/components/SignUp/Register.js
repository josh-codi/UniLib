import React, {useState} from 'react'
import axios from 'axios'

const ApiDomain='https://uenrlibrary.herokuapp.com/';
const Register = (props) => {
    const [details, setDetails] = useState({'email': "", 'password': ""});
    const[error, setError] = useState(" ");
    var[res, setRes] = useState({});

    // Axios Post......Posting credentials................
    const fetching =()=>{
        axios.post(('https://uenrlibrary.herokuapp.com/api/auth/register'),(details))
        .then((response)=>{
            console.log('the response is : ',response);
        })
        .catch(err=>{
            console.log(`the erro is ${err}`);
        })
    }

    const submitHandler = e =>{            
        e.preventDefault();
        fetching();
    }

    const statusKey = JSON.stringify(res.status);

    return (
        <div>
            <form onSubmit={submitHandler}>
            <div className="contain">
                <div className="login-header">
                    <h3>Register</h3>  
                    {statusKey}           
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
                            <input type="email" name="email" placeholder="Email" onChange={e=> setDetails({...details, email: e.target.value})} value={details.email} />
                        </div>
                        <div className="form-contain">
                            <label htmlFor="password">| Password |</label><br/>
                            <input type="password" name="password" placeholder="Password" onChange={e=> setDetails({...details, password: e.target.value})} value={details.password} />
                            <p>Password must contain at least one upper case, a number ...</p>
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
        </div>
    )
}

export default Register
