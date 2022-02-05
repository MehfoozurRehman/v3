import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3dm7yud",
        "template_zkv8k6g",
        e.target,
        "user_5E0L53uCeIn6J8FtgNgs8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  function alertsOpenClose() {
    window.alert("Send Successfully");
  }

  return (
    <section className="section" id="contact">
      <div className="section-header">
        <div className="section-heading">Contact Me</div>
        <div className="section-about">Send Me a Message</div>
      </div>
      <div className="section-content">
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-row">
            <div className="input-box">
              <label htmlFor="user-name" className="input-label">
                Name
              </label>
              <input
                type="text"
                className="input-field"
                id="user-name"
                name="user_name"
              />
            </div>
            <div className="input-box">
              <label htmlFor="email-address" className="input-label">
                Email
              </label>
              <input
                type="email"
                className="input-field"
                id="email-address"
                name="user_email"
              />
            </div>
            <div className="input-box">
              <label htmlFor="user-contact" className="input-label">
                Phone
              </label>
              <input
                type="text"
                className="input-field"
                id="user-contact"
                name="contact_number"
              />
            </div>
            <div className="input-box">
              <label htmlFor="email-name" className="input-label">
                Subject
              </label>
              <input type="text" className="input-field" />
            </div>
            <div className="input-box">
              <label htmlFor="message" className="input-label">
                Message
              </label>
              <textarea
                className="input-field"
                id="message"
                name="message"
                cols="30"
                rows="10"
              />
            </div>
          </div>
          <input
            type="submit"
            value="Send Message"
            className="input-btn"
            onClick={alertsOpenClose}
          />
        </form>
      </div>
    </section>
  );
}
