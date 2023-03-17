import "./creatingCard.css";
// import FacebookIcon from "../assets/icon-facebook.svg";

export default function CreatingCardYoutube({ cardYoutube }) {
  return (
    
      
        <div className="CardBox">
          <div className="topBlueColorRow">
            <div className="topColorYoutube"></div>
          </div>

          <div className="headingRow">
            <img src={cardYoutube.Icon} />
            <p className="platformTxt">{cardYoutube.User}</p>
          </div>
          <div className="followerNumbersRow">
            <p className="followerTxtNum">{cardYoutube.FollowerCount}</p>
            <p className="followersTxt">FOLLOWERS</p>
          </div>
          <div className="followersCountRow">
            <img  src={cardYoutube.ArrowIconDown} />
            <p className="downArrowTxtRed">{cardYoutube.ArrowTxtRed}</p>
          </div>
        </div>
      
    
  );
}