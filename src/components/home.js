import React from "react";
import "./home.css";

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <h1>Welcome to My Profoloo</h1>
                <p>
                    I'm a React Developer passionate about building beautiful, functional web applications.
                </p>
                <a href="#about" className="btn">
                    Learn More
                </a>
            </div>
        </section>
    );
};

export default Home;
