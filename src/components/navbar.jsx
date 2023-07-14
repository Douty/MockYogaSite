import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  if (toggle) {
    console.log("active");
  }
  return (
    <nav className=" flex justify-between items-center px-8 md:px-52 ">
      <h1 className="text-subtext font-poppins font-medium text-[48px] tracking-wide ">
        Yogafit
      </h1>
      <ul className="text-white list-none text-md gap-5 md:flex hidden justify-end items-center flex-1 ">
        <li>
          <a
            className="transition ease-in-out delay-150 hover:text-secondary"
            href=""
          >
            Home
          </a>
        </li>
        <li>
          <a
            className="transition ease-in-out delay-150 hover:text-secondary"
            href=""
          >
            Classes
          </a>
        </li>
        <li>
          <a
            className="transition ease-in-out delay-150 hover:text-secondary"
            href=""
          >
            Testimonials
          </a>
        </li>
        <li>
          <a
            className="transition ease-in-out delay-150 hover:text-secondary"
            href=""
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="cursor-pointer md:hidden">
        <svg
          fill="#FFFFFF"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
          onClick={() => {
            toggle ? setToggle(false) : setToggle(true);
          }}
        >
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
        </svg>
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-primary absolute top-20 right-0  my-4 w-full rounded-xl justify-center text-center`}
      >
        <ul className="  text-white list-none text-md gap-5 md:hidden">
          <li className="p-6">
            <a
              className="transition ease-in-out delay-150 hover:text-secondary"
              href=""
            >
              Home
            </a>
          </li>
          <li className="p-6">
            <a
              className="transition ease-in-out delay-150 hover:text-secondary"
              href=""
            >
              Classes
            </a>
          </li>
          <li className="p-6">
            <a
              className="transition ease-in-out delay-150 hover:text-secondary"
              href=""
            >
              Testimonials
            </a>
          </li>
          <li className="p-6">
            <a
              className="transition ease-in-out delay-150 hover:text-secondary"
              href=""
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
