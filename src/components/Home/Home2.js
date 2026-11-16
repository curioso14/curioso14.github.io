import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLang } from "../../i18n";

function Home2() {
  const { t } = useLang();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="justify-content-center">
          <Col md={9} className="home-about-description">
            <h1 style={{ fontSize: "2.4em" }}>
              {t.introTitle[0]} <span className="purple">{t.introTitle[1]}</span>
            </h1>
            <div className="home-about-body">
              {t.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
