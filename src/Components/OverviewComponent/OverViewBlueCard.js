import "./overviewCardStyle.css";
import { Row } from "react-bootstrap";
// import FacebookIcon from "../assets/icon-facebook.svg";

export default function OverviewCreatingCard({ overviewCardProp }) {
  return (
    <>
      <div className="overviewCardBox">
        <div className="iconTxtRow">
          <p className="platformOverTxt">{overviewCardProp.User}</p>
          <img className="iconPos" src={overviewCardProp.Icon} />
        </div>

        <div className="overviewFollowerRow">
          <p className="overviewFollowerTxtNum">
            {overviewCardProp.FollowerCount}
          </p>
          <img className="arrowPos" src={overviewCardProp.ArrowIcon} />
          <p className="upArrowTxt">{overviewCardProp.ArrowTxt}</p>
        </div>
      </div>
      
    </>
  );
}
