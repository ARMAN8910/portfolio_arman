import React, { useEffect } from "react";
import { words } from "../constants/constants";
import Experience from "../components/Models/Experience";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Animated from "../components/Models/Animated";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 1,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  });

  // Ensure social links work reliably
  useEffect(() => {
    const handleSocialClick = (e) => {
      const url = e.currentTarget.dataset.url;
      if (url) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    };

    const socialButtons = document.querySelectorAll(".social-button");
    socialButtons.forEach((button) => {
      button.addEventListener("click", handleSocialClick);
    });

    return () => {
      socialButtons.forEach((button) => {
        button.removeEventListener("click", handleSocialClick);
      });
    };
  }, []);

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background stays full width */}
      <div className="absolute top-0 left-0 z-0 w-full h-full">
        <img
          src="/images/bg.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10">
        {/* Only hero-text & Experience are 50/50 */}
        <div className="hero-layout grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
          {/* Left Column - Text */}
          <header className="flex flex-col justify-center px-6 md:px-16">
            <div className="hero-text space-y-6">
              <h1>
                Engineer?
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word) => (
                      <span
                        key={word.text}
                        className="flex items-center gap-2 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>OR</h1>
              <h1>Beyond</h1>

              <p className="text-white-50 md:text-xl">
                Hey I'm Arman Ahmad, a Software Engineer and B.Tech graduate,
                passionate about crafting impactful, high-quality digital
                solutions
              </p>

              <p className="text-white-50 md:text-xl underline">
                Find me on socials
              </p>

              <div className="flex flex-wrap gap-3 ">
                <button
                  data-url="https://www.linkedin.com/in/arman-ahmad-/"
                  className="social-button bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 text-base rounded-md shadow-md transition"
                >
                  LinkedIn
                </button>

                <button
                  data-url="https://x.com/Arman774430"
                  className="social-button bg-sky-500 hover:bg-sky-600 text-white px-3 py-1.5 text-base rounded-md shadow-md transition"
                >
                  Twitter
                </button>

                <button
                  data-url="https://github.com/ARMAN8910"
                  className="social-button bg-gray-700 hover:bg-gray-800 text-white px-3 py-1.5 text-base rounded-md shadow-md transition"
                >
                  GitHub
                </button>
              </div>
            </div>
          </header>

          {/* Right Column - 3D Model */}
          <figure className="flex justify-center items-center p-4">
            <div className="hero-3d-layout">
              <Experience />
            </div>
          </figure>
        </div>

        {/* Animated stays below both columns */}
        <div className="mt-16">
          <Animated />
        </div>
      </div>
    </section>
  );
};

export default Hero;
