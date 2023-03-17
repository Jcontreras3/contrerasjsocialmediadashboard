import "./overviewCardStyle.css";
import { Row } from "react-bootstrap";
// import FacebookIcon from "../assets/icon-facebook.svg";

export default function OverviewCreatingCardRed({ overviewCardPropRed }) {
  return (
    <div className="overviewCardBox">
      <div className="iconTxtRow">
        <p className="platformOverTxt">{overviewCardPropRed.User}</p>
        <img className="iconPos" src={overviewCardPropRed.Icon} />
      </div>

      <div className="overviewFollowerRow">
        <p className="overviewFollowerTxtNum">
          {overviewCardPropRed.FollowerCount}
        </p>
        <img className="arrowPos" src={overviewCardPropRed.redArrowIcon} />
        <p className="downArrowTxt">{overviewCardPropRed.redArrowTxt}</p>
      </div>
    </div>
  );
}