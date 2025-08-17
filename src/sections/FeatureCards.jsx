import React from "react";
import { abilities } from "../constants/constants";

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc, urls }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center">
              <img src={imgPath} alt={title} />
            </div>

            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>

            {/* Links section */}
            {urls && urls.length > 0 && (
              <div className="flex gap-3 flex-wrap mt-2">
                {urls.map((urlObj, idx) => (
                  <a
                    key={idx}
                    href={urlObj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 rounded-md bg-gray-800 text-white text-sm font-medium shadow hover:bg-gray-700 transition duration-200"
                  >
                    {urlObj.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
