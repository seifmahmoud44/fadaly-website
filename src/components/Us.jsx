import img from "../assets/us.jpeg";
import { useInView } from "react-intersection-observer";
const Us = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  console.log(inView);
  return (
    <div
      id="us"
      ref={ref}
      className={`${
        !inView ? "translate-y-0 opacity-0" : "-translate-y-10 opacity-1"
      } transition-all duration-700 flex justify-center items-center gap-14 px-4 mt-52 max-md:flex-col max-md:mt-20`}
    >
      <div className="flex flex-col justify-center items-start gap-12 w-1/2  max-md:w-full max-md:order-2">
        <h1 className="text-[70px] text-[#204469] max-md:m-auto max-md:text-5xl">
          من نحن
        </h1>
        <p className="max-md:font-normal max-md:text-center max-md:text-sm ">
          من عام 1990 ونحن نقدم الخدمات في مجال المساحة نقدم حلولا لجميع
          الإدارات المحلية والمطارات والهيئة الهندسية للقوات المسلحة ومشاريع
          البنية التحتية وشركات المقاولات والمكاتب الاستشارية الكبرى جميع فرقنا
          مؤهلون على أعلى مستوى لتحمل مسؤولية العمل. على مدار تاريخنا الممتد
          لأكثر من 30 عاما صنعنا نموذجا راقيا من العمل الدقيق المحترف ، وحرصنا
          على خدمة ودعم عملائنا على المستوى الداخلي نقدم لفريقنا كل الدعم
          للتطوير والاستمرارية وتقديم أفضل الحلول لعملائنا بأفضل جودة
        </p>
      </div>
      <div className="w-1/2 rounded-[28px] overflow-hidden max-md:w-full">
        <img src={img} alt="" className="object-cover w-full" />
      </div>
    </div>
  );
};

export default Us;
