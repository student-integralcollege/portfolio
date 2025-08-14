import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="hidden sm:block absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gradient-to-b from-[#8245ec] to-white h-full z-0"></div>

        <div className="flex flex-col gap-20">
          {education.map((edu, idx) => (
            <div
              key={edu.id}
              className={`relative flex flex-col sm:flex-row items-center ${
                idx % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Timeline Circle */}
              <div className="z-10 flex-shrink-0 flex items-center justify-center absolute sm:static left-1/2 sm:left-auto -translate-x-1/2 sm:translate-x-0">
                <div className="bg-white border-4 border-[#8245ec] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-10 h-10 object-contain rounded-full"
                  />
                </div>
              </div>

              {/* Timeline Card */}
              <div
                className={`
                  mt-20 sm:mt-0
                  w-full sm:w-[48%]
                  bg-gray-900 border border-white rounded-2xl shadow-2xl backdrop-blur-md
                  p-6 sm:p-8
                  transition-transform duration-300 hover:scale-105
                  ${idx % 2 === 0 ? "sm:ml-12" : "sm:mr-12"}
                  z-10
                `}
              >
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <h4 className="text-md text-gray-300">{edu.school}</h4>
                <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                <p className="mt-2 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-2 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;