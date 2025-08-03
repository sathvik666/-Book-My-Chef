import React from 'react';
import './App.css';
import logo1 from './all.jpg';
import chef1 from './all.jpg';
import bookLogo from './all.jpg';
import bartenders from './all.jpg';
import caterboy from './all.jpg';
import about1Logo from './all.jpg';
import howPic from './all.jpg';

const App = () => {
    return (
        <div>
            <header>
                <div className="logo-container">
                    <img src={logo1} alt='YourPhoto' className="logo"></img>
                    <h1>Welcome to BookMyChef</h1>
                </div>
            </header>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact-us">ContactUs</a>
            </nav>
            <section id="home" className="home">
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

                            <input type="submit" value="Submit" className="submit-button" />
                            <input type="submit" value="Login" className="submit-button" />
                        </form>
                    </div>
                    <div className="photo-container">
                        <img src={chef1} alt="YourPhoto" className="photo" />
                    </div>
                </div>
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
            <section id="testimonials" className="container">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Great service! The chefs are amazing."</p>
                    <p>- John Doe</p>
                </div>
                <div className="testimonial">
                    <p>"BookMyChef made hosting dinner parties a breeze."</p>
                    <p>- Jane Smith</p>
                </div>
            </section>
            <footer>
                <p>&copy;BookMyChef. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;

