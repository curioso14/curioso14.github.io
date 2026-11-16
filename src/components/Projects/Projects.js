import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useLang } from "../../i18n";
import { projects } from "../../content";

function Projects() {
  const { lang, t } = useLang();
  const [filter, setFilter] = useState("all");
  const shown = projects.filter((p) => filter === "all" || p.categories.includes(filter));

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t.projectsTitle[0]} <strong className="purple">{t.projectsTitle[1]}</strong>
        </h1>
        <p style={{ color: "white" }}>{t.projectsSub}</p>
        <div className="project-filters" role="tablist">
          {Object.entries(t.filters).map(([k, label]) => (
            <button
              key={k}
              role="tab"
              aria-selected={filter === k}
              className={filter === k ? "active" : ""}
              onClick={() => setFilter(k)}
            >
              {label}
            </button>
          ))}
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {shown.map((p) => (
            <Col md={6} lg={4} className="project-card" key={p.title.es}>
              <ProjectCard
                imgPath={p.img}
                icon={p.icon}
                meta={p.meta && p.meta[lang]}
                title={p.title[lang]}
                description={p.description[lang]}
                tags={p.tags}
                ghLink={p.ghLink}
                demoLink={p.demoLink}
                inProgress={p.inProgress}
                labels={t}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
