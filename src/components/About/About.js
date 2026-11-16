import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import { useLang } from "../../i18n";

function About() {
  const { t } = useLang();
  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col md={8} style={{ paddingTop: "30px", paddingBottom: "50px" }}>
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                {t.aboutTitle[0]} <strong className="purple">{t.aboutTitle[1]}</strong>
              </h1>
              <Aboutcard />
            </Col>
          </Row>
          <h1 className="project-heading">
            {t.skillsTitle[0]} <strong className="purple">{t.skillsTitle[1]}</strong>
          </h1>
          <Techstack />
          <h1 className="project-heading">
            <strong className="purple">{t.toolsTitle[0]}</strong> {t.toolsTitle[1]}
          </h1>
          <Toolstack />
          <Github />
        </Container>
      </Container>
    </>
  );
}

export default About;
