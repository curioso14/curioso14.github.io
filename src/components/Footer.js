import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Social from "./Social";
import { useLang } from "../i18n";
import { profile } from "../content";

function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>
            {t.footer}{" "}
            <a href="https://github.com/soumyajit4419/Portfolio" target="_blank" rel="noreferrer">
              Soumyajit4419
            </a>
          </h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} {profile.name}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <Social className="footer-icons" iconClass="footer-icon-link" />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
