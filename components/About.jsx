import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import AboutImg from '../public/assets/AboutImage.jpg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="flex items-center justify-center uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="flex items-center justify-center py-4">Who I am</h2>
          <p className=" py-2 text-gray-600">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I’m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. Though I am most proficient
            in building front-end applications using HTML, CSS, Javascript, and
            React, I am a quick learner and can pick up new tech stacks as
            needed. I believe that being a great developer is not using one
            specific language, but choosing the best tool for the job.
          </p>

          <p className=" py-2 text-gray-600">
            I have started my career into Tech industry to keep pace with the
            current world and dive deep into this endless learning. My intro to
            Tech was through a Bootcamp and eventually I found myself very much
            interested in programing and learning new skill sets. I believe
            learning Web Developing would be my first step to set my career into
            Tech Industry. I bulit some projects using modern front end tools,
            maintained servers using backend tools and connected with databases.
          </p>
          <Link href="/#projects">
            <p className="w-full text-center py-2 text-gray-600 underline cursor-pointer">
              Check out some of my recent projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
