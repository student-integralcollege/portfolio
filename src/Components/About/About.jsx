import React from 'react';
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-2 leading-tight tracking-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-4 leading-tight tracking-tight">
            Syed Mohd Adeeb Hussain
          </h2>
          {/* Skills Heading with Typing Effect */}
          <div className="flex justify-center md:justify-start items-center mb-6">
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mr-2">
              I am a
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#8245ec]">
              <Typewriter
                options={{
                  strings: [
                    'MERN Stack Developer',
                    'Frontend Developer',
                    'Backend Developer',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </div>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a MERN-Stack developer with experience in
            building scalable web applications. Skilled in both front-end and
            back-end development, I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.
          </p>
          {/* Resume Button */}
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 8px #8245ec, 0 0 24px #a855f7',
            }}
            aria-label="Download CV"
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem] border-4 border-purple-700 rounded-full shadow-xl bg-gradient-to-br from-[#8245ec33] to-[#a855f733] flex items-center justify-center"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
             <img
              src={profileImage}
              alt="Syed Mohd Adeeb Hussain"
              className="w-full h-full rounded-full object-cover"
            /> 
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;