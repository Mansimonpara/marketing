import { Link } from "react-router-dom";
import "./HeroImgStyles.css";
import React from 'react'

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src="/assets/3.jpg" />
        </div>
        <div className="content">
            <h1>Where idea turns into Reality.</h1>
            <p>Make your awesome business ideas a reality with Demaze technologies</p>
            
            <div className="btntag">
                <Link to="/service" className="btn">Service</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>     
        </div>
    </div>
  );
};

export default HeroImg;
