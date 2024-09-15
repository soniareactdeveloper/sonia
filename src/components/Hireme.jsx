import { useState } from "react";
import { content } from "../Content";

const Hireme = () => {
  const { Hireme } = content;
  const [showEmail, setShowEmail] = useState(false);

  const handleButtonClick = () => {
    setShowEmail(!showEmail);
  };

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse mb-12">
          <img
            src="https://cdn.dribbble.com/users/891859/screenshots/3472550/hireme.gif"
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src="https://cdn.dribbble.com/users/891859/screenshots/3472550/hireme.gif"
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 py-12 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            {/* Hire Me Button */}
            <button
              className="btn bg-dark_primary text-white hover:bg-dark_secondary transition-all duration-300 mr-4"
              onClick={handleButtonClick}
            >
              {Hireme.btnText}
            </button>
            {/* Show Email */}
            {showEmail && (
              <div className="mt-4">
                <a
                  href="mailto:soniareactdeveloper@gmail.com"
                  className="text-dark_primary underline"
                >
                  soniareactdeveloper@gmail.com
                </a>
              </div>
            )}

            {/* Download CV Button */}
            <a
              href="/sonia.pdf" 
              download
              className="btn bg-dark_primary text-white hover:bg-dark_secondary transition-all duration-300 mt-4 inline-block"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;



