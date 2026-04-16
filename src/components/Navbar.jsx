"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { House, Clock, ChartLine } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="navbar bg-white text-gray-800 shadow-sm px-4">
      <div className="navbar-start">
        <Link href="/" className="ml-5 text-3xl font-bold">
          Keen Keeper
        </Link>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-x-1">
            <li>
              <Link
                href="/"
                className={`link no-underline ${pathname === "/" ? "bg-[#244D3F] text-white" : ""} text-md hover:bg-gray-200`}
              >
                <House />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/timeline"
                className={`link no-underline ${pathname === "/timeline" ? "bg-[#244D3F]  text-white" : ""} text-md hover:bg-gray-200`}
              >
                <Clock />
                Timeline
              </Link>
            </li>
            <li>
              <Link
                href="/stats"
                className={`link no-underline ${pathname === "/stats" ? "bg-[#244D3F] text-white" : ""} text-md hover:bg-gray-200`}
              >
                <ChartLine />
                Stats
              </Link>
            </li>
          </ul>
        </div>

        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-lg bg-white rounded-box w-52 border border-gray-100"
          >
            <li>
              <Link href="/" className={`link no-underline ${pathname === "/" ? "bg-[#244D3F] text-white" : ""} text-md hover:bg-gray-200`}>
                <House />
                Home
              </Link>
            </li>
            <li>
              <Link href="/timeline" className={`link no-underline ${pathname === "/timeline" ? "bg-[#244D3F] text-white" : ""} text-md hover:bg-gray-200`}>
                <Clock />
                Timeline
              </Link>
            </li>
            <li>
              <Link href="/stats" className={`link no-underline ${pathname === "/stats" ? "bg-[#244D3F] text-white" : ""} text-md hover:bg-gray-200`}>
                <ChartLine />
                Stats
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
