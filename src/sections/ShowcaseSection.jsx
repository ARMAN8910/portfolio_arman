import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap/gsap-core";
import { Typewriter } from "react-simple-typewriter";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          ScrollTrigger: {
            trigger: card,
            start: "top bottom -=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/*  Left (MAIN PROJECT) */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="impage-wrapper">
              <img src="/images/project1.png" alt="ShopMe" />
            </div>
            <div className="text-content">
              <h2>
                Full-stack e-commerce with Redux speed, JWT security, and
                responsive UI
              </h2>
              <p>
                Tech Stack: HTML, CSS, JavaScript, React.js, Node.js, Tailwind
                CSS, MongoDB, MUI, Redux
              </p>

              <a
                href="https://github.com/ARMAN8910/E-commerce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition"
              >
                GitHub
              </a>

              <a
                href="https://ecommerce-codewithzosh.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition ml-2"
              >
                Link
              </a>
            </div>
          </div>
          {/* Right(SECONDARY PROJECTS) */}

          <div
            className="project-list-wrapper overflow-hidden"
            ref={project2Ref}
          >
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="Foodies" />
              </div>
              <div className="text-content">
                <h2>
                  PWA recipe search with API integration and blazing-fast
                  queries.
                </h2>
                <p>
                  Tech Stack:JS, HTML, CSS, React, Node, MySQL, Bootstrap,
                  Edamam API
                </p>
                <a
                  href="https://github.com/ARMAN8910/foodies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition ml-2"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img
                  src="/images/project3.png"
                  alt="Online Student Monitoring System"
                />
              </div>
              <div className="text-content">
                <h2>Real-time tracking & dashboards for 500+ students</h2>
                <p>Tech Stack:JS, HTML, CSS, React, Node, MySQL</p>

                <a
                  href="https://dreamy-pixie-8992a9.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition ml-2"
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Typing Animation Text */}
        <p className="text-lg text-center mt-8 text-white font-semibold">
          <Typewriter
            words={["Find More Projects in My Github"]}
            loop={false}
            typeSpeed={60}
            deleteSpeed={50}
          />
        </p>
      </div>
    </section>
  );
};

export default ShowcaseSection;
