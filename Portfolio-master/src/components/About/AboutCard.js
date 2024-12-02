import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Halil Yıldırım </span>
            from <span className="purple"> Istabul, Türkiye.</span>
            <br />
            I am currently employed as a freelancer.
            <br />
            I have completed undergraduate as a computer programming.
            <br/>
            I am a 3rd grade software engineering student now.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Every small step you take today builds the foundation for the extraordinary tomorrow you're destined to create.""{" "}
          </p>
          <footer className="blockquote-footer">Hy.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
