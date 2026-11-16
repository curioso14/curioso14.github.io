import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaCamera } from "react-icons/fa";
import { useLang } from "../i18n";
import { profile } from "../content";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { lang, t, toggle } = useLang();

  useEffect(() => {
    const onScroll = () => updateNavbar(window.scrollY >= 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => updateExpanded(false);

  return (
    <Navbar expanded={expand} fixed="top" expand="lg" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand" onClick={close}>
          <span className="brand-name">{profile.name}</span>
          <span className="brand-sub">PORTFOLIO</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-md-center">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={close}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t.nav.home}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={close}>
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t.nav.about}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={close}>
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> {t.nav.projects}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/resume" onClick={close}>
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t.nav.cv}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/hobbies" onClick={close}>
                <FaCamera style={{ marginBottom: "2px" }} /> {t.nav.hobbies}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button href={profile.links.github} target="_blank" rel="noreferrer" className="fork-btn-inner">
                <AiFillGithub style={{ fontSize: "1.2em" }} /> GitHub
              </Button>
            </Nav.Item>
            <Nav.Item className="lang-item">
              <button className="lang-toggle" onClick={toggle} aria-label={t.langButton} title={t.langButton}>
                <span className={lang === "es" ? "on" : ""}>ES</span>
                <span className={lang === "en" ? "on" : ""}>EN</span>
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
