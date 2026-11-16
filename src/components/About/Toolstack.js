import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiJupyter, SiGooglecolab, SiOverleaf, SiGithub } from "react-icons/si";

const TOOLS = [
  [SiVisualstudiocode, "VS Code"],
  [SiJupyter, "Jupyter"],
  [SiGooglecolab, "Google Colab"],
  [SiOverleaf, "Overleaf"],
  [SiGithub, "GitHub"],
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {TOOLS.map(([Icon, label]) => (
        <Col xs={4} md={2} className="tech-icons" key={label}>
          <Icon />
          <div className="tech-icons-text">{label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
