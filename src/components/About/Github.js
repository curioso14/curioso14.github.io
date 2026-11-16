import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useLang } from "../../i18n";
import { profile } from "../../content";

function Github() {
  const { t } = useLang();
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", color: "white" }}>
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        {t.githubTitle[0]} <strong className="purple">{t.githubTitle[1]}</strong>
      </h1>
      <GitHubCalendar
        username={profile.githubUser}
        blockSize={15}
        blockMargin={5}
        color="#2dd4bf"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
