import Link from "next/link";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-12 px-4 mt-auto">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          KeenKeeper
        </h1>

        <p className="text-sm md:text-base text-gray-200 mb-8 max-w-2xl mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <div className="mb-8">
          <p className="mb-3 font-medium">Social Links</p>

          <div className="flex justify-center gap-4">
            <a className="btn btn-circle bg-white text-black hover:bg-gray-200 border-none" href="https://www.github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
            <a className="btn btn-circle bg-white text-black hover:bg-gray-200 border-none" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={20} />
            </a>
            <a className="btn btn-circle bg-white text-black hover:bg-gray-200 border-none" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-[#3a6958] my-6"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300 gap-3">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-4">
            <Link href="/" className="hover:underline hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="hover:underline hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/" className="hover:underline hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;