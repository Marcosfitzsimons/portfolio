import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import { BsCheckAll } from "react-icons/bs";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";
import Footer from "./Footer";
import { motion } from "framer-motion";
import "animate.css";

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

  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const successMsgVariants = {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const contactInfo = [
    {
      id: 1,
      text: "Argentina, Buenos Aires",
      icon: <HiOutlineLocationMarker className="text-2xl text-accent/90" />,
    },
    {
      id: 2,
      text: "marcosfitzsimons@gmail.com",
      icon: <HiOutlineMail className="text-2xl text-accent/90" />,
    },
    {
      id: 3,
      text: "Spanish - English",
      icon: <MdLanguage className="text-2xl text-accent/90" />,
    },
  ];

  return (
    <section
      className="contact section text-neutral min-h-screen"
      title="contact"
    >
      <motion.div
        className="container"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
                <div className="animate__animated animate__fadeIn row w-full">
                  <div className="alert alert-error shadow-lg bg-secondary/50 mt-2 text-[#c4032a] px-4 relative bottom-4">
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
                    className="btn btn-accent bg-accent/90 text-slate-100 transition-colors w-full sm:w-auto hover:bg-transparent hover:border-accent hover:text-white hover:shadow-md hover:shadow-accent/30"
                  >
                    {isLoading ? "Sending..." : "Send message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
        {successMsg && (
          <motion.div
            variants={successMsgVariants}
            initial="hidden"
            animate="visible"
            className="alert-success mt-[2rem] max-w-[550px] mx-auto alert shadow-lg bg-accent/10 border border-accent/40 p-2 rounded-md lg:p-4 hover:border-accent"
          >
            <div className="flex flex-col justify-center text-slate-200 text-center transition-colors items-center gap-2 sm:flex-row lg:gap-2">
              <BsCheckAll className="text-3xl text-accent" />
              <span>
                Your message has been sent, thank you for contacting me!
              </span>
            </div>
          </motion.div>
        )}
        <div className="py-4 pt-8 contact-info w-full text-base-100">
          <div className="lg:flex lg:gap-6 lg:justify-center w-full lg:mx-auto">
            {contactInfo.map((e) => (
              <div className="flex py-2 items-center gap-2" key={e.id}>
                {e.icon}
                <p className="">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </motion.div>
    </section>
  );
};

export default Contact;
