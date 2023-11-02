import React from "react";
import Line from "../assets/line.svg";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "../hooks/useCountdown";

const ExpiredNotice = () => {
  return (
    <div className="text-center gap-7">
      <span className="text-center text-black md:text-[44px] text-2xl font-bold mt-7 leading-[50px]uppercase">
        Selamat Menyoblos!!!
      </span>
      <p className=" text-black text-center text-lg font-normal leading-[30px] my-5">
        Setiap suara memiliki kekuatan untuk membentuk masa depan yang lebih
        baik. Suara Anda adalah bagian penting dari proses demokrasi dan dapat
        membawa perubahan positif.
      </p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="flex items-center text-center gap-x-5 md:gap-x-16">
      <DateTimeDisplay value={days} type={"Hari"} isDanger={false} />
      <img className="h-20 md:h-full" src={Line} />
      <DateTimeDisplay value={hours} type={"Jam"} isDanger={false} />
      <img className="h-20 md:h-full" src={Line} />
      <DateTimeDisplay value={minutes} type={"Menit"} isDanger={false} />
      <img className="h-20 md:h-full" src={Line} />
      <DateTimeDisplay
        value={seconds}
        type={"Detik"}
        isDanger={seconds <= 60}
      />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
