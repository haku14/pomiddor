import React from "react";

export default function Product(props) {
  return (
    <>
      {[props.block].map((item) => (
        <div className="py-3 px-2 w-full border cursor-pointer duration-150 ease-in hover:-translate-y-2 border-gray-500 rounded-[5px]">
          <div className="flex flex-col items-center gap-10">
            <div className="max-w-[200px] w-full h-[350px]">
              <img
                src={item.img}
                alt="uf"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="text-20 font-medium">{item.title}</div>
              <div className="mt-5">
                <p className="text-gray-500 text-16">
                  В наличии:
                  <span className="text-black font-semibold">{item.nal}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
