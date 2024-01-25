import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectItem = ({ title, backgroundImage, projectURL }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImage}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center pb-3">
          {title}
        </h3>
        {/* <p className="pb-4 pt-2 text-white text-center">React.js</p> */}
        <a href={projectURL} target="_blank">
          <p className="text-center py-3 px-2 rounded-md bg-white text-gray-700 text-md cursor-pointer">
            Demo
          </p>
        </a>
        {/* <Link href={projectURL}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 text-lg font-bold cursor-pointer">
            More Info
          </p>
        </Link> */}

        {/* <Link href={projectURL}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 text-lg font-bold cursor-pointer">
            More Info
          </p>
        </Link> */}
      </div>
    </div>
  );
};

export default ProjectItem;
