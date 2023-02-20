import React from "react";
import Intrests from "./Intrests";
import About from "./About";
import Footer from "./Footer";
import image from "./Rectangle 90.png"


function Info() {
    return (
        <div>
            <img className="img" src={image} alt="imageinfo"></img>
            <div className="info">
            <h5 className="laura">Laura Smith</h5>
            <h6 className="job">Frontend Developer</h6>
            <h6 className="site">laurasmith.website</h6>
            </div>
            <div className="buttons">
                <button className="email"><i id="email" class="fa-solid fa-envelope"></i> Email</button>
                <button className="linkedin"><i id="linkedin" class="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}






function Card() {
    return (
        <div className="card">
            <div className="main">
            <Info />
            <About/>
            <Intrests />
            </div>
            <Footer />
        </div> 
    )
}


export default Card;