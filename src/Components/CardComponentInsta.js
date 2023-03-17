import "./creatingCard.css";
// import FacebookIcon from "../assets/icon-facebook.svg";

export default function CreatingCardInsta({ cardInsta }) {
  return (
    
      
        <div className="CardBox">
          <div className="topBlueColorRow">
            <div className="topColorInsta"></div>
          </div>

          <div className="headingRow">
            <img src={cardInsta.Icon} />
            <p className="platformTxt">{cardInsta.User}</p>
          </div>
          <div className="followerNumbersRow">
            <p className="followerTxtNum">{cardInsta.FollowerCount}</p>
            <p className="followersTxt">FOLLOWERS</p>
          </div>
          <div className="followersCountRow">
            <img className="" src={cardInsta.ArrowIcon} />
            <p className="upArrowTxt">{cardInsta.ArrowTxt}</p>
            <p className="downArrowTxtRed">{cardInsta.ArrowTxtRed}</p>

          </div>
        </div>
      
    
  );
}