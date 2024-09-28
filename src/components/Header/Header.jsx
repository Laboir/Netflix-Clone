/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import Logo from "../Header/Logo";
import Icons from "./Icons";
import Navbar from "./Navbar";
// import { Navigate } from "react-router-dom";

export default function Header() {
  const navRef = useRef();
  ScrollEvent(navRef);
  return (
    <header
      ref={navRef}
      className="header w-full fixed top-0 z-20 py-11 px-28    "
    >
      <div className="logo-nav-container header-left ">
        <Logo />
        <Navbar />
      </div>

      <div className="header-right">
        <Icons />
      </div>
    </header>
  );
}

function ScrollEvent(refrence) {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        console.log("scroll come");
        refrence.current.classList.add("nav-menu");
      } else {
        refrence.current.classList.remove("nav-menu");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
