import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { useLang } from "../../i18n";
import { cv, profile } from "../../content";

function ResumeNew() {
  const { lang, t } = useLang();
  const cvUrl = profile.cvFile ? `${process.env.PUBLIC_URL}/${profile.cvFile}` : "";
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container style={{ position: "relative" }}>
        <h1 className="project-heading">
          <strong className="purple">{t.cvTitle[0]}</strong> {t.cvTitle[1]}
        </h1>
        {cvUrl && (
          <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
            <Button variant="primary" href={cvUrl} target="_blank" style={{ maxWidth: "250px" }}>
              <AiOutlineDownload /> &nbsp;{t.downloadCv}
            </Button>
          </Row>
        )}
        <Row className="justify-content-center">
          <Col lg={9}>
            <p className="cv-summary">{cv[lang].summary}</p>
            {cv[lang].sections.map((block) => (
              <div className="cv-block" key={block.section}>
                <h3 className="cv-section">{block.section}</h3>
                {block.items.map((it) => (
                  <div className="cv-item" key={it.title}>
                    <div className="cv-item-head">
                      <h4>{it.title}</h4>
                      {it.date && <span className="cv-date">{it.date}</span>}
                    </div>
                    {it.place && <div className="cv-place">{it.place}</div>}
                    {it.detail && <p>{it.detail}</p>}
                  </div>
                ))}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ResumeNew;
