import React from "react";

export default function Product(props) {
  return (
    <>
      {[props.block].map((item) => (
        <div className="w-full border cursor-pointer duration-150 ease-in hover:-translate-y-2 border-gray-400 rounded-[10px]">
          <div className="flex flex-col h-full">
            <div className="w-full h-full">
              <img
                src={item.img}
                alt="uf"
                className="w-full h-full object-contain rounded-t-[9px]"
              />
            </div>
            <div className="p-3 flex flex-col justify-between h-full">
              <div className="text-[22px] font-medium">{item.title}</div>
              <div className="mt-5 flex justify-between">
                <p className="text-gray-500 text-20">
                  Цена: 
                  <span className="text-black font-medium"> {item.price}₽</span>
                </p>
                <p className="text-gray-500 text-20">
                  В наличии:
                  <span className="text-black font-medium"> {item.nal}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
