import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white" >
      <div className="container p-8 flex justify-between">
      <Image src={"/images/ReDevLogo.png"} width={100} height={200} alt="ReDevLogo"/>
        <p className="text-slate-600 ">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
