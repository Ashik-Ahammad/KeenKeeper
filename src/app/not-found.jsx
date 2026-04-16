import { UndoDot } from "lucide-react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <p className="my-5 text-3xl">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
      >
        <span className="flex items-center gap-x-2">
          <UndoDot />
          Go Back Home
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
