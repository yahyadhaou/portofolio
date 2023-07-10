import React from "react";
import classes from "../../styles/form.module.css";
import  { useState ,useRef}  from 'react';
import emailjs from 'emailjs-com';

const Form = () => {
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

  const submitHandler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_v3eakyn', 'template_09bbnap', e.target, 'gpmedy2RKrayyAULB')
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
    <form className={classes.form} onSubmit={submitHandler}>
    <div className={classes.form__group}>
      <input type="text" name="from_name" placeholder="Your Name" required />
    </div>
    <div className={classes.form__group}>
      <input type="email" name="reply_to" placeholder="Email Address" required />
    </div>
    <div className={classes.form__group}>
      <textarea name="message" rows={5} placeholder="Message" required />
    </div>
    <button className="primary__btn" type="submit">Send</button>
  </form>
  );
};

export default Form;
