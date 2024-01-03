import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import heroImg from "../data/images/profile-pic.png";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3" style={{color:"white"}}>I&apos;m Dhaou yahya</h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
              A front-end developer specializing in React, Next.js, and React Native. Building user interfaces and experiences for web and mobile applications with a focus on creating seamless and intuitive user experiences. Proficient in leveraging React component-based architecture, Next.js server-side rendering capabilities, and React Native cross-platform development approach. Experienced in optimizing performance, delivering responsive designs, and integrating with backend systems. Passionate about crafting visually appealing interfaces and ensuring a smooth user experience across platforms.
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#contact">Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="#">Download CV</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <img alt="hero-image" src={heroImg} width="400" height="400" />

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6 className="mb-0" style={{color:"white"}}>Experience</h6>
                  <h5 className="mb-0" style={{color:"white"}}>1 Year</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
