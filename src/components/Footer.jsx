'use client'
import { useEffect } from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <footer className="bg-[#244D3F] text-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">

        <h1 data-aos="fade-left" className="text-3xl md:text-5xl font-bold mb-4">
          KeenKeeper
        </h1>

        <p data-aos="fade-right" className="text-sm md:text-base text-gray-200 mb-8 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="mb-8">
          <p className="mb-3 font-medium">Social Links</p>

          <div className="flex justify-center gap-4" data-aos="zoom-in">
            <a className="btn btn-circle bg-white text-black hover:bg-gray-400" href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a className="btn btn-circle bg-white text-black hover:bg-gray-400" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a className="btn btn-circle bg-white text-black hover:bg-gray-400 " href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-500 my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-3">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="/" className="hover:underline">Privacy Policy</Link>
            <Link href="/" className="hover:underline">Terms of Service</Link>
            <Link href="/" className="hover:underline">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;