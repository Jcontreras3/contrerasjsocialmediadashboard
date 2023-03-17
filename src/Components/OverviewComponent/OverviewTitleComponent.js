import { Container, Row } from "react-bootstrap";
import "./overviewCardStyle.css";
export default function OverviewTitle() {
  return (
    <Container className="overviewTitleCont">
      <Row className="overTitleRow">
        <h2 className="overviewTStyle">Overview - Today</h2>
      </Row>
    </Container>
  );
}
