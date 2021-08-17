import {React, Component} from 'react';
import {MenuItems} from "./MenuItems"
import './Navbar.css'
import {Button} from '../Button'
import {Link} from 'react-router-dom'

const image = "../images/headerBackground.png";

// const STYLE={
//     textDecoration:"none",
//     color:"white"
// }
class Navbar extends Component {
    state = {
         clicked: false,
         reduceHeight:true,
    }
    handleClick = () => {
         this.setState({clicked: !this.state.clicked })
     }

    render() {

        return(
            <div className="header">
            <nav className={this.state.clicked ? "NavbarItems NavbarItems-mobile-size" : " NavbarItems"}>
                <h1 className="navbar-logo">UniLib <i className="fab fa-angular"></i> </h1>

                <div className="menu-icon" onClick={this.handleClick}>                    
                    <i className = {`${this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}`}> </i>
                </div>


                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <Link to={`/${item.title}`} className="lists" onClick={()=>this.setState({clicked:false})}>
                            <li key={index} className={this.state.clicked ? 'flex' : 'none'}>
                                
                                <a className={item.cName}>
                                    {item.title}
                                </a>
                            </li>
                            </Link>
                        )
                    })}
                </ul>
                <Link to="/register" className="link-button">
                    <Button className='button'>Sign Up</Button>
                </Link>


            </nav>
            </div>
        )
    }
}

export default Navbar;