import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { SocialIcon } from "react-social-icons";
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
        <h3>Contact Me</h3>
        <div className="contact">
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
              placeholder="John Doe"
              required
              icon="user circle"
              iconPosition="left"
            />
            <Form.Field
              id="form-input-control-email"
              control={Input}
              label="Email"
              name="user_email"
              placeholder="mayarussellsmith@gmail.com"
              required
              icon="mail"
              iconPosition="left"
            />

            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              name="user_message"
              placeholder="Insert your message"
              required
            />
            <Button type="submit" color="green">
              Submit
            </Button>
          </Form>

          <div className="infoContainer">
            <a href="mailto:mayarussellsmith@gmail.com">
              <p>mayarussellsmith@gmail.com</p>
            </a>
            <a href="tel:+447502381831">
              <p>+44 07502381831</p>
            </a>
            <div className="icons">
              <SocialIcon
                url="https://www.facebook.com/"
                fgColor="#fff"
                className="socialIcon"
              />
              <SocialIcon
                url="https://www.linkedin.com/"
                fgColor="#fff"
                className="socialIcon"
              />
              <SocialIcon
                url="https://www.instagram.com/eatingwithelisa/"
                fgColor="#fff"
                className="socialIcon"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
