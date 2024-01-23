import React from 'react';

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center">
      <div className="max-w-[1240px] m-auto">
        <div>
          <p className="flex items-center justify-center uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="flex items-center justify-center py-4">Who I am</h2>
          <p className="w-[75%] text-center m-auto py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>
          <p className="w-full text-center py-2 text-gray-600 underline cursor-pointer">
            Check out some of my recent projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
