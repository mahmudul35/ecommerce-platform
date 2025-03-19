import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Casual T-Shirt",
    price: 14.99,
    oldPrice: 19.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ucfrRuR4gLgfBMszY5i0ZL1EYLYHd0qUKQ&s",
    sale: true,
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    price: 22.99,
    oldPrice: 29.99,
    image:
      "https://static.topvintage.net/shop-product/112217-Hearts-and-Roses-White-Yellow-Swing-Dress-102-59-21742-20170410-0002W1-large.jpg",
    sale: true,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    image:
      "https://cdn.mos.cms.futurecdn.net/n6bdW5KEedFhqGSbQhwfSD-1200-80.jpg",
    sale: false,
  },
  {
    id: 4,
    name: "4K Smart TV",
    price: 999.99,
    image:
      "https://i02.appmifile.com/mi-com-product/fly-birds/pc/xiaomi-tv-a2-43/9d6eeebca4ee982f28da8af5cbd5e2ee.jpg",
    sale: false,
  },
  {
    id: 5,
    name: "4K Smart TV",
    price: 999.99,
    image:
      "https://i02.appmifile.com/mi-com-product/fly-birds/pc/xiaomi-tv-a2-43/9d6eeebca4ee982f28da8af5cbd5e2ee.jpg",
    sale: false,
  },
  {
    id: 6,
    name: "4K Smart TV",
    price: 999.99,
    image:
      "https://i02.appmifile.com/mi-com-product/fly-birds/pc/xiaomi-tv-a2-43/9d6eeebca4ee982f28da8af5cbd5e2ee.jpg",
    sale: false,
  },
];

export default function ExploreProducts() {
  return (
    <div className="container mx-auto my-12 relative ">
      <h1 className="text-3xl font-semibold">Explore Products</h1>
      <div className="w-full h-0.5 bg-gray-200 my-3"></div>
      <div className="max-w-64 h-0.5 bg-[#03b00b] -mt-[15px]"></div>
      <div className="p-6 flex flex-col items-center mt-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <Card className="relative">
                {product.sale && (
                  <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm font-bold">
                    Sale
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4 text-left">
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-500">
                    {product.oldPrice && (
                      <span className="line-through mr-2">
                        ${product.oldPrice}
                      </span>
                    )}
                    <span className="text-black font-bold">
                      ${product.price}
                    </span>
                  </p>
                  <Link className="mt-2 w-full flex items-center justify-left gap-2 underline">
                    <FaShoppingCart /> Add to cart
                  </Link>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
