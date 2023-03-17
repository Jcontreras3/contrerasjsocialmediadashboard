
import "./App.css";
import FacebookIcon from "./assets/icon-facebook.svg";
import UpArrowIcon from "./assets/icon-up.svg";
import DownArrowIcon from "./assets/icon-down.svg";
import InstaIcon from "./assets/icon-instagram.svg";
import YoutuberIcon from "./assets/icon-youtube.svg";
import TwitterIcon from "./assets/icon-twitter.svg";
import CreatingCard from "./Components/CardComponentBlue";
import CreatingCardInsta from "./Components/CardComponentInsta";
import CreatingCardYoutube from "./Components/CardComponentYoutube";
import DashBoardNav from "./Components/DashBoardNav/DashBoardNav";
import OverviewCreatingCard from "./Components/OverviewComponent/OverViewBlueCard";
import OverviewCreatingCardRed from "./Components/OverviewComponent/OverviewRedArrow";
import OverviewTitle from "./Components/OverviewComponent/OverviewTitleComponent";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <DashBoardNav />
      <Container className="contStyle">
        <CreatingCard
          cardProp={{
            Icon: FacebookIcon,
            User: "@nathanf",
            FollowerCount: 1987,
            ArrowIcon: UpArrowIcon,
            ArrowTxt: 12 + " Today",
          }}
        />
        <CreatingCard
          cardProp={{
            Icon: TwitterIcon,
            User: "@nathanf",
            FollowerCount: 1044,
            ArrowIcon: UpArrowIcon,
            ArrowTxt: 99 + " Today",
          }}
        />
        <CreatingCardInsta
          cardInsta={{
            Icon: InstaIcon,
            User: "@realnathanf",
            FollowerCount: 11 + "k",
            ArrowIcon: UpArrowIcon,
            ArrowTxt: 1099 + " Today",
          }}
        />
        <CreatingCardYoutube
          cardYoutube={{
            Icon: YoutuberIcon,
            User: "@realnathanf",
            FollowerCount: 8239,
            ArrowIconDown: DownArrowIcon,
            ArrowTxtRed: 144 + " Today",
          }}
        />
      </Container>

      <OverviewTitle />
      <Container className="contStyle2">
        <OverviewCreatingCard
          overviewCardProp={{
            Icon: FacebookIcon,
            User: "Page Views",
            FollowerCount: 87,
            ArrowIcon: UpArrowIcon,
            ArrowTxt: 3 + "%",
          }}
        />

        <OverviewCreatingCardRed
          overviewCardPropRed={{
            Icon: FacebookIcon,
            User: "Likes",
            FollowerCount: 87,
            redArrowIcon: DownArrowIcon,
            redArrowTxt: 2 + "%",
          }}
        />
        <OverviewCreatingCard
          overviewCardProp={{
            Icon: InstaIcon,
            User: "Likes",
            FollowerCount: 5462,
            ArrowIcon: UpArrowIcon,
            ArrowTxt: 2257 + "%",
          }}
        />
        <OverviewCreatingCard
          overviewCardProp={{
            Icon: InstaIcon,
            User: "Profile Views",
            FollowerCount: 52 + "k",
            ArrowIcon: UpArrowIcon,
            ArrowTxt: 1375 + "%",
          }}
        />
      </Container>

      <Container className="contStyle3">
        <OverviewCreatingCard
          overviewCardProp={{
            Icon: TwitterIcon,
            User: "Page Views",
            FollowerCount: 87,
            ArrowIcon: UpArrowIcon,
            ArrowTxt: 3 + "%",
          }}
        />

        <OverviewCreatingCard
          overviewCardProp={{
            Icon: TwitterIcon,
            User: "Likes",
            FollowerCount: 87,
            ArrowIcon: UpArrowIcon,
            ArrowTxt: 2 + "%",
          }}
        />
        <OverviewCreatingCardRed
          overviewCardPropRed={{
            Icon: YoutuberIcon,
            User: "Likes",
            FollowerCount: 5462,
            redArrowIcon: DownArrowIcon,
            redArrowTxt: 2257 + "%",
          }}
        />
        <OverviewCreatingCardRed
          overviewCardPropRed={{
            Icon: YoutuberIcon,
            User: "Likes",
            FollowerCount: 5462,
            redArrowIcon: DownArrowIcon,
            redArrowTxt: 2257 + "%",
          }}
        />
      </Container>
    </>
  );
}

export default App;
