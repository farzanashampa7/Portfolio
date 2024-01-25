import React from 'react';
// import { FaArrowDown } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="uppercase text-md tracking-widest text-gray-600">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hey, I'm <span className="text-[#5651e5]">Farzana</span>
          </h1>
          <h1 className="py-2 text-gray-700">I'm a Front End Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>
          <div className="py-4">
            <a
              className="rounded-full py-2 px-4 shadow-md shadow-gray-400 bg-[#5651e5] text-white"
              href="/Farzana-Akter-Shampa-Resume.pdf"
              download="Farzana-Akter-Shampa-Resume"
            >
              Download my resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
