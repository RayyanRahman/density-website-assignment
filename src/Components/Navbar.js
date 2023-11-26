import React from "react";
import logo from "../images/Frame.svg";
import mobile from "../images/mobile2.png";
import future from "../images/future.png";
import { Link as ScrollLink } from 'react-scroll';
import "../Styles/Navbar.css";


function Navbar(){
    return(
        <>
        <div className="top-nav">
            <img className="frame" alt="Frame" src={logo}/>
            <div className="div">
            <div className="navbar">
            <div className="text-wrapper"><ScrollLink
                to="graphs"
                smooth={true}
                duration={500}
                >
                Career
                </ScrollLink></div>
            <div className="text-wrapper"><ScrollLink
                to="rev"
                smooth={true}
                duration={500}
                >Blogs
                </ScrollLink></div>
            <div className="text-wrapper"><ScrollLink
                to="led"
                smooth={true}
                duration={500}
                >Leaderboard
                </ScrollLink></div>
            <div className="text-wrapper"><ScrollLink
                to="pay"
                smooth={true}
                duration={500}
                >
                Fees
                </ScrollLink></div>
        </div>
        <div className="trade-now-wrapper">
        <div className="trade-now">TRADE NOW</div>
        </div>
        </div>
        </div>

        <div className="nav-mobile">
            <div className="nav-heading">
            <div className="up">
                <img src={future} alt="future" className="fut-img" />
                <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
                <img src={mobile} alt="mobile" className="mobile-img"/>
            </div>
            </div>
            

        </div>
        </>
    )
}
export default Navbar;