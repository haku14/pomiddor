import React from "react";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 flex justify-center w-full z-30 bg-gray-500 bg-opacity-70">
        <div className="container">
          <div className="text-white py-[22px] flex justify-between md:py-[18px] sm:py-[18px]">
            <div className="flex md:justify-between sm:justify-between w-full items-center">
              <a href="/" className="flex items-center">
                <img
                  src="/image/logo.svg"
                  alt="logo"
                  className="w-[189px] sm:w-[119px]"
                />
              </a>
              <div className="flex ml-[57px] gap-x-[57px] md:hidden sm:hidden">
                <a href="/catalog" className="text-18">
                  Каталог
                </a>
                <a href="/info" className="text-18">
                  О нас
                </a>
                <a href="/contact" className="text-18">
                  Контакты
                </a>
                <a href="/dpo" className="text-18">
                  Дополнительно
                </a>
              </div>
            </div>
            <div className="flex items-center gap-x-3"></div>
          </div>
        </div>
      </header>
    </>
  );
}
