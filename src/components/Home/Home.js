import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Constellation from "./Constellation";
import Social from "../Social";
import { useLang } from "../../i18n";
import { profile } from "../../content";

function Home() {
  const { t } = useLang();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t.hello}{" "}
                <span className="wave" role="img" aria-label="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                {t.iam}
                <strong className="main-name"> {profile.shortName}</strong>
              </h1>
              <div className="type-wrap">
                <Type />
              </div>
            </Col>
            <Col md={6} className="hero-visual">
              <Constellation />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>{t.findMe}</h1>
            <p>
              {t.connect[0]}
              <span className="purple">{t.connect[1]}</span>
              {t.connect[2]}
            </p>
            <Social />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
