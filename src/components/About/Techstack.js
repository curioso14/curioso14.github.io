import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython, SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiOpencv,
  SiScipy, SiLatex, SiGit, SiPowerbi, SiWolframmathematica,
} from "react-icons/si";
import { GiGalaxy } from "react-icons/gi";
import { FaBrain, FaDatabase, FaRobot } from "react-icons/fa";

const STACK = [
  [SiPython, "Python"],
  [SiPytorch, "PyTorch"],
  [null, "HuggingFace", "🤗"],
  [FaBrain, "MONAI"],
  [SiScikitlearn, "scikit-learn"],
  [FaRobot, "LangChain"],
  [SiOpencv, "OpenCV"],
  [SiNumpy, "NumPy"],
  [SiPandas, "pandas"],
  [SiScipy, "SciPy"],
  [GiGalaxy, "Astropy"],
  [FaDatabase, "SQL"],
  [SiPowerbi, "Power BI"],
  [SiWolframmathematica, "Mathematica"],
  [SiLatex, "LaTeX"],
  [SiGit, "Git"],
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {STACK.map(([Icon, label, emoji]) => (
        <Col xs={4} md={2} className="tech-icons" key={label}>
          {Icon ? <Icon /> : <span className="tech-emoji">{emoji}</span>}
          <div className="tech-icons-text">{label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
