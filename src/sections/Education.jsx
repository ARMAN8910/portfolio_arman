import TitleHeader from "../components/Models/TitleHeader";
import { EducationCard } from "../constants/constants";
import GlowCard from "../components/GlowCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  useGSAP(() => {
    // Animate cards from bottom with stagger
    gsap.from(".edu-card", {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".edu-card",
        start: "top 90%",
      },
    });

    // Animate school logos with bounce effect
    gsap.from(".school-logo", {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "elastic.out(1.2, 0.5)",
      scrollTrigger: {
        trigger: ".school-logo",
        start: "top 85%",
      },
    });

    // Animate timeline glow during scrolling
    const timelineLine = document.querySelector(".timeline-line");
    gsap.to(timelineLine, {
      boxShadow: "0 0 15px 5px rgba(93, 69, 255, 0.8)",
      scrollTrigger: {
        trigger: "#Education",
        start: "top 40%",
        end: "bottom 60%",
        scrub: 1,
      },
    });

    // Animate timeline dots
    gsap.from(".timeline-dot", {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".timeline-dot",
        start: "top 85%",
      },
    });

    // Animate timeline line growth
    gsap.fromTo(
      ".timeline-line",
      { scaleY: 0, transformOrigin: "top top" },
      {
        scaleY: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <section
      id="Education"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Education" sub="My Education Overview" />

        <div className="mt-32 relative timeline-container">
          {/* Timeline line with glow effect */}
          <div className="timeline-line absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-purple-500 to-transparent transform -translate-x-1/2 transition-all duration-300" />

          <div className="relative z-50 space-y-20">
            {EducationCard.map((card, index) => (
              <div
                key={card.degree}
                className="edu-card relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8"
              >
                {/* School Logo - Left side */}
                <div className="school-logo flex justify-end">
                  <div className="bg-gradient-to-br from-purple-600/20 to-purple-400/10 backdrop-blur-sm border border-purple-500/30 rounded-full p-3 shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    <img
                      src={card.imgPath}
                      alt={`${card.institution} logo`}
                      className="size-16 md:size-20 object-contain"
                    />
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="flex justify-center">
                  <div className="timeline-dot size-4 bg-purple-500 rounded-full z-10 border-2 border-white" />
                </div>

                {/* Education Card - Right side (fixed size) */}
                <div className="flex justify-start">
                  <div className="w-full max-w-md">
                    <GlowCard card={card} index={index}>
                      <div className="text-sm text-purple-300 mb-4">
                        {card.educationType}
                      </div>
                      <div className="text-base font-medium text-white">
                        {card.institution}
                      </div>
                      <div className="text-sm text-gray-300 mb-3">
                        {card.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-400 mb-2">
                        <span className="mr-2">📅</span>
                        <span>
                          {card.from} - {card.to}
                        </span>
                      </div>
                      <div className="px-3 py-1 inline-block bg-purple-600/30 text-purple-200 text-sm rounded-full">
                        {card.grade}
                      </div>
                    </GlowCard>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
