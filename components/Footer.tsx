import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="footer bg-gradient-to-br from-[#191919] to-stone-800 text-white mt-10 w-full text-neutral-content p-10 flex items-center justify-between">
      <aside>
        <div className="text-center lg:text-left">
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="EACC.dev logo"
            className="rounded-xl mx-auto lg:mx-0"
          />
          <p className="mt-5 font-light">
            transforms vast video libraries into <br /> instantly searchable,
            actionable insights
            <br /> —no manual tagging required.
          </p>
          <div className="flex justify-center lg:justify-start mt-5 space-x-2">
            <Link href="https://www.linkedin.com/in/anujbhuyar/">
              <div className="p-2 bg-dark-grey-bg rounded-lg">
                <Image
                  src="/linkedin.svg"
                  width={25}
                  height={25}
                  alt="LinkedIn"
                />
              </div>
            </Link>
            <Link href="https://x.com/anujsbhuyar">
              <div className="p-2 bg-dark-grey-bg rounded-lg">
                <Image src="/x.svg" width={25} height={25} alt="X" />
              </div>
            </Link>
            {/* <Link href="#">
              <div className="p-2 bg-dark-grey-bg rounded-lg">
                <Image
                  src="/insta.svg"
                  width={25}
                  height={25}
                  alt="Instagram"
                />
              </div>
            </Link> */}
          </div>
        </div>
      </aside>
      <div className="flex flex-col  justify-start items-start">
        <a href="#">
          <Button variant="link" className="text-light-grey">
            Home
          </Button>
        </a>
        <a href="/#video">
          <Button variant="link" className="text-dark-grey">
            About
          </Button>
        </a>
        <a href="#features">
          <Button variant="link" className="text-dark-grey">
            Features
          </Button>
        </a>
        <a href="#Testimonials">
          <Button variant="link" className="text-dark-grey">
            Testimonials
          </Button>
        </a>
        <a href="#Contact">
          <Button variant="link" className="text-dark-grey">
            Contact
          </Button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
