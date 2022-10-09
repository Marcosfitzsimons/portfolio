import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import { BsCheckAll } from "react-icons/bs";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import { useRef } from "react";
import Footer from "./Footer";
import { useInView } from "framer-motion";

const Contact = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [hiddenForm, setHiddenForm] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      toSend.from_name === "" ||
      toSend.message === "" ||
      toSend.reply_to === ""
    ) {
      setErrorMsg(true);
    } else {
      setIsLoading(true);
      send("service_ju1uvdh", "template_mkotu2d", toSend, "cPxtXtNu7QsBqHWX2")
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMsg(true);
          setErrorMsg(false);
          setHiddenForm(false);
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section
      className="contact section text-neutral min-h-screen"
      title="contact"
    >
      <div
        className="container"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.15s",
        }}
      >
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
        {hiddenForm && (
          <div className="form-container row w-full">
            <form
              onSubmit={onSubmit}
              className="contact-form py-4 flex flex-col items-center w-full text-gray-700 font-medium lg:w-[80%] xl:w-[65%] lg:m-auto"
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
                  />
                </div>
              </div>
              {errorMsg && (
                <div className="row w-full">
                  <div className="alert alert-error shadow-lg bg-transparent text-[#c4032a] px-0 relative bottom-4">
                    <div className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current flex-shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-sm lg:text-base">
                        You should complete all the inputs before sending your
                        message.
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div className="row w-full btn-submit-container">
                <div className="form-item col-12 py-4 w-full flex justify-center">
                  <button
                    type="submit"
                    className="btn btn-accent w-full sm:w-auto"
                  >
                    {isLoading ? "Sending..." : "Send message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
        {successMsg && (
          <div className="alert-success-container py-4 alert-success mt-[2rem] max-w-[550px] mx-auto alert shadow-lg bg-accent text-neutral">
            <div className="flex flex-col justify-center sm:flex-row text-center">
              <BsCheckAll className="text-3xl" />
              <span>
                Your message has been sent, thank you for contacting me!
              </span>
            </div>
          </div>
        )}
        <div className="py-4 pt-8 contact-info w-full text-base-100">
          <div className="contact-info-container lg:flex lg:gap-6 lg:justify-center w-full lg:mx-auto">
            <div className="contact-info__location flex py-2 items-center gap-2">
              <HiOutlineLocationMarker className="text-2xl text-accent/90 hover:text-accent/70 transition-colors" />
              <p className="">Argentina, Buenos Aires</p>
            </div>
            <div className="contact-info__email flex py-2 items-center gap-2">
              <HiOutlineMail className="text-2xl text-accent/90 hover:text-accent/70 transition-colors" />
              <p className="">marcosfitzsimons@gmail.com</p>
            </div>
            <div className="contact-info__languages flex py-2 items-center gap-2">
              <MdLanguage className="text-2xl text-accent/90 hover:text-accent/70 transition-colors" />
              <p className="">Spanish & English</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
