import React from "react";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
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
              type="email"
            />

            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              name="user_message"
              placeholder="Insert your message"
              required
            />
            {/* <button type="submit" className="button">
              <div id="dub-arrow">
                <img
                  src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-arrow-48-240.png?raw=true"
                  alt=""
                />
              </div>
              <a>Submit</a>
            </button> */}

            <button type="submit" class="button greenColor green">
              <div id="dub-arrow">
                <img
                  src="https://image.flaticon.com/icons/png/512/5226/5226275.png"
                  alt="tv"
                />
              </div>
              {/* Follow Me */}
              <a>Submit</a>
            </button>

            {/* <Button className="button" type="submit">
              Submit
            </Button> */}
          </Form>

          <div className="infoContainer">
            <a href="mailto:mayarussellsmith@gmail.com">
              <p>mayarussellsmith@gmail.com</p>
            </a>
            <a href="tel:+447502381831">
              <p>+44 07502381831</p>
            </a>
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
