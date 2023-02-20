import React from "react";
import twitter from './Twitter Icon.png';
import facebook from './Facebook Icon.png';
import instagram from './Instagram Icon.png';
import github from './GitHub Icon.png';


function Footer() {
    return (
        <div className="footer">
            <footer>
                <img className="twitter" src={twitter} alt='iconlogo'></img>   
                <img className="facebook" src={facebook} alt='iconlogo'></img>   
                <img className="instagram" src={instagram} alt='iconlogo'></img>   
                <img className="github" src={github} alt='iconlogo'></img>   
            </footer>
        </div>
    )
} 


export default Footer;