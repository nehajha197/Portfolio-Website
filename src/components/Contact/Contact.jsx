import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/assets/theme_pattern.svg";
import mail_icon from "../../assets/assets/mail_icon.svg";
import location_icon from "../../assets/assets/location_icon.svg";
import call_icon from "../../assets/assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "258dec06-8553-4ef0-b35e-7adba79e6f17");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I am currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You can
            contact anytime.
          </p>
          <div className="contact-detail">
            <img src={mail_icon} alt="" /> <p>greatstackdev@gmail.com</p>
          </div>
          <div className="contact-detail">
            <img src={call_icon} alt="" /> <p>+772-567-876</p>
          </div>
          <div className="contact-detail">
            <img src={location_icon} alt="" /> <p>CA, US</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-left">
          <label>Your Name</label>
          <input type="text" placeholder="Enter your Name" name="name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter your Email" name="email" />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
