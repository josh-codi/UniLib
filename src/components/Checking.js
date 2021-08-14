import React,{useState, useEffect} from 'react'
import Login from './SignUp/Login'
import Home from './Home/Home'

const Checking = (top) => {

    useEffect(()=>{
        console.log(`the prop is ${top}`);
    },[])
    const adminUser = {
        name:"kofi",
        password:"admin1234",
        email:"odamejoshua@gmail.com"
};

const [user, setUser] = useState({name: "", email: ""});
const [error, setError] = useState("");

const LogIn = details=>{
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
        console.log("Logged In");

        setUser({
            name:details.name,
            email: details.email 
        });
    }else{
        console.log("Details do not match !")
        setError("Details do not match !");
    }
};
const LogOut = ()=>{
    setUser({
        name:"",email:""
    })
}
    return (
        <div>
            {(user.email != "") ? 
                (<div className="welcome">
                    <h2>Welcome Here {user.name}</h2>
                    <Home />
                    <button type="button" onClick={LogOut}>Logout</button>
                </div>) : 
                (<Login LoginProp={LogIn} errorProp={error}/>)
            }
        </div>
    )
}

export default Checking

