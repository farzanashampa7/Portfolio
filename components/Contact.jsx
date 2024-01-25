import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Link from 'next/link';

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      phoneNumber: e.target.phone.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    console.log(data);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('messaged succefully');
    } else {
      console.log('messaged not sent ');
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="flex items-center justify-center text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="pt-4 flex items-center justify-center">Get In Touch</h2>
        {/* <div className="grid lg:grid-cols-5 gap-8"> */}
        <div>
          {/* Left */}
          {/* <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4"> */}
          <div className=" w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              {/* <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/contact.jpg"
                  alt="/"
                />
              </div> */}
              <div>
                {/* <h2 className="py-2">Farzana Akter Shampa</h2>
                <p>Front End Developer</p> */}
                <p className="text-center">
                  I am open to full-time or contract positions. Let's discuss
                  more.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 pb-4 text-[#5651e5] text-center ">
                  Connect with me
                </p>
                <div className="flex w-[40%] m-auto gap-4 items-center justify-center py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/farzana-akter-shampa/"
                      target="_blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="https://github.com/farzanashampa7" target="_blank">
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <a href="mailto:farzanashampa7@gmail.com">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          {/* <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300 flex"
                      type="text"
                      id="name"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-300 flex"
                      type="text"
                      id="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300 flex"
                    type="email"
                    id="email"
                    required
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 border-gray-300 flex"
                    type="text"
                    id="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div> */}
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
