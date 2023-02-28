import React from "react";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
const Bounce = styled.div`
  animation: 4s ${keyframes`${fadeIn}`};
`;

export default function Home() {
  return (
    <>
      <div className="h-[100vh] relative">
        <div className="container">
          <div className="absolute bottom-[5%] lext-0 z-20">
            <Bounce>
              <div className="flex items-center cursor-pointer w-fit duration-150 ease-in hover:-translate-y-3">
                <div className="text-[75px] text-white text-center font-medium">
                  Вмете в зеленое будущее
                </div>
              </div>
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
            src="/bg/video4.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
          <source
            src="/bg/video4.mp4"
            type='video/webm; codecs="vp8, vorbis"'
          />
        </video>
      </div>
      <div className="container">
        <div className="py-20 flex justify-center">
          <p className="text-center text-32 font-medium max-w-[800px] ">
            Добро пожаловать в магазин POMIDOR, у нас вы найдете лучший товар по
            самой низкой цене. Чтобы дача приносила удовольствие и дарила щедрый
            урожай, важно позаботиться о приобретении качественных товаров для
            сада и огорода. В продаже можно найти множество полезных вещей для
            любителей данного вида отдыха и профессиональных фермеров.
          </p>
        </div>
      </div>
      <img
        src="/bg/ogorod.jpg"
        alt="uf"
        className="h-[450px] w-full object-cover"
      />
      <div className="container">
        <div className="flex justify-center mb-8">
          <div className="mt-5 max-w-[800px]">
            <p className="text-32 font-medium text-center">Знали ли вы?</p>
            <p className="text-32 font-medium text-center">
              Сколько в России дачников? Данные разнятся. Но в целом процент
              горожан, имеющих дачу, варьируется от 60 до 86%. И хотя культура
              дачного досуга есть и в Европе, и в Америке, нигде в мире нет
              такого масштабного культа дачи, как у россиян.
            </p>
          </div>
        </div>
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
