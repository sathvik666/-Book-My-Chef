import React from 'react';
import './App.css';
import logo1 from './logo1.jpg';
import chef1 from './chef1.jpg';
import bookLogo from './book.logo.jpg';
import bartenders from './bartendersss.jpg';
import caterboy from './cateringboy.jpg';
import about1Logo from './about1.logo.jpg';
import howPic from './how.png';
import green from './chefmaking.mp4';
import { useNavigate } from 'react-router-dom'
import  Adds from './adds'
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
    const navigate=useNavigate();
    function clicklogut() {
        navigate("/");
    }
    return (
      <header className="header">
        <div className="logo-container">
          <img src={logo1} alt='YourPhoto' className="logo"></img>
          <h1>Hello username</h1>
          <button className="right-corner-button" onClick={clicklogut}>Logout</button>
        </div>
  </header>
    );
  }
function Nav(){
    return(
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#contact-us">ContactUs</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#testimonials">Testimonials</a>
            </nav>
    );
}
function App () {
    const navigate=useNavigate();
    function clicklogut1() {
        navigate("/menu");
    }
    function clicklogut2() {
        navigate("/pickyourmenu");
    }
    return (
        <div>
            <Header/>
            <Nav/>
            <Adds/>
            <br/>
            <section id="home" className="home">
            <video autoPlay loop muted className="background-video">
                <source src={green} type="video/mp4" />
                Your browser does not support the video tag.</video>
                <center>
                    <div className='content'>
                        <h1 >Selct a service:</h1><br/><br/>
                        <button onClick={clicklogut2}>Pick Your Menu</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={clicklogut1}>Explore Menu</button><br/><br/>
                        <button onClick={clicklogut1}>Premium Chef</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={clicklogut1}>Bar Tenders</button><br/><br/>
                        <button onClick={clicklogut1}>Discover Caterers</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button onClick={clicklogut1}>Culinary Experiences</button>
                    </div>
                </center>
            </section>
            <section id="about-photos" className="about-photos">
                <h2>Are You Looking For Experienced </h2><br /><br />
                <div className="container">
                    <div className="photo">
                        <img src={bookLogo} alt="Photo1" />
                        <h3>Chefs</h3>
                    </div>
                    <div className="photo">
                        <img src={bartenders} alt="Photo2" />
                        <h3>Bartenders</h3>
                    </div>
                    <div className="photo">
                        <img src={caterboy} alt="Photo3" />
                        <h3>Caterers</h3>
                    </div>
                </div>
            </section>
            <section id="about" className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="about-image">
                            <img src={about1Logo} alt="AboutPhoto" className="photo" />
                        </div>
                        <div className="about-text">
                            <h2>About Us:</h2>
                            <p>Ever thought about taking your kitchen talents to the next level? Partner with BookMyChef, and whether you’re all about cooking classes, private chef gigs, or food tours, let’s grow your audience together in just a few clicks.</p>
                            <h4>Benefits Of Partnering With Us:</h4>
                            <p>Flexibility Schedule.</p>
                            <p>Earn Extra Income.</p>
                            <p>User friendly App.</p>
                            <p>Showcase your Culinary skills to audiences across India.</p>
                            <p>Part of a community of passionate chefs.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="how-it-works" className="container">
                <div id="how" className="how">
                    <div className="how-image">
                        <img src={howPic} alt="About Pic" className="howimg" />
                    </div>
                </div>
            </section>
            <section id="contact-us" className="contact-us">
                <div className="container">
                    <div className="form-container">
                        <form>
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" required /><br />

                            <label htmlFor="mobile">Mobile Number:</label>
                            <input type="text" id="mobile" name="mobile" required /><br />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" required /><br />

                            <label htmlFor="options">Select Option:</label>
                            <select id="options" name="options">
                                <option value="option1">Services you will be providing...</option>
                                <option value="option1">Profesional Chefs</option>
                                <option value="option2">Caterers</option>
                                <option value="option3">Bartenders</option>
                            </select><br />

                            <label htmlFor="location">Location:</label>
                            <input type="text" id="location" name="location" required /><br />

                            <input type="submit" value="Submit" className="submit-button" />&nbsp;&nbsp;
                            <input type="submit" value="Login" className="submit-button" />
                        </form>
                    </div>
                    <div className="photo-container">
                        <img src={chef1} alt="YourPhoto" className="photo" />
                    </div>
                </div>
            </section>
            <br/>
            <center><h1>Testimonials</h1></center>
            <section id="testimonials" class="container">
                <div class="testimonial">
                    <div class="testimonial-content">
                        <p class="testimonial-text">"Exceptional service! The culinary expertise is unmatched."</p>
                        <p class="testimonial-author">- Swathi Sowmya</p>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div class="testimonial">
                    <div class="testimonial-content">
                        <p class="testimonial-text">"Booking with BookMyChef has streamlined my dinner parties."</p>
                        <p class="testimonial-author">- Rakesh</p>
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy;BookMyChef. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;