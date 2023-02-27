import React from "react";
import Product from "../components/Product";

export default function Catalog() {
  return (
    <>
      <div className="container">
        <div className="mt-[120px] grid grid-cols-4 gap-5">
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
  },
  {
    title: "Абутилон гибридный Джульетта смесь цв Аэлита",
    nal: "2",
    img: "/image/item1.jpeg",
  },
  {
    title: "Абутилон гибридный Джульетта смесь цв Аэлита",
    nal: "2",
    img: "/image/item1.jpeg",
  },

  {
    title: "Абутилон гибридный Джульетта смесь цв Аэлита",
    nal: "2",
    img: "/image/item1.jpeg",
  },
  {
    title: "Абутилон гибридный Джульетта смесь цв Аэлита",
    nal: "2",
    img: "/image/item1.jpeg",
  },
  {
    title: "Абутилон гибридный Джульетта смесь цв Аэлита",
    nal: "2",
    img: "/image/item1.jpeg",
  },
];
