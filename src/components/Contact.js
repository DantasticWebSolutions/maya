import React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import SocialIcons from "./SocialIcons";

// import "semantic-ui-css/semantic.min.css";

const SERVICE_ID = "mayaRussellSmith";
const TEMPLATE_ID = "template_0ajn6qb";
const USER_ID = "user_y1ftUXLPd92Uw3SY8iLtJ";

const Contact = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <>
      <div>
        <div className="contact">
          <h2>Contact Me</h2>
          <Form
            onSubmit={handleOnSubmit}
            name="contact-form"
            method="POST"
            action="/success/"
            data-netlify="true"
            netlify-honeypot="got-ya"
          >
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Name"
              name="user_name"
              placeholder="Harry Potter"
              required
              icon="user circle"
              iconPosition="left"
              className="formField"
            />
            <Form.Field
              id="form-input-control-email"
              control={Input}
              label="Email"
              name="user_email"
              placeholder="harrypotter@hogwarts.com"
              required
              icon="mail"
              iconPosition="left"
              type="email"
              className="formField"
            />

            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              name="user_message"
              placeholder="Do you know anything about the chamber of secrets?"
              required
              className="formField"
            />

            <button type="submit" class="button formButton">
              <div id="dub-arrow">
                <img
                  src="https://image.flaticon.com/icons/png/512/5226/5226275.png"
                  alt="tv"
                />
              </div>
              <span>Submit</span>
            </button>
          </Form>
          <div className="infoContainer">
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
