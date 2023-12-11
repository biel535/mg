import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import StyledContactForm from "./ContactStyles";
import Map from "../components/Map";
import Footer from '../components/Footer';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i6t883h",
        "template_s3glzsl",
        form.current,
        "Ee7r35jF8ckJXEExk"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          clearForm();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const clearForm = () => {
   
    form.current.reset();
  };

  return (
    <>
    <div className="Kontakt-heading">
          <h1>KONTAKT</h1>
        </div>
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Imię i Nazwisko</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Numer kontaktowy</label>
        <input type="tel" name="user_tel" />
        <label>Treść wiadomości</label>
        <textarea name="message" />
        <input type="submit" value="Wyślij" />
      </form>
    </StyledContactForm>
    <Map />
    <Footer />
    </>
  );
};

export default Contact;
