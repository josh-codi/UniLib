import React,{useState, useEffect} from 'react'
import Login from './SignUp/Login'
import Home from './Home/Home'

const Checking = (top) => {
    useEffect(()=>{
        console.log(`the prop is ${top}`);
    },[])

    const [status, setStatus] = useState('');

    const LogOut = ()=>{
        setStatus('');
    }
    return (
        <div>
            {(status == 200) ? 
                (<div className="welcome">
                    <h2>Welcome Here</h2>
                    <Home />
                    <button type="button" onClick={LogOut}>Logout</button>
                </div>) : 
                (<Login stat={status => setStatus(status)}/>)
            }
        </div>
    )
}

export default Checking

