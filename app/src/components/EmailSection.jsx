"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/images/github.svg";
import LinkedinIcon from "../../../public/images/linkedin.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const jsonData = JSON.stringify(data);
    const endpoint = "api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    };

    try {
      const response = await fetch(endpoint, options);
      console.log(response);

      if (response.status === 200) {
        const resData = await response.json();
        console.log(resData);
        console.log("message sent.");
        setEmailSubmitted(true);
      } else {
        console.error("Error sending message:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-2 py-20 gap-4 relative">
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect!</h5>
        <p className="text=[#ADB7BE] mb-4 max-w-md">
          i'm currently looking for new opportunities, my inbox is alwas open.
          Whether you have a question or just want to say hi, T'll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/Lucho8"}>
            <Image src={GithubIcon} alt="GithubIcon" width={40} height={40} />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/luciano-gonzalo-fredes-96b786192/"
            }
          >
            <Image
              src={LinkedinIcon}
              alt="LikedinIcon"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="just saying hi!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-red-700 hover:bg-red-900 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-4">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
