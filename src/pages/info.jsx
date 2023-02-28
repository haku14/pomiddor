import React from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Bounce = styled.div`
  animation: 4s ${keyframes`${fadeIn}`};
`;

export default function info() {
  return (
    <>
      <div className="h-[100vh] relative">
        <div className="container">
          <div className="absolute bottom-[5%] lext-0 z-20">
            <Bounce>
              <Link
                to="Section1"
                smooth={true}
                className="flex items-center cursor-pointer w-fit duration-150 ease-in hover:-translate-y-3"
              >
                <div className="text-[75px] text-white text-center font-medium">
                  О нас
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
            src="/bg/video5.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
          <source
            src="/bg/video5.mp4"
            type='video/webm; codecs="vp8, vorbis"'
          />
        </video>
      </div>
      <div id="Section1" className="mt-10">
        <h1 className="text-[65px] font-medium text-center mb-8">О нас</h1>
        <div className="container">
          <Splide
            options={{
              perPage: "4",
              perMove: "1",
              pagination: false,
              gap: "1rem",
            }}
          >
            {slider.map((item) => (
              <SplideSlide className="w-full h-[350px]">
                <img
                  src={item}
                  alt="uf"
                  className="w-full h-full rounded-[5px] object-cover"
                />
              </SplideSlide>
            ))}
          </Splide>
          <div className="mt-10 text-center text-[34px] font-medium">
            Мы делаем самые зачетные огороды и продаем лучшие лопаты, у нас есть
            розы цветочки фигочки гамаки деши плитки все крч.
          </div>
        </div>
      </div>
    </>
  );
}
const slider = [
  "/image/img1.jpg",
  "/image/img2.jpg",
  "/image/img3.jpg",
  "/image/img4.jpg",
  "/image/img5.jpg",
  "/image/img6.jpg",
  "/image/img7.jpg",
];
