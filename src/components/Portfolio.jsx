import React from "react";

const Portfolio = () => {
  return (
    <section className="portfolio section text-neutral min-h-screen">
      <div className="container pb-10">
        <div className="row">
          <div className="basis-full grow-0 shrink-0 py-4 max-w-full mb-[60px]">
            <h3 className="text-4xl pb-2 font-bold relative before:content[''] before:h-[4px] before:w-[50px] before:bg-accent before:absolute before:top-[100%] before:left-0 after:content[''] after:h-[4px] after:w-[25px] after:bg-accent after:absolute after:top-[100%] after:left-0 after:mt-[8px]">
              Projects
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading basis-full grow-0 shrink-0 max-w-full py-4">
            <h4 className="text-xl pb-5">My Last Projects:</h4>
          </div>
        </div>
        <div className="row sm:grid sm:grid-cols-2 lg:gap-2 lg:grid-cols-3 xl:grid-cols-4 w-[full] lg:w-[85%]">
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
          <article className="portfolio-item py-4 max-w-[280px] m-auto md:m-0">
            <div className="portfolio-item-inner border-[4px] border-accent/40 rounded-xl overflow-hidden cursor-pointer shadow-xl shadow-white/10">
              <div className="portfolio-img-container">
                <img
                  src="https://via.placeholder.com/250"
                  alt="#"
                  className="w-full lg:max-h-[200px]"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
