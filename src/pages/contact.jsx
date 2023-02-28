import React from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
const Bounce = styled.div`
  animation: 4s ${keyframes`${fadeIn}`};
`;

export default function contact() {
  return (
    <>
      <div className="h-[100vh] relative">
        <div className="container">
          <div className="absolute bottom-[5%] lext-0 z-20">
            <Bounce>
              <Link to='Section1' smooth={true} className="flex items-center cursor-pointer w-fit duration-150 ease-in hover:-translate-y-3">
                <div className="text-[75px] text-white text-center font-medium">
                  Контакты
                </div>
                <img
                  src="/icons/arrow.svg"
                  alt="uf"
                  className="w-[50px] h-[50px] mt-2"
                />
              </Link>
            </Bounce>
          </div>
        </div>
        <video
          autoPlay
          muted
          loop
          className="h-full w-full object-cover opacity-80"
        >
          <source
            src="/bg/video2.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
          <source
            src="/bg/video2.mp4"
            type='video/webm; codecs="vp8, vorbis"'
          />
        </video>
      </div>
      <div className="container">
        <div id="Section1" className="text-[40px] font-medium mt-20">
          Телефон:
          <span className="text-gray-400 text-[35px]"> 89174734126</span>
        </div>
        <div className="text-[40px] font-medium mt-5">
          Почта:
          <span className="text-gray-400 text-[35px]"> OgOvRoT@gmail.com</span>
        </div>
        <div className="text-[40px] font-medium mt-5">
          Адрес:
          <span className="text-gray-400 text-[35px]"> Бижбуляк д.1</span>
        </div>
      </div>
    </>
  );
}
