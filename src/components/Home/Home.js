import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import HomeBackground from '../images/homeBackground.png'
import './Home.css'
const homeBack = HomeBackground;

const style={
    background: `url(${homeBack})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
}

const Home =()=>{
    const [items, setItems] = useState([]);


    useEffect(()=>{
        fetchingApi()
    },[]);

    const fetchingApi = async () => {
        const data = await fetch("https://fakestoreapi.com/products?limit=5");
        const items = await data.json();
        console.log(items);
        setItems(items)
    }
    return (
        <div className="home-main-container">
            <br/>
            <section className="sec-1 row" style={style}>
                <div className='sec-1-inner col-sm-12'>
                    <h2>Welcome to UniLib <i className="fab fa-angular"></i></h2>
                    <hr/><br/>
                    <p className="sec-1-text">
                        Enjoy exploring the most exciting stuffs to be enjoyed by every student.<br/>
                        <b>UniLib </b>comes with a whole lot of things which you wouldn't have to be moving around to other websites and plateforms, searching for them.
                    </p><br/><br/>
                    <Link to='/login'>
                        <input type="button"className="btn btn-primary" value="Login"/>
                    </Link>
                    <Link to='/register'>
                        <input type="button"className="btn btn-primary" value="Sign Up"/>
                    </Link><br/><br/>
                    | Login to enjoy the wonderful offers |
                    <br/>
                </div>
            </section>
            
            <br/>
            
        </div>
    )
}

export default Home
