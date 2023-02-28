import React from "react";
import Product from "../components/Product";
import { fadeIn } from "react-animations";
import styled, { keyframes } from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
const Bounce = styled.div`
  animation: 4s ${keyframes`${fadeIn}`};
`;
export default function Catalog() {
  return (
    <>
      <div className="h-[100vh] relative">
        <div className="container">
          <div className="absolute bottom-[5%] lext-0 z-20">
            <Bounce>
              <Link to='Section1' smooth={true} className="flex items-center cursor-pointer w-fit duration-150 ease-in hover:-translate-y-3">
                <div className="text-[75px] text-white text-center font-medium">
                  Каталог
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
            src="/bg/video3.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
          <source
            src="/bg/video3.mp4"
            type='video/webm; codecs="vp8, vorbis"'
          />
        </video>
      </div>
      <div className="container">
        <div id="Section1" className="pt-[120px] grid grid-cols-4 gap-5">
          {products.map((item) => (
            <Product block={item} />
          ))}
        </div>
      </div>
    </>
  );
}
const products = [
  {
    title: "Абутилон гибридный Джульетта смесь цв Аэлита",
    nal: "2",
    img: "/image/item1.jpeg",
    price:'340'
  },
  {
    title: "Роза английская Амаретто",
    nal: "4",
    img: "/image/item2.png",
    price:'360'
  },
  {
    title: "Роза английская Боксбель",
    nal: "100",
    img: "/image/item3.jpeg",
    price:'2'
  },

  {
    title: "Тачка декоративная 140*60*60 ТЗ",
    nal: "0",
    img: "/image/item4.jpeg",
    price:'125.000'
  },
  {
    title: "Букет иск. Травинки 33см 2803100",
    nal: "4",
    img: "/image/item5.jpeg",
    price:'345.000'
  },
  {
    title: "Агератум мексиканский розовый цв Аэлита",
    nal: "1",
    img: "/image/item6.jpeg",
    price:'12'
  },
];
