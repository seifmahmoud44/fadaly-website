import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import map1 from "../assets/map1.png";
import map2 from "../assets/map2.jpg";
import map3 from "../assets/map3.jpg";
import map4 from "../assets/map4.jpg";
import map5 from "../assets/map5.jpg";

import { Autoplay } from "swiper/modules";

const Projects = () => {
  return (
    <div className="h-[70vh] px-4 mt-24 max-md:mt-16 " id="work">
      <h1 className="text-6xl my-5 font-black text-center text-[#204469] max-md:text-5xl">
        سابقة اعمالنا
      </h1>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
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
              <img src={map1} alt="" className=" object-cover h-full  w-full" />
            </div>

            <p className="text-xl font-normal text-[#204469] text-center">
              عملية الرفع المساحي لثلاث قرى بغرب النوبارية
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl overflow-hidden">
          <div className="w-full m-auto space-y-5">
            <div className=" rounded-3xl overflow-hidden h-64 w-80">
              <img src={map2} alt="" className=" object-cover h-full  w-full" />
            </div>

            <p className="text-xl font-normal text-[#204469] text-center">
              تنفيذ خرائط تفصيلية على محطات ترام الرمل عام 2001
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl overflow-hidden">
          <div className="w-full m-auto space-y-5">
            <div className=" rounded-3xl overflow-hidden h-64 w-80">
              <img src={map3} alt="" className=" object-cover h-full  w-full" />
            </div>

            <p className="text-xl font-normal text-[#204469] text-center">
              تنفيذ خرائط شاملة للاسكندرية بمبادين ومداخل الاسكندرية عام 2002
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl overflow-hidden">
          <div className="w-full m-auto space-y-5">
            <div className=" rounded-3xl overflow-hidden h-64 w-80">
              <img src={map4} alt="" className=" object-cover h-full  w-full" />
            </div>

            <p className="text-xl font-normal text-[#204469] text-center">
              قمنا باعمال مساحيى لتوقيع وتسليم فيلات داخل مشروع اعمار لحساب شرمة
              باور عام 2009
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-3xl overflow-hidden">
          <div className="w-full m-auto space-y-5">
            <div className=" rounded-3xl overflow-hidden h-64 w-80">
              <img src={map5} alt="" className=" object-cover h-full  w-full" />
            </div>

            <p className="text-xl font-normal text-[#204469] text-center">
              تم تنفيذ نقاط GPS لمسافة 50 كيلومتر للطريق الجديد لمدينة العلمين
              الجديدة لصالج شركة المقاولين العرب
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
