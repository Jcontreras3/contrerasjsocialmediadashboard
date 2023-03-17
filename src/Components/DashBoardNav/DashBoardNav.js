import { Container } from "react-bootstrap";
import "./DashBoardStyle.css";
export default function DashBoardNav() {
  return (
    <Container className="dashCont">
      <div className="dashBoardNav">
        <h2 className="dashBoardTxt">Social Media Dashboard</h2>

        <label>
          <input type="checkbox" />
          <span />
        </label>
      </div>
      <div>
        <p className="totalTxt">Total Followers: 23,004</p>
      </div>
    </Container>
  );
}
