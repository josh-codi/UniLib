import React from 'react'
import {Link} from "react-router-dom"

const SignupContianer = () => {
    return (
        <div>
            
            <div>
                <Link to='/login'>
                    <input type="button"className="btn btn-primary" value="Login"/>
                </Link>

                <Link to='/register'>
                    <input type="button"className="btn btn-primary" value="Sign Up"/>
                </Link><br/><br/>

                <p>| Login to enjoy the wonderful offers |</p>

                <br/>
            </div>

        </div>
    )
}

export default SignupContianer
