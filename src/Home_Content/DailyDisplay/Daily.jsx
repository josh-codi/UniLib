import React from 'react' 
import './Daily.css'
import img from './images/img.jpg'
import img1 from './images/img1.jpg'

const image_2 = img;
const image = img1;
const Daily = () => {
    const style_2={
        background:`url(${image_2})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
    }
    const style={
        background:`url(${image})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
    }
    return (
        <div className="main_1">
            <h4 className="forYou">For You</h4>
            <div className="main_inner">
            
            <section className="sub-container-1">
                <div className="books">
                    <aside style={style}></aside>
                    <span>
                        <b className="catg">MATHEMATICS</b>
                        <p>Mathematics for the Elite<br/>
                        <p className="price">$ 456.45</p></p>
                        <b className="read">READ</b>
                    </span>
                </div>
                <div className="books">
                    <aside style={style}></aside>
                    <span>
                        <b className="catg">MATHEMATICS</b>
                        <p>Mathematics for the Elite<br/>
                        <p className="price">$ 456.45</p></p>
                        <b className="read">READ</b>
                    </span>
                </div>
                <div className="books">
                    <aside style={style}></aside>
                    <span>
                        <b className="catg">MATHEMATICS</b>
                        <p>Mathematics for the Elite<br/>
                        <p className="price">$ 456.45</p></p>
                        <b className="read">READ</b>
                    </span>
                </div>
                <div className="books">
                    <aside style={style}></aside>
                    <span>
                        <b className="catg">MATHEMATICS</b>
                        <p>Mathematics for the Elite<br/>
                        <p className="price">$ 456.45</p></p>
                        <b className="read">READ</b>
                    </span>
                </div>
                <div className="books">
                    <aside style={style}></aside>
                    <span>
                        <b className="catg">MATHEMATICS</b>
                        <p>Mathematics for the Elite<br/>
                        <p className="price">$ 456.45</p></p>
                        <b className="read">READ</b>
                    </span>
                </div>
                <div className="books">
                    <aside style={style}></aside>
                    <span>
                        <b className="catg">MATHEMATICS</b>
                        <p>Mathematics for the Elite<br/>
                        <p className="price">$ 456.45</p></p>
                        <b className="read">READ</b>
                    </span>
                </div>
                <div className="books">
                    <aside style={style}></aside>
                    <span>
                        <b className="catg">MATHEMATICS</b>
                        <p>Mathematics for the Elite<br/>
                        <p className="price">$ 456.45</p></p>
                        <b className="read">READ</b>
                    </span>
                </div>
                <div className="books">
                    <aside style={style}></aside>
                    <span>
                        <b className="catg">MATHEMATICS</b>
                        <p>Mathematics for the Elite<br/>
                        <p className="price">$ 456.45</p></p>
                        <b className="read">READ</b>                        
                    </span>
                </div>
                
                
                
            </section>







            <section className="sub-container-2">
            <h3 className="hot">HOT <i class="fab fa-gripfire"></i></h3>
                <div className="sub-container-2-inner">
                
                <div className="recommended-books">
                    <section className="hot_books_img" style={style_2}></section><br/>
                    <section className="details">
                        <p className="bookName">Teacher's Dairykjkjkjkjkjkjkjkj</p>
                        <p className="price">$ 12.23</p>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </span>
                    </section>
                </div>

                <div className="recommended-books">
                    <section className="hot_books_img" style={style_2}></section><br/>
                    <section className="details">
                        <p className="bookName">Teacher's Dairykjkjkjkjkjkjkjkj</p>
                        <p className="price">$ 12.23</p>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </span>
                    </section>
                </div>

                <div className="recommended-books">
                    <section className="hot_books_img" style={style_2}></section><br/>
                    <section className="details">
                        <p className="bookName">Teacher's Dairykjkjkjkjkjkjkjkj</p>
                        <p className="price">$ 12.23</p>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </span>
                    </section>
                </div>

                <div className="recommended-books">
                    <section className="hot_books_img" style={style_2}></section><br/>
                    <section className="details">
                        <p className="bookName">Teacher's Dairykjkjkjkjkjkjkjkj</p>
                        <p className="price">$ 12.23</p>
                        <span>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </span>
                    </section>
                </div>


                
                
                </div>
            </section>
            
            </div>
        </div>
    )
}

export default Daily
