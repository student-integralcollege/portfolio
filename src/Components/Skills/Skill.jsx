import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-6 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>
          {/* Skill Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
            {category.skills.map((skill) => (
              <Tilt
                key={skill.name}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={800}
                scale={1.07}
                transitionSpeed={700}
                gyroscope={true}
                className="w-full"
              >
                <div
                  className="flex flex-col items-center justify-center bg-[#18132a] border-2 border-gray-700 rounded-3xl py-4 px-2 transition-all duration-300 hover:border-[#8245ec] hover:bg-[#24144a] shadow"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 font-semibold">
                    {skill.name}
                  </span>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;