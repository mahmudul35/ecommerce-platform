import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const AccessoriesCategory = () => {
  const categories = [
    {
      title: "Helmets",
      bgColor: "",
      items: [
        {
          name: "Full-Face Helmet",
          image:
            "https://motojp.japanparts.com.bd/cdn/shop/files/img-3_89541b80-f416-493b-83c8-12e2ee0e5789.png?v=1652163370",
          price: "$89.99",
        },
        {
          name: "Open-Face Helmet",
          image:
            "https://ds.rokomari.store/rokomari110/ProductNew20190903/260X372/Gliders_Esteem_Full_Face_Bike_Helmet_-Gliders-3d6a2-365049.png",
          price: "$59.99",
        },
        {
          name: "Modular Helmet",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRNrCaVya5-UP8OfD6UTVeoYuO3bliqLpAWQ&s",
          price: "$99.99",
        },
        {
          name: "Dual-Sport Helmet",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoq9aa4Y0cAkVs-xhnZbSkQftJkWPHfa9oQA&s",
          price: "$79.99",
        },
        {
          name: "Retro Helmet",
          image:
            "https://motojp.japanparts.com.bd/cdn/shop/files/img-3_89541b80-f416-493b-83c8-12e2ee0e5789.png?v=1652163370",
          price: "$69.99",
        },
        {
          name: "Adventure Helmet",
          image:
            "https://motojp.japanparts.com.bd/cdn/shop/files/img-3_89541b80-f416-493b-83c8-12e2ee0e5789.png?v=1652163370",
          price: "$89.99",
        },
        {
          name: "Racing Helmet",
          image:
            "https://motojp.japanparts.com.bd/cdn/shop/files/img-3_89541b80-f416-493b-83c8-12e2ee0e5789.png?v=1652163370",
          price: "$119.99",
        },
        {
          name: "Half Helmet",
          image:
            "https://motojp.japanparts.com.bd/cdn/shop/files/img-3_89541b80-f416-493b-83c8-12e2ee0e5789.png?v=1652163370",
          price: "$49.99",
        },
        {
          name: "Bluetooth Helmet",
          image:
            "https://motojp.japanparts.com.bd/cdn/shop/files/img-3_89541b80-f416-493b-83c8-12e2ee0e5789.png?v=1652163370",
          price: "$129.99",
        },
        {
          name: "Carbon Fiber Helmet",
          image:
            "https://motojp.japanparts.com.bd/cdn/shop/files/img-3_89541b80-f416-493b-83c8-12e2ee0e5789.png?v=1652163370",
          price: "$149.99",
        },
      ],
    },
    {
      title: "Riding Gear",
      bgColor: "",
      items: [
        {
          name: "Riding Gloves",
          image:
            "https://gearstationbd.com/wp-content/uploads/2023/01/moto-g-2.jpg",
          price: "$19.99",
        },
        {
          name: "Bike Jacket",
          image:
            "https://gearstationbd.com/wp-content/uploads/2023/08/H7f35793544b84b52ab3ab3378e820a9dt-2-300x300.jpg",
          price: "$79.99",
        },
        {
          name: "Knee Guards",
          image:
            "https://static-01.daraz.com.bd/p/e44c597f8552e3103fb747fd3e763b0e.jpg",
          price: "$29.99",
        },
        {
          name: "Riding Boots",
          image:
            "https://img.drz.lazcdn.com/g/kf/Sdc752b826b4a463584e68825ec5e3377d.jpg_960x960q80.jpg_.webp",
          price: "$99.99",
        },
        {
          name: "Elbow Guards",
          image:
            "https://gearstationbd.com/wp-content/uploads/2023/01/moto-g-2.jpg",
          price: "$24.99",
        },
        {
          name: "Riding Pants",
          image:
            "https://gearstationbd.com/wp-content/uploads/2023/01/moto-g-2.jpg",
          price: "$89.99",
        },
        {
          name: "Reflective Vest",
          image:
            "https://img.drz.lazcdn.com/g/kf/Sdc752b826b4a463584e68825ec5e3377d.jpg_960x960q80.jpg_.webp",
          price: "$39.99",
        },
        {
          name: "Balaclava",
          image:
            "https://gearstationbd.com/wp-content/uploads/2023/08/H7f35793544b84b52ab3ab3378e820a9dt-2-300x300.jpg",
          price: "$14.99",
        },
        {
          name: "Riding Suit",
          image:
            "https://gearstationbd.com/wp-content/uploads/2023/08/H7f35793544b84b52ab3ab3378e820a9dt-2-300x300.jpg",
          price: "$199.99",
        },
        {
          name: "Base Layer Shirt",
          image:
            "https://img.drz.lazcdn.com/g/kf/Sdc752b826b4a463584e68825ec5e3377d.jpg_960x960q80.jpg_.webp",
          price: "$49.99",
        },
      ],
    },
  ];

  return (
    <section className="py-6">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold text-center text-black  ">
          Bike Accessories
          <hr />
        </h2>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`py-10 ${category.bgColor} text-black rounded-lg my-6`}
          >
            <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 4 },
              }}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="px-6"
            >
              {category.items.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className=" p-5 rounded-xl shadow-lg hover:scale-105 transition-all mb-10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="rounded-lg h-48 w-full object-cover mb-4"
                    />
                    <h4 className="text-lg font-semibold">{item.name}</h4>
                    <p className="text-green-600 font-semibold">{item.price}</p>
                    <button className="mt-3 bg-yellow-400 py-2 px-4 rounded-md w-full">
                      Buy Now
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccessoriesCategory;
