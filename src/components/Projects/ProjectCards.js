import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { GiMicroscope, GiGalaxy, GiMiningHelmet, GiSnowflake1 } from "react-icons/gi";
import { TbChartDots3 } from "react-icons/tb";
import { FaProjectDiagram } from "react-icons/fa";

const ICONS = { microscope: GiMicroscope, galaxy: GiGalaxy, mining: GiMiningHelmet, snow: GiSnowflake1, risk: TbChartDots3, crm: FaProjectDiagram };

function ProjectCards({ imgPath, icon, meta, title, description, tags, ghLink, demoLink, inProgress, labels }) {
  const Icon = ICONS[icon] || GiMicroscope;
  return (
    <Card className="project-card-view">
      {imgPath ? (
        <Card.Img variant="top" src={imgPath} alt={title} className="project-img" />
      ) : (
        <div className="project-img project-img-placeholder" aria-hidden="true">
          <Icon />
        </div>
      )}
      <Card.Body className="d-flex flex-column">
        {inProgress && <span className="badge-progress">{labels.inProgress}</span>}
        <Card.Title>{title}</Card.Title>
        {meta && <div className="project-meta">{meta}</div>}
        <div className="project-tags">
          {tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <Card.Text style={{ textAlign: "left" }}>{description}</Card.Text>
        <div className="mt-auto">
          {ghLink && (
            <Button variant="primary" href={ghLink} target="_blank" rel="noreferrer">
              <BsGithub /> &nbsp;GitHub
            </Button>
          )}
          {demoLink && (
            <Button variant="primary" href={demoLink} target="_blank" rel="noreferrer" style={{ marginLeft: "10px" }}>
              <CgWebsite /> &nbsp;{labels.demo}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
