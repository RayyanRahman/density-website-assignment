import React from "react";
import foot from "../images/Footer.svg";
import "../Styles/Footer.css";

function footer(){
    return(
        <>
        <div className="footer-image">
            <img src={foot} alt="footer" />
        </div>
        </>
    )
}
export default footer;