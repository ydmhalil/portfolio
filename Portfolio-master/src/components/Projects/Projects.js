import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import gtd from "../../Assets/Projects/gtd.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Image-Text Analysis"
              description="This project continues."
              ghLink="https://github.com/ydmhalil"
              demoLink="https://www.kaggle.com/ydmhalil"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BTK Datathon2024"
              description="You can reach the solution proposal in Datathon 2024 competition organized by BTK Academy, Google and Entrepreneurship Foundation."
              ghLink="https://github.com/ydmhalil/btk-datathon2024/blob/main/kaggle.py"
              demoLink="https://www.kaggle.com/code/ydmhalil/btk-datathon2024-xgboost-priv-8-35"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gtd}
              isBlog={false}
              title="The Analysis of the GTD"
              description="This project includes analysis of the Global Terrorist Dataset."
              ghLink="https://github.com/ydmhalil"
              demoLink="https://www.kaggle.com/ydmhalil"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
