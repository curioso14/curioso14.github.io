import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useLang } from "../../i18n";

function StarList({ items }) {
  return (
    <ul className="star-list">
      {items.map((x) => (
        <li key={x}>{x}</li>
      ))}
    </ul>
  );
}

function AboutCard() {
  const { t } = useLang();
  const c = t.aboutCard;
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {c.lines.map((l, i) => (
            <p key={i} style={{ textAlign: "justify" }}>{l}</p>
          ))}
          <p className="list-title">{c.interestsIntro}</p>
          <StarList items={c.interests} />
          <p className="list-title">{c.hobbiesIntro}</p>
          <StarList items={c.hobbies} />
          <p className="hobbies-link">
            <Link to="/hobbies">{c.hobbiesLink} →</Link>
          </p>
          <p>
            <span className="purple">{c.languagesTitle}:</span> {c.languages}
          </p>
          <p className="quote-text">“{c.quote}”</p>
          <footer className="blockquote-footer">{c.quoteAuthor}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
