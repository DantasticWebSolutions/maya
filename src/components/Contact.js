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
        {/* <h3>Contact Me</h3> */}
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
              placeholder="Harry Potter"
              required
              icon="user circle"
              iconPosition="left"
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
            />

            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Message"
              name="user_message"
              placeholder="Do you know anything about the chamber of secrets?"
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

            <button type="submit" class="button formButton">
              <div id="dub-arrow">
                <img
                  src="https://image.flaticon.com/icons/png/512/5226/5226275.png"
                  alt="tv"
                />
              </div>
              <span>Submit</span>
            </button>

            {/* <Button className="button" type="submit">
              Submit
            </Button> */}
          </Form>

          {/* <div
            className="formImg"
            style={{
              background:
                "url(https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1253&q=80)",
            }}
          ></div> */}
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
