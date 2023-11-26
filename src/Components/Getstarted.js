import React from "react";
import "../Styles/Getstarted.css";
import icon from "../images/getstarted.png"
import vis from "../images/visionaries.svg";
import thrive from "../images/thrive2.jpg";
import easy from "../images/easy way.svg";
import review from "../images/review.jpg";
import backed from "../images/back.png";
import trades from "../images/trades3.png";
import earn from "../images/earn.svg";
import graph from "../images/graph.svg";
import market from "../images/market.svg";
import payless from "../images/payless.svg";
import derive from "../images/derivative.svg";
import log from "../images/logs.svg";


function Getstarted(){
    return(
        <>
        <div>
            <img src={log} alt="logs" />
        </div>
        <div>
            <img src={derive} alt="drive" />
        </div>
        <div id="pay">
            <img src={payless} alt="payless" />
        </div>
        <div>
            <img src={market} alt="mar" />
        </div>
        <div id="graphs">
            <img src={graph} alt="graph" />
        </div>
        <div style={{width:"100vw"}}>
            <img src={earn} alt="earn" style={{width:"100%"}}/>
        </div>
        <div>
            <img src={trades} alt="tra" />
        </div>
        <div>
            <img src={backed} alt="alts" />
        </div>
        <div style={{width:"100vw"}} id="rev">
            <img src={review} alt="re" style={{width:"100%"}}/>
        </div>
        <div>
            <img src={easy} alt="easy" />
        </div>
        <div className="thrive">
            <img src={thrive} alt="thrive" />
        </div>
        <div className="vision" id="led">
        <img src={vis} alt="vis" />
        </div>
        <div className="started">
            <img src={icon} alt="start" />
            
        </div>
        </>
        
    )
}
export default Getstarted;