
import "./creatingCard.css";
// import FacebookIcon from "../assets/icon-facebook.svg";
import { Row,Col } from "react-bootstrap";
export default function CreatingCard({ cardProp }) {
  return (
    
      
         <div className="CardBox">
          <div className="topBlueColorRow">
            <div className="topColor"></div>
          </div>

          <div className="headingRow">
            
            <img src={cardProp.Icon} />
            <p className="platformTxt">{cardProp.User}</p>
          </div>
          <div className="followerNumbersRow">
            <p className="followerTxtNum">{cardProp.FollowerCount}</p>
            <p className="followersTxt">FOLLOWERS</p>
          </div>
          <div className="followersCountRow">
            <img className="" src={cardProp.ArrowIcon} />
            <p className="upArrowTxt">{cardProp.ArrowTxt}</p>
          </div>
        </div>
    
       
      
    
  );
}
