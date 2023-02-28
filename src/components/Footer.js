import React from 'react'

export default function Footer() {
  return (
    <div className="bg-black border-t border-[#333] py-6 sm:py-3 mt-20">
        <div className="container">
          <div className="flex flex-col sm:flex-col-reverse gap-6 sm:gap-2">
            <div className="flex justify-between gap-5 sm:flex-col items-center sm:gap-2">
              <a href="/" className="w-[160px] h-10 sm:w-[120px] sm:h-8">
                <img src='/image/logo.svg' alt="logo" className="w-full h-full" />
              </a>
              <div className="flex gap-5">
              </div>
            </div>
            <div className="text-white flex justify-between items-center sm:flex-col">
              <div className="flex gap-5 ml-8">
                {menu.map((menuItem, i) => (
                  <a href={menuItem.link} key={i}>
                    {menuItem.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
const menu = [
    {
      title: 'О нас',
      link: '/',
    },
    {
      title: 'Каталог',
      link: '/faq',
    },
    {
      title: 'Контакты',
      link: '/contact',
    },
    {
      title: 'Дополнительно',
      link: '/pricing',
    },
  ]
