import React, {useEffect, useState} from 'react'
// import HeaderBackground from '../images/Loginimg.png'
import './SignUp.css'

// const image = HeaderBackground;

// export class Login extends React.Component {
//     constructor(props) {
//         super(props);
//     }
    
    const Login = (props) => {
        const [details, setDetails] = useState({name: "", email: "", password: ""})
        

        const submitHandler = e =>{
            e.preventDefault();
        props.LoginProp(details);
        }

    // useEffect(()=>{
    // console.log(props.LoginProp);
    // console.log(props.errorProp)
    // },[]);

    return (
        <form onSubmit={submitHandler}>
            <div className="contain">
                <div className="login-header">
                    <h3>Login</h3>
                    {/* {props.errorProp} */}
                    {(props.errorProp != "") ? (<div className="error">{props.errorProp}</div>) : ""}
                </div>
                <div className="content">
                    <div className="login-img">
                    {/* <img className="login-image" src={image}></img> */}
                    <i className='fas fa-user-circle'></i>
                    </div>
                    <div className="form">
                        <div className="form-contain">
                            <label htmlFor="username">| Username |</label><br/>
                            <input type="text" name="username" placeholder="Username" onChange={e=> setDetails({...details, name: e.target.value})} value={details.name}/>
                        </div>
                        <div className="form-contain">
                            <label htmlFor="email">| Email |</label><br/>
                            <input type="email" name="email" placeholder="Email" onChange={e=> setDetails({...details, email: e.target.value})} value={details.email} />
                        </div>
                        <div className="form-contain">
                            <label htmlFor="password">| Password |</label><br/>
                            <input type="password" name="password" placeholder="Password" onChange={e=> setDetails({...details, password: e.target.value})} value={details.password} />
                        </div>
                    </div>
                </div>
                <div className="submit-contain">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </div>
            
        </form>
    )
    }


export default Login