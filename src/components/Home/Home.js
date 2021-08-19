import React, {useState, useEffect} from 'react'
import HomeBackground from '../images/homeBackground.png'
import './Home.css'
import SignupContianer from '../../SignupContianer'
import Categories from '../../Home_Content/Categories';
import Daily from '../../Home_Content/DailyDisplay/Daily';


const homeBack = HomeBackground;



const style_1={
    background: `url(${homeBack})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
}

const Home =()=>{
    const [items, setItems] = useState([]);

    return (
        <div className="home-main-container"><br/>

            <section className="sec-1 row" style={style_1}>
                <div className='sec-1-inner col-sm-12'>

                    <h2>Welcome to UniLib <i className="fab fa-angular"></i></h2>
                    <hr/><br/>

                    <p className="sec-1-text">
                        Enjoy exploring the most exciting stuffs to be enjoyed by every student.<br/>
                        <b>UniLib </b>comes with a whole lot of things which you wouldn't have to be moving around to other websites and plateforms, searching for them.
                    </p><br/><br/>
                    
                    {<SignupContianer />}
                </div>
            </section>
            
            <br/><br/>
            <Categories />
            <br/>
            <Daily />
        </div>
    )
}

export default Home
