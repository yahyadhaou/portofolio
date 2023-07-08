import React, { useState ,useRef}  from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v3eakyn', 'template_09bbnap',form.current, 'gpmedy2RKrayyAULB')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error sending email. Please try again later.');
      });
  };
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Get Me in touch</h3>
            <p>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              beatae ratione iusto cum. Doloremque suscipit eius provident error
              labore est reprehenderit, exercitationem corrupti earum deleniti! */}
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Tunis - Tunisia</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>yahya.dhaou75@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+216 90 620 017</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://github.com/yahyadhaou">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.facebook.com/Dhaou.yahya2410/">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link href="https://www.linkedin.com/in/yahya-dhaou-bb3862232/">
                <i className="ri-linkedin-line"></i>
              </Link>
              <Link href="https://www.instagram.com/yahyadhaou/">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
