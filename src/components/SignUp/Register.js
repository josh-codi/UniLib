import React from 'react'

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }
render(){
    return (
        <div>
            <div className="contain">
                <div className="header">
                    <h3>Register</h3>
                </div>
                <div className="content">
                    <div className="login-img">
                        <img src={}/>
                    </div>
                    <div className="form">
                        <div className="form-contain">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="form-contain">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-contain">
                            <label htmlFor="password">Username</label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                    </div>
                </div>
                <div className="submit-contain">
                    <button type="button" className="btn">Register</button>
                </div>
            </div>
            
        </div>
    )
    }
}
