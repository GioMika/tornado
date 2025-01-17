import classes from "./ContactPage.module.css";
import backgroundForms from "../../images/BackgroundForm.png";
import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Social from '../../images/Social.svg'

const ContactsPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();



  const formData = new FormData(form.current);
  console.log("Form data:", Object.fromEntries(formData));

  emailjs
    .sendForm(
      "service_1387zas",
      "template_jqc0lfi",
      form.current,
      "igmFMBxkgSrdraz1C"
    )
    .then(
      (result) => {
        console.log("Email sent:", result.text);
        alert("Ваше сообщение отправлено!");
        form.current.reset();
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("Ошибка отправки сообщения. Попробуйте позже.");
      }
    );
};


  return (
    <main>
      <div className={classes.container}>
        <h2>Свяжитесь с нами или закажите обратный звонок</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className={classes.input_settings}>
            <label>Имя</label>
            <input type="text" name="user_name" required />
          </div>
          <div className={classes.input_settings}>
            <label>Телефон</label>
            <input type="number" name="phone" required />
          </div>
		  <div className={classes.input_settings}>
            <label>Почта</label>
            <input type="email" name="user_email" required />
          </div>
          <div className={classes.input_settings}>
            <label>Message:</label>
            <textarea name="message" required />
          </div>
		  <div className={classes.btn_settings}>
			<img src={Social} alt="" />
          <button type="submit">Send</button>
		  </div>
        </form>
      </div>
    </main>

  );
};

export default ContactsPage;
