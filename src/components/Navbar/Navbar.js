import {React, useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import {Button} from '../Button'
import {Link} from 'react-router-dom'




const Navbar =()=> {
    const [clicked, setClicked]= useState(false);
    const [loged, setLoged] = useState(true);

    const setBack=false;
    
    const handleClick = () => {
        setClicked(!clicked);
     }
    
     const logoutbutton ='Logout';
        const history=useHistory();
        useEffect(()=>{
            if((localStorage.getItem("loginState"))){
                setLoged(loged);
            }else{
                setLoged(!loged);
            }
        },[]);

        const logout = ()=>{
            localStorage.removeItem("loginState");
            history.push("/login")
        }

        return(
            <>
            {(loged) ? (
                <div className="header">
                <nav className={(clicked) ? "NavbarItems NavbarItems-mobile-size" : " NavbarItems"}>
                   <h1 className="navbar-logo">UniLib <i className="fab fa-angular"></i> </h1>
    
                    <div className="menu-icon" onClick={handleClick}>                    
                        <i className = {`${(clicked) ? 'fas fa-times' : 'fas fa-bars'}`}> </i>
                    </div>
    
    
                    <ul className={(clicked) ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index)=>{
                            return(                                
                                <Link to={(logoutbutton)?('/login'):(`/${item.title}`)} className="lists" onClick={()=>{setClicked(setBack);logout()}}>
                                <li key={index.toString()} className={(clicked) ? 'flex' : 'none'}>                                    
                                    <p key={index.toString()} className={item.cName}>
                                        {item.title}
                                    </p>
                                </li>
                                </Link>
                            )
                        })}
                    </ul>
                    {(loged) ? (
                        (<Link to="/register" className="link-button">
                            <Button className='button' onClick={logout}>Logout</Button>
                        </Link>)
                    ) : (<Link to="/register" className="link-button">
                    <Button className='button'>Sign Up</Button>
                </Link>)}
                    
    
    
                </nav>
                </div>
            ) : (
                <div></div>
            )}
            </>
            
        )
    
}

export default Navbar;