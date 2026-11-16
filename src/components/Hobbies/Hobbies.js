import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCamera, FaMusic, FaMotorcycle } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import Particle from "../Particle";
import { useLang } from "../../i18n";
import { hobbies, photos } from "../../content";

const ICONS = { camera: FaCamera, music: FaMusic, cooking: GiCookingPot, moto: FaMotorcycle };

function Hobbies() {
  const { lang, t } = useLang();
  const [open, setOpen] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (open === null) return;
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ position: "relative" }}>
        <h1 className="project-heading">
          {t.hobbiesTitle[0]} <strong className="purple">{t.hobbiesTitle[1]}</strong>
        </h1>
        <p style={{ color: "white" }}>{t.hobbiesSub}</p>

        <Row className="justify-content-center hobby-row">
          {hobbies.map((h) => {
            const Icon = ICONS[h.icon];
            return (
              <Col xs={12} sm={6} lg={3} key={h.icon} className="hobby-col">
                <div className="hobby-card">
                  <Icon className="hobby-icon" />
                  <h3>{h.title[lang]}</h3>
                  <p>{h.text[lang]}</p>
                </div>
              </Col>
            );
          })}
        </Row>

        <h2 className="project-heading gallery-heading">
          {t.galleryTitle[0]} <strong className="purple">{t.galleryTitle[1]}</strong>
        </h2>
        {photos.length === 0 ? (
          <p className="gallery-empty">{t.galleryEmpty}</p>
        ) : (
          <div className="gallery">
            {photos.map((ph, i) => (
              <button className="gallery-item" key={i} onClick={() => setOpen(i)}>
                <img src={ph.src} alt={ph.caption ? ph.caption[lang] : ""} loading="lazy" />
                {ph.caption && <span>{ph.caption[lang]}</span>}
              </button>
            ))}
          </div>
        )}
      </Container>

      {open !== null && (
        <div className="lightbox" onClick={() => setOpen(null)} role="dialog" aria-modal="true">
          <img src={photos[open].src} alt={photos[open].caption ? photos[open].caption[lang] : ""} />
          {photos[open].caption && <p>{photos[open].caption[lang]}</p>}
        </div>
      )}
    </Container>
  );
}

export default Hobbies;
