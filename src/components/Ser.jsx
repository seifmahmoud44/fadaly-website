import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ser1 from "../assets/scan.jpg";
import ser2 from "../assets/ser2.jpeg";
import ser3 from "../assets/ser3.jpeg";
import ser4 from "../assets/ser4.jpg";
import ser5 from "../assets/ser5.png";
import ser6 from "../assets/ser6.jpg";

import { Autoplay } from "swiper/modules";

const Ser = () => {
  return (
    <div className="h-[70vh] px-4 " id="ser">
      <h1 className="text-6xl my-5 font-black text-center text-[#204469] max-md:text-5xl">
        خدماتنا
      </h1>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper w-full"
      >
        <SwiperSlide className="rounded-3xl overflow-hidden">
          <div className="w-full m-auto space-y-5">
            <div className=" rounded-3xl overflow-hidden h-64 w-80">
              <img src={ser1} alt="" className=" object-cover h-full  w-full" />
            </div>

            <p className="text-xl font-normal text-[#204469] text-center">
              المسح الطوبوغرافي
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl overflow-hidden">
          <div className="w-full m-auto space-y-5">
            <div className=" rounded-3xl overflow-hidden h-64 w-80">
              <img src={ser2} alt="" className=" object-cover h-full  w-full" />
            </div>

            <p className="text-xl font-normal text-[#204469] text-center">
              رفع وتقسيم الاراضي والحيازات
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl overflow-hidden">
          <div className="w-full m-auto space-y-5">
            <div className=" rounded-3xl overflow-hidden h-64 w-80">
              <img src={ser3} alt="" className=" object-cover h-full  w-full" />
            </div>

            <p className="text-xl font-normal text-[#204469] text-center">
              الاشراف المساحي على المشاريع
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl overflow-hidden">
          <div className="w-full m-auto space-y-5">
            <div className=" rounded-3xl overflow-hidden h-64 w-80">
              <img src={ser4} alt="" className=" object-cover h-full  w-full" />
            </div>

            <p className="text-xl font-normal text-[#204469] text-center">
              التصوير الجوي والمسح بالدرون
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl overflow-hidden">
          <div className="w-full m-auto space-y-5">
            <div className=" rounded-3xl overflow-hidden h-64 w-80">
              <img src={ser5} alt="" className=" object-cover h-full  w-full" />
            </div>

            <p className="text-xl font-normal text-[#204469] text-center">
              المسح ثلاثي الابعاد (3D Scanner)
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl overflow-hidden">
          <div className="w-full m-auto space-y-5">
            <div className=" rounded-3xl overflow-hidden h-64 w-80">
              <img src={ser6} alt="" className=" object-cover h-full  w-full" />
            </div>

            <p className="text-xl font-normal text-[#204469] text-center">
              نمذجة معلمومات البناء (Scan To Bim)
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Ser;
