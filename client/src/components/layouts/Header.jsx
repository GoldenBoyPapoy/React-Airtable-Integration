import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="bg-primary">
      <nav
        className="flex max-w-8xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/dashboard" className="flex -m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=white"
              alt="logo"
            />
            <span className="m-1 font-bold text-white">Owesome</span>
          </Link>
        </div>
        <div className="flex sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            {/* <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" /> */}
          </button>
        </div>
        <Popover.Group className="hidden sm:flex sm:gap-x-12">
          <Link to="/dashboard" className={"text-sm leading-6 text-white"}>
            Dashboard
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-white"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold leading-6 text-white"
          >
            Contact us
          </Link>
        </Popover.Group>
      </nav>
    </header>
  );
};

export default Header;
