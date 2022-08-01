import React from "react";

const Contact = () => {
  return (
    <section className="contact section text-neutral min-h-screen">
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
        <div className="row w-full">
          <div className="contact-form py-4 flex flex-col items-center w-full text-gray-700 font-medium lg:w-[80%] lg:m-auto">
            <div className="row w-full lg:flex lg:justify-between lg:gap-2">
              <div className="form-item flex justify-center py-4 lg:basis-[50%]">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="form-control input input-bordered input-accent w-full"
                />
              </div>
              <div className="form-item flex justify-center py-4 lg:basis-[50%]">
                <input
                  type="email"
                  className="form-control input input-bordered input-accent w-full"
                  id="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row w-full">
              <div className="form-item col-12 py-4 flex justify-center">
                <input
                  type="text"
                  className="form-control input input-bordered input-accent w-full"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="row w-full">
              <div className="form-item col-12 py-4 flex justify-center">
                <textarea
                  name="message"
                  className="form-control input input-bordered input-accent w-full h-20"
                  id=""
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="row w-full">
              <div className="form-item col-12 py-4 w-full flex justify-center">
                <button
                  type="submit"
                  className="btn btn-accent w-full sm:w-auto"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
