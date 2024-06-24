import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";

import { Autoplay, Pagination } from "swiper/modules";
const Hero = () => {
  return (
    <div className="h-[70vh] px-4 ">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="rounded-3xl overflow-hidden">
          <img
            src={hero1}
            alt=""
            className="img absolute left-0 top-0 -z-20 scale-1 transition-all duration-[10s]"
          />
          <div className="absolute w-full h-full bg-[#0f283f] opacity-55 left-0 top-0 -z-10 " />
          <div className=" content max-w-[700px] mr-40 flex flex-col gap-8 translate-y-64 opacity-0 transition-all delay-700 duration-[1s] max-md:mr-0 p-3">
            <h1 className="text-6xl font-black text-[#F2BE7E] max-md:text-5xl ">
              من نحن
            </h1>
            <p className="text-lg font-normal text-white max-md:text-base">
              تأسست شركة فضالى منذ عام 1990 ونحن نقدم الخدمات في مجال المساحة
              ونقدم حلولا لجميع الادارات المحلية والمطارات والهيئة الهندسة
              للقوات المسلحة ومشاريع البنيت التحتية
            </p>
            <a
              className="w-fit text-[#F2BE7E] text-base max-md:text-sm font-medium px-6 py-3 rounded-full border-2 border-[#F2BE7E]"
              href="#us"
            >
              تعرف على المزيد
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl overflow-hidden">
          <img
            src={hero2}
            alt=""
            className="img absolute left-0 top-0 -z-20 scale-1 transition-all duration-[10s]"
          />
          <div className="absolute w-full h-full bg-[#0f283f] opacity-55 left-0 top-0 -z-10 " />
          <div className=" content max-w-[700px] mr-40 flex flex-col gap-8 translate-y-64 opacity-0 transition-all delay-700 duration-[1s] max-md:mr-0 p-3">
            <h1 className="text-6xl font-black text-[#F2BE7E] max-md:text-5xl ">
              خدماتنا
            </h1>
            <p className="text-lg font-normal text-white max-md:text-base">
              نقوم بتوفير الكوادر البشرية المدربة والمعدات و الاجهزة الحديثة
              لتقديم خدماتنا في المشاريع القومية الكبرى لضمان جودة العمل
            </p>
            <a
              className="w-fit text-[#F2BE7E] text-base max-md:text-sm font-medium px-6 py-3 rounded-full border-2 border-[#F2BE7E]"
              href="#ser"
            >
              تعرف على المزيد
            </a>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide className="rounded-3xl overflow-hidden">
          <img
            src={hero3}
            alt=""
            className="img absolute left-0 top-0 -z-20 scale-1 transition-all duration-[10s]"
          />
          <div className="absolute w-full h-full bg-[#0f283f] opacity-55 left-0 top-0 -z-10 " />
          <div className=" content max-w-[700px] mr-40 flex flex-col gap-8 translate-y-64 opacity-0 transition-all delay-700 duration-[1s]">
            <h1 className="text-6xl font-black text-[#F2BE7E]">سابقة اعمالنا</h1>
            <p className="text-lg font-normal text-white ">

            </p>
            <a
              className="w-fit text-[#F2BE7E] text-base font-medium px-6 py-3 rounded-full border-2 border-[#F2BE7E]"
              href=""
            >
              تعرف على المزيد
            </a>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Hero;
