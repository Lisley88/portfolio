import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Contact/Contact.scss";

function Contact() {
    const form = useRef();

    const resetform = () => {
        document.getElementById("contact-form").reset();
      };
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "Service_Portfolio", "template_qkxwk2c", form.current, {
                    publicKey: "2569OherzQEWr43e0",
                  })
            .then(
                (result) => {
                    resetform();
                    alert("message sent successfully...");
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    return (
        <div className="contact">
            <form ref={form} onSubmit={sendEmail} id="contact-form">
                <div className="contact-infos">
                    <input className="contact-name" type="text" placeholder="Name" name="user_name" />
                    <input
                        className="contact-mail"
                        type="email"
                        placeholder="Email address"
                        name="user_email"
                    />
                </div>
                <div >
                    <textarea className="contact-msg"
                        name="message"
                        type="text"
                        placeholder="Message">
                    </textarea>
                </div>
                <input className="contact-submit" type="submit" value="Submit" id="input-submit" />
            </form>
        </div>
    );
}

export default Contact;
