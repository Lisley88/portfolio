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
        <>
        <h2>Contact</h2>
        <div className="contact">
            <form ref={form} onSubmit={sendEmail} id="contact-form">
                <div className="contact-infos">
                    <label htmlFor="name">Nom et prénom :</label>
                    <input className="contact-name" type="text" name="user_name" id="name" required/>
                   
                    <label htmlFor="email">L'adresse mail :</label>
                    <input
                        className="contact-mail"
                        type="email"
                        name="user_email"
                        id="email"
                        required
                    />
                    
                </div>
                <div >
                    <label htmlFor="message">Message :</label>
                    <textarea className="contact-msg"
                        name="message"
                        type="text"
                        id="message"
                        required>
                    </textarea>
                   
                </div>
                <input className="contact-submit" type="submit" value="Envoyer" id="input-submit" />
            </form>
        </div>
        </>
    );
}

export default Contact;
