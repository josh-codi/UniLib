import React from 'react'
import './Categories.css'
import img2 from './DailyDisplay/images/img2.jpg'

const image= img2;
// const image="./image/homeBackground.png"

const Categories = () => {
    const style={
        textAlign:"left",
        paddingLeft:"2%",
        width:"fit-content",
        fontWeight:"800"
        
    }
    return (
        <div className="main">
            
            <h3 style={style}>Popular Now</h3>
            <i class="fas fa-chevron-circle-right"></i>
            <section className="containe scrolling-wrapper row flex-row flex-nowrap ">
                
                <div className="bookNumber scroll-col">
                    <img src={image} alt="photo"/>
                    <div className="title">
                        <p>Automated machines<p className="price">Price: $ 89.34</p></p>                        
                    </div>
                </div>
                <div className="bookNumber scroll-col">
                    <img src={image} alt="photo"/>
                    <div className="title">
                        <p>Automated machines<p className="price">Price: $ 89.34</p></p>                        
                    </div>
                </div>
                <div className="bookNumber scroll-col">
                    <img src={image} alt="photo"/>
                    <div className="title">
                        <p>Automated machines<p className="price">Price: $ 89.34</p></p>                        
                    </div>
                </div>
                <div className="bookNumber scroll-col">
                    <img src={image} alt="photo"/>
                    <div className="title">
                        <p>Automated machines<p className="price">Price: $ 89.34</p></p>                        
                    </div>
                </div>
                <div className="bookNumber scroll-col">
                    <img src={image} alt="photo"/>
                    <div className="title">
                        <p>Automated machines<p className="price">Price: $ 89.34</p></p>                        
                    </div>
                </div>
                <div className="bookNumber scroll-col">
                    <img src={image} alt="photo"/>
                    <div className="title">
                        <p>Automated machines<p className="price">Price: $ 89.34</p></p>                        
                    </div>
                </div>
                <div className="bookNumber scroll-col">
                    <img src={image} alt="photo"/>
                    <div className="title">
                        <p>Automated machines<p className="price">Price: $ 89.34</p></p>                        
                    </div>
                </div>
                     
            </section>
        </div>
    )
}

export default Categories
