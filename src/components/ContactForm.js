import React from "react";
import { Form, Input, TextArea } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import Button from "@mui/material/Button";
import { SocialIcon } from "react-social-icons";
const SERVICE_ID = "mayaRussellSmith";
const TEMPLATE_ID = "template_0ajn6qb";
const USER_ID = "user_y1ftUXLPd92Uw3SY8iLtJ";

const ContactForm = () => {
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
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row no-gutters">
                <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <div className="contact">
                      <h3 className="mb-4">Get in touch</h3>
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
                          placeholder="harry@hogwarts.com"
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
                          type="textArea"
                          className="formField"
                        />

                        <Button
                          type="submit"
                          className="button"
                          variant="contained"
                        >
                          Send an Owl
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                  <div className="flex info-wrap bg-primary w-100 p-md-5 p-4">
                    <h3>Let's get in touch</h3>
                    <p className="mb-4">
                      I am open for any suggestion or just to have a chat
                    </p>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span>
                          <SocialIcon
                            url="https://www.linkedin.com/in/maya-russell-smith-a32a7a197/"
                            fgColor="#fff"
                            className="socialIcon"
                          />
                        </span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <a href="https://www.linkedin.com/in/maya-russell-smith-a32a7a197/">
                            <span>Maya Russell-Smith</span>
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span>
                          <SocialIcon
                            url="https://www.youtube.com/channel/UCLBWjv_UpYZeCahMpPHhypQ"
                            fgColor="#fff"
                            className="socialIcon"
                          />
                        </span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <a href="https://www.youtube.com/channel/UCLBWjv_UpYZeCahMpPHhypQ">
                            <span>Maya Russell-Smith</span>
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span>
                          <SocialIcon
                            url="https://twitter.com/mrussellsmith"
                            fgColor="#fff"
                            className="socialIcon"
                          />
                        </span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          <a href="https://twitter.com/mrussellsmith">
                            <span>@mrussellsmith</span>
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span>
                          <SocialIcon
                            url="https://www.instagram.com/mayamoz/"
                            fgColor="#fff"
                            className="socialIcon"
                          />
                        </span>
                      </div>
                      <div className="text pl-3">
                        <p>
                          {/* <span>Phone:</span>{" "} */}
                          <a href="https://www.instagram.com/mayamoz/">
                            <span>@mayamoz</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
