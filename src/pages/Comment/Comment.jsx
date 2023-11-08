import React, { useRef, useState } from "react";
import Img from "../../assets/image/bgComment.png";
import Send from "../../assets/image/Send.png";
import Input from "../../components/InputField";
import Swal from "sweetalert2";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://jrxpajnnlgnqvectaxzy.supabase.co/",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpyeHBham5ubGducXZlY3RheHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4OTI4NDgsImV4cCI6MjAxNDQ2ODg0OH0.k8K2JU0xq4sLElnnrCS7vVP6TNgFG1o2PhljGZNOCcM"
);

export default function Comment() {
  const [isSent, setIsSent] = useState(false);

  const commentBg = {
    backgroundImage: `url(${Img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  async function insertData(name, email, message) {
    const { error } = await supabase
      .from("entries")
      .insert({ nama: name, email: email, message: message });
    console.log(error);
  }

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;
    const messageValue = messageRef.current.value;
    insertData(nameValue, emailValue, messageValue);
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    setIsSent(true);
    Swal.fire({
      title: "Terima kasih!",
      text: "Pesan dukunganmu telah terkirim.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <div className="bg-no-repeat md:mt-20" style={commentBg}>
      <div className="pt-10 pb-10 bg-white bg-opacity-60 md:py-20">
        <div className="flex justify-center">
          <h1 className="md:p-2.5 p-1.5 bg-[#ED1B24] text-white md:text-4xl text-2xl font-extrabold inline-block">
            RUANG DUKUNGAN
          </h1>
        </div>
        <p className="text-center text-black md:text-[44px] text-2xl font-bold mt-7 leading-[50px]">
          Tinggalkan Pesan Terbaikmu !
        </p>
        <form name="contact" id="contact-form" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row justify-center mt-[58px]">
            <div className="w-full px-4 md:w-[560px]">
              <Input reference={nameRef} required placeholder="Nama" />
              <Input
                type="email"
                reference={emailRef}
                required
                placeholder="Email"
              />
            </div>
            <div className="w-full md:w-[560px] h-[155px] px-4">
              <div className="bg-white h-full rounded-[24px] shadow-md px-4 py-6 mb-4">
                <textarea
                  ref={messageRef}
                  required
                  className="w-full h-full text-gray-700 bg-transparent border-none outline-none placeholder-gray-400 resize-none"
                  placeholder="Tuliskan pesan dukunganmu disini..."
                ></textarea>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-[#676363] text-center mt-4 md:text-left">
              *Keamanan data Anda terjamin. Kami tidak akan memberikan data Anda
              ke pihak manapun
            </p>
            <div className="mt-[61px]">
              <button
                type="submit"
                className="flex w-[275px] justify-center gap-2 items-center py-2.5 bg-[#ED1B24] text-white text-center rounded-full"
              >
                Kirim
                <img className="h-4" src={Send} alt="Icon Send" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
