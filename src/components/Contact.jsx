import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import { BsCheckAll } from "react-icons/bs";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_ju1uvdh", "template_mkotu2d", toSend, "cPxtXtNu7QsBqHWX2")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const formHidden = () => {
    const form = document.querySelector(".form-container");
    form.classList.add("hidden");
    const alertSuccess = document.querySelector(".alert-success-container");
    alertSuccess.classList.remove("hidden");
  };

  return (
    <section
      className="contact section text-neutral min-h-screen"
      title="contact"
    >
      <div className="container">
        <div className="row">
          <div className="basis-full grow-0 shrink-0 py-4 max-w-full mb-[60px]">
            <h3 className="text-4xl pb-2 font-bold relative before:content[''] before:h-[4px] before:w-[50px] before:bg-accent before:absolute before:top-[100%] before:left-0 after:content[''] after:h-[4px] after:w-[25px] after:bg-accent after:absolute after:top-[100%] after:left-0 after:mt-[8px]">
              Contact Me
            </h3>
          </div>
        </div>
        <h4 className="contact-title py-4 text-center text-3xl text-accent font-semibold">
          Send me an email
        </h4>
        <h5 className="contact-subtitle py-4 text-center text-lg">
          I'm very responsive to messages
        </h5>
        <div className="form-container row w-full">
          <form
            onSubmit={onSubmit}
            className="contact-form py-4 flex flex-col items-center w-full text-gray-700 font-medium lg:w-[80%] lg:m-auto"
          >
            <div className="row w-full lg:flex lg:justify-between lg:gap-2">
              <div className="form-item flex justify-center py-4 lg:basis-[50%]">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  value={toSend.from_name}
                  onChange={handleChange}
                  className="form-control input input-bordered input-accent w-full"
                />
              </div>
              <div className="form-item flex justify-center py-4 lg:basis-[50%]">
                <input
                  type="text"
                  name="reply_to"
                  value={toSend.reply_to}
                  onChange={handleChange}
                  className="form-control input input-bordered input-accent w-full"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row w-full">
              <div className="form-item col-12 py-4 flex justify-center">
                <textarea
                  name="message"
                  className="form-control input input-bordered input-accent w-full h-20"
                  value={toSend.message}
                  onChange={handleChange}
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="row w-full btn-submit-container">
              <div className="form-item col-12 py-4 w-full flex justify-center">
                <button
                  type="submit"
                  className="btn btn-accent w-full sm:w-auto"
                  onClick={formHidden}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="py-4 alert-success-container alert-success mt-[2rem] max-w-[550px] mx-auto alert shadow-lg bg-accent text-neutral hidden">
          <div className="flex flex-col justify-center sm:flex-row text-center">
            <BsCheckAll className="text-3xl" />
            <span>
              Your message has been sent, thank you for contacting me!
            </span>
          </div>
        </div>
        <div className="py-4 pt-8 contact-info w-full">
          <div className="contact-info-container lg:flex lg:gap-6 lg:justify-center w-full lg:w-[80%] lg:mx-auto">
            <div className="contact-info__location flex py-2 items-center gap-2">
              <HiOutlineLocationMarker className="text-2xl text-accent/70 hover:text-accent/50" />
              <p className="">Argentina, Buenos Aires</p>
            </div>
            <div className="contact-info__email flex py-2 items-center gap-2">
              <HiOutlineMail className="text-2xl text-accent/70 hover:text-accent/50" />
              <p className="">marcosfitzsimons@gmail.com</p>
            </div>
            <div className="contact-info__languages flex py-2 items-center gap-2">
              <MdLanguage className="text-2xl text-accent/70 hover:text-accent/50" />
              <p className="">Spanish & English</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
