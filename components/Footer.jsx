import React from "react";

const Footer = () => {
  return (
    <footer className="bg-ivory2">
        <div className=" grid gap-5 grid-cols-1 md:grid-cols-2 text-black py-10 px-5">
        <div className="space-y-5">
        <h1 className="text-3xl font-black uppercase  text-center md:text-left">Duke concept</h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className=" text-center md:text-left">
            <p>124 Birch Road Staten Island, NY, 10303 United States</p>
            <p>info@dukeconcept.com</p>
          </div>
          <div className="space-y-5">
            <p>About</p>
            <ul>
                <li>Our Vision</li>
                <li>Advertise</li>
                <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center space-y-6">
        <h2 className="text-3xl font-black uppercase">JOIN THE DUKE CONCEPT FAMILY</h2>
        <p className="w-[80%] mx-auto">Sign up for updates and the latest events, information and offers</p>
        <button className="bg-black text-ivory2 px-9 py-4 text-lg">Subscribe</button>
      </div>

        </div>
    <small className="text-center text-black block">copyright duke 2025</small>
    </footer>
  );
};

export default Footer;
