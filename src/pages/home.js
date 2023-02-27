import React from 'react'

export default function Home() {
  return (
    <>
      <div className="h-[100vh]">
        <video
          autoPlay
          muted
          loop
          className="h-full w-full object-cover opacity-80"
        >
          <source
            src="/bg/index.mp4"
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
          />
          <source src="/bg/index.mp4" type='video/webm; codecs="vp8, vorbis"' />
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
      <img src="/bg/ogorod.jpg" alt="uf" className="h-[450px] w-full object-cover" />
    </>
  )
}
