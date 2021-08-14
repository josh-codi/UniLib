import React from 'react'
import HeaderBackground from '../images/HeaderBackground.png'
import './About.css'
import {Button} from '../Button'
import {Link} from 'react-router-dom'


const About = () => {
    const style={
        
    }
    return (
        <div>
            <section className="">
                <br/><br/><br/>
                <div className="row abt-container-1">
                    <div className="col-x-sm-8 col-sm-8 col-md-5 col-lg-5 abt-image">
                        <img className="aboutImage" src={HeaderBackground}></img>
                    </div>
                    <div className="col-x-sm-8 col-sm-8 col-md-5 col-lg-5  abt-content">
                        <aside>
                            <h1>About us</h1>
                            <h3>We are providing you with most of the reliable books.</h3>
                            <h5>It's very good to relly on our books and other reasouces</h5>
                            <h6>similique tenetur exercitationem autem eveniet iste! Itaque hic optio aliquam, voluptatem tempore rem earum sint perspiciatis? Illo numquam necessitatibus, nisi perspiciatis optio dolores at labore minus vitae soluta, culpa modi unde, distinctio ratione? Molestias odit quae vitae ea libero? Nisi assumenda temporibus eos molestias odio! Distinctio explicabo</h6>
                        </aside>
                    </div>
                </div>
                <br/>
                <p>Keep Exploring More and feel free to give feedbacks</p>
                <br/><br/>
            </section>
            
        </div>
    )
}

export default About
