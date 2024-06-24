import logo from "../assets/logo.png";
import call from "../assets/phone.png";
import email from "../assets/email.png";
import menu from "../assets/burger.png";
import close from "../assets/close.png";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 border-b">
      <div className="nav h-20 bg-white flex justify-between items-center px-5 relative">
        <img className="w-20" src={logo} alt="" />
        <div className="links flex flex-grow  justify-center items-center gap-5 max-md:hidden">
          <a
            href="#us"
            className=" font-medium text-base hover:text-[#F2A900] transition-all cursor-pointer"
          >
            من نحن
          </a>
          <a
            href="#ser"
            className="font-medium text-base hover:text-[#F2A900] transition-all cursor-pointer"
          >
            خدماتنا
          </a>
          <a
            href="#work"
            className="font-medium text-base hover:text-[#F2A900] transition-all cursor-pointer"
          >
            سابقة اعمالنا
          </a>
        </div>
        <div className="flex justify-center items-center gap-5 max-md:hidden">
          <a
            href="tel:01000094373 "
            className="hover:-translate-y-1 transition-all"
          >
            <img className="w-7 " src={call} alt="" />
          </a>
          <a
            href="mailto:info@fadalyoffice.com "
            className="hover:-translate-y-1 transition-all"
          >
            <img className="w-7 " src={email} alt="" />
          </a>
        </div>
        {open ? (
          <img
            className="w-5 cursor-pointer hidden max-md:block"
            src={close}
            alt=""
            onClick={() => setOpen(!open)}
          />
        ) : (
          <img
            className="w-7 cursor-pointer hidden max-md:block"
            src={menu}
            alt=""
            onClick={() => setOpen(!open)}
          />
        )}

        <div
          className={`${
            open ? "scale-y-1" : "scale-y-0"
          } origin-top absolute top-full left-0 w-full max-md:block hidden divide-y bg-[#F2F2F2] transition-all `}
        >
          <a
            href="#us"
            className=" hover:bg-[#204469]  px-7 py-5 font-medium text-base hover:text-[#F2A900] transition-all cursor-pointer"
          >
            من نحن
          </a>
          <a
            href="#ser"
            className="hover:bg-[#204469]  px-7 py-5 font-medium text-base hover:text-[#F2A900] transition-all cursor-pointer"
          >
            خدماتنا
          </a>
          <a
            href="#work"
            className="hover:bg-[#204469]  px-7 py-5 font-medium text-base hover:text-[#F2A900] transition-all cursor-pointer"
          >
            سابقة اعمالنا
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
