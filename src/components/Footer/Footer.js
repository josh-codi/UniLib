import React,{useEffect} from 'react'
import './Footer.css';

const Footer = () => {
    
    
    return (
        <div className="main-container">
            <section className="footer-container">
                <br/>
                <h2>UniLib <i className="fab fa-angular"></i></h2>
                <br/>
                <div className="footer-container-1">
                <h6>FAQ</h6>
                <h6>BOOKS | CATEGORIES</h6>
                <h6>CONTACT</h6>
                <h6>unilib@gmail.com</h6>
                </div>
                <br/>
                <div className="media-icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-twitter"></i>                    
                </div>
                <br/>
                <h6>TERMS AND CONDITIONS | PRIVACY <br/> LEGAL NOTICE</h6>
                <br/>
                <p className="date">Copyright © {new Date().getFullYear()} | UniLib <i className="fab fa-angular"></i></p>
                <br/>
            </section>
        </div>
    )
}

export default Footer
