// import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Unauthorized() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden z-1">
      <div className="mx-auto w-full max-w-[242px] text-center sm:max-w-[472px]">
        <h1 className="mb-4 font-bold text-zinc-800 font-poppins text-2xl">
          ERROR
        </h1>
        <h1 className="mb-4 font-bold font-poppins text-orange-400 text-8xl dark:text-brand-500/90 xl:text-9xl">
          401
        </h1>

        {/* <Image
          src="/images/error/404.svg"
          alt="404"
          className="dark:hidden"
          width={472}
          height={152}
        />
        <Image
          src="/images/error/404-dark.svg"
          alt="404"
          className="hidden dark:block"
          width={472}
          height={152}
        /> */}

        <p className="mt-5 mb-6 text-xl text-zinc-800 font-poppins">
          You dont have permission to access this page!
        </p>

        <Link
          href="/login"
          role="button"
          className="inline-flex items-center justify-center rounded-lg 
          btn bg-orange-400 border-0 hover:bg-orange-300"
        >
          Sign In
        </Link>
      </div>
      {/* <!-- Footer --> */}
      <p className="absolute text-sm text-center text-gray-800 -translate-x-1/2 bottom-6 left-1/2 dark:text-gray-400">
        {/* &copy; {new Date().getFullYear()} - Sensync ID */}
      </p>
    </div>
  );
}
