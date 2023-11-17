import React from "react";
import img1 from "../assets/image/galeri/1.png";
import img2 from "../assets/image/galeri/2.png";
import img3 from "../assets/image/galeri/3.png";
import img4 from "../assets/image/galeri/4.png";
import img5 from "../assets/image/galeri/5.png";
import img6 from "../assets/image/galeri/6.png";

export default function GalleryCard() {
  return (
    <div className="mx-auto grid md:grid-cols-9 grid-cols-1 justify-center items-center md:gap-1 md:my-20 gap-4">
      <div className="col-span-3 flex-col mx-auto justify-center items-center md:gap-4 gap-4 flex">
        <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[388.19px] justify-center items-center inline-flex">
          <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[388.19px] relative">
            <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[388.19px] left-0 top-0 absolute bg-slate-50 rounded-[20.91px]" />
            <img
              className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[388.19px] left-0 top-0 absolute rounded-[20.91px]"
              src={img1}
            />
            <div className="w-[222.48px] h-[62.73px] left-[51.02px] top-[229.01px] md:w-[266px] md:h-[75px] md:left-[61px] md:top-[273.81px] absolute flex-col justify-start items-start gap-[5.85px] md:gap-[7px] inline-flex">
              <div className="self-stretch grow shrink basis-0 text-center text-slate-100 text-xl leading-7 md:text-2xl font-bold md:leading-[34px]">
                Akrab Warga
              </div>
              <div className="self-stretch grow shrink basis-0 text-center text-slate-200 text-[15.06px] font-normal leading-[15.06px] md:text-lg md:leading-[18px]">
                6 Oktober 2021
              </div>
            </div>
          </div>
        </div>
        <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[388.19px] justify-center items-center inline-flex">
          <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[388.19px] relative">
            <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[388.19px] left-0 top-0 absolute bg-slate-50 rounded-[20.91px] md:rounded-[25px]" />
            <img
              className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[388.19px] left-0 top-0 absolute rounded-[20.91px] md:rounded-[25px]"
              src={img4}
            />
            <div className="w-[222.48px] h-[62.73px] left-[51.02px] top-[229.01px] md:w-[266px] md:h-[75px] md:left-[61px] md:top-[273.81px] absolute flex-col justify-start items-start gap-[5.85px] md:gap-[7px] inline-flex">
              <div className="self-stretch grow shrink basis-0 text-center text-slate-100 text-xl leading-7 md:text-2xl font-bold md:leading-[34px]">
                Dialog Bersama
              </div>
              <div className="self-stretch grow shrink basis-0 text-center text-slate-200 text-[15.06px] font-normal leading-[15.06px] md:text-lg md:leading-[18px]">
                30 Desember 2022
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex-col mx-auto justify-center items-center md:gap-4 gap-4 flex">
        <div className="w-[324.68px] h-[324.68px] md:w-[388px] md:h-[275.11px] justify-center items-center inline-flex">
          <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[275.11px] relative">
            <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[275.11px] left-0 top-0 absolute bg-slate-50 rounded-[20.91px] md:rounded-[25px]" />
            <img
              className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[274.97px] left-0 top-0 absolute rounded-[20.91px] md:rounded-[25px]"
              src={img2}
            />
            <div className="w-[222.48px] h-[62.73px] left-[51.02px] top-[229.01px] md:w-[180px] md:h-[71px] md:left-[104px] md:top-[162px] absolute flex-col justify-start items-start md:gap-[7px] gap-[5.85px] inline-flex">
              <div className="self-stretch text-center text-slate-100 md:text-2xl font-bold md:leading-[34px] text-xl leading-7">
                Komitmen Terwujud
              </div>
              <div className="self-stretch text-center text-slate-200 md:text-lg font-normal text-[15.06px] md:leading-[30px] leading-[15.06px]">
                6 Juli 2023
              </div>
            </div>
          </div>
        </div>
        <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[501.27px] mb:pb-[0.27px] flex-col justify-center items-center inline-flex">
          <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[501px] relative">
            <img
              className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[501px] left-0 top-0 absolute md:rounded-[25px] rounded-[20.91px]"
              src={img5}
            />
            <div className="w-[222.48px] h-[62.73px] md:w-[266px] md:h-[75px] md:left-[61px] md:top-[385px] absolute flex-col md:justify-start md:items-start md:gap-[7px] inline-flex justify-center items-center left-[51.02px] gap-[5.85px] top-[229.01px]">
              <div className="self-stretch grow shrink basis-0 text-center text-slate-100 md:text-2xl font-bold md:leading-[34px] text-xl leading-7">
                Masyarakat Bersatu
              </div>
              <div className="self-stretch grow shrink basis-0 text-center text-slate-200 md:text-lg font-normal md:leading-[18px] leading-[15.06px] text-[15.06px]">
                7 September 2023
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex-col mx-auto justify-center items-center md:gap-4 gap-4 flex">
        <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[501.27px] md:mb:pb-[0.27px] flex-col justify-center items-center inline-flex">
          <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[501px] relative">
            <img
              className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[501px] left-0 top-0 absolute rounded-[20.91px] md:rounded-[25px]"
              src={img3}
            />
            <div className="w-[222.48px] h-[62.73px] md:w-[266px] md:h-[75px] md:left-[61px] md:top-[385px] absolute flex-col md:justify-start md:items-start md:gap-[7px] inline-flex justify-center items-center left-[51.02px] gap-[5.85px] top-[229.01px]">
              <div className="self-stretch grow shrink basis-0 text-center text-slate-100 md:text-2xl font-bold md:leading-[34px] text-xl leading-7">
                Merangkul Perbedaan
              </div>
              <div className="self-stretch grow shrink basis-0 text-center text-slate-200 md:text-lg font-normal md:leading-[18px] leading-[15.06px] text-[15.06px]">
                7 September 2023
              </div>
            </div>
          </div>
        </div>
        <div className="w-[324.68px] h-[324.68px] md:w-[388px] md:h-[275.11px] justify-center items-center inline-flex">
          <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[275.11px] relative">
            <div className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[275.11px] left-0 top-0 absolute" />
            <img
              className="w-[324.68px] h-[324.68px] md:w-[388.19px] md:h-[274.97px] left-0 top-0 absolute rounded-[25px]"
              src={img6}
            />
            <div className="w-[222.48px] h-[62.73px] left-[51.02px] top-[229.01px] md:w-[149px] md:h-[71px] md:left-[119.50px] md:top-[162px] absolute flex-col justify-start items-start gap-[7px] inline-flex">
              <div className="self-stretch text-center text-slate-100 md:text-2xl font-bold md:leading-[34px] text-xl leading-7">
                Hijau dan Bersih
              </div>
              <div className="self-stretch text-center text-slate-200 md:text-lg font-normal text-[15.06px] md:leading-[30px] leading-[15.06px]">
                2 Nov 2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
