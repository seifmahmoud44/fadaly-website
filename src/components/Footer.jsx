import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="">
      <div className="flex gap-8 py-3 px-11 bg-[#C5D1D9]">
        <div className="w-1/3">
          <img src={logo} alt="" className="w-28" />
        </div>
        <div className="flex flex-col gap-3">
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
      </div>

      <div className="py-3 bg-white text-center">
        <p>جميع الحقوق محفوظة لشركة فضالي 2024</p>
      </div>
    </div>
  );
};

export default Footer;
