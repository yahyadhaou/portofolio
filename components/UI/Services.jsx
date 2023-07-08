import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              
A full stack JavaScript developer proficient in Next.js, React, React Native, Node.js, Express, HTML, CSS, and GitHub. Offering end-to-end web development solutions, from front-end interfaces with React and Next.js to server-side development using Node.js and Express. Experienced in building responsive and intuitive user interfaces, integrating databases, and deploying applications. Passionate about delivering high-quality code and collaborating effectively using version control with GitHub.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
