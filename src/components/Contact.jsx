import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const sendHandler = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      subject,
      message,
    };

    try {
      axios.post("").then((res) => {
        console.log(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" mt-28 max-md:px-6">
      <h1 className="text-6xl my-5 font-black text-center text-[#204469] max-md:text-5xl">
        هل لديك اي استفسار؟
      </h1>
      <div className="flex justify-between items-center max-md:flex-col">
        <div className="w-1/2 max-md:w-full  h-full m-10 rounded-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412.7817704983654!2d29.9026145!3d31.1990637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c3ed12c47e1f%3A0xdb9fb48f937e6fd7!2zNDkg2LTYp9ix2Lkg2LXZgdmK2Kkg2LLYutmE2YjZhCwgQWwgTWVzYWxsYWggU2hhcnEsIEFsIEF0dGFyaW4sIEFsZXhhbmRyaWEgR292ZXJub3JhdGUgNTM3MjA2MA!5e0!3m2!1sen!2seg!4v1719291559486!5m2!1sen!2seg"
            allowFullScreen=""
            loading="lazy"
            className="w-full h-96"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form
          onSubmit={sendHandler}
          className="w-1/2 max-md:w-full flex flex-col justify-center items-center gap-5 p-10 bg-white shadow rounded-3xl m-10"
          action=""
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="text-sm w-full border-b py-3 px-6"
            placeholder="الاسم"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="text-sm w-full border-b py-3 px-6"
            placeholder="الايميل"
          />
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            type="text"
            className="text-sm w-full border-b py-3 px-6"
            placeholder="الموضوع"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name=""
            rows={4}
            id=""
            className="text-sm w-full border-b py-3 px-6"
            placeholder="الرسالة"
          ></textarea>
          <button
            className="mt-5 py-4 text-white bg-[#204469] rounded-full w-full text-center"
            type="submit"
          >
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
