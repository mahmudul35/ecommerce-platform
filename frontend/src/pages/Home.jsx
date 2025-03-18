import Category from "./HomeComponents/Category";
import CustomCarousel from "./HomeComponents/CustomCarousel";
import PopularProduct from "./HomeComponents/PopularProduct";
import SubBanner from "./HomeComponents/SubBanner";

const HeroCarousel = () => {
  return (
    <div className=" w-full  overflow-hidden ">
      <div>
        <CustomCarousel />
        <Category />
        <SubBanner />
        <PopularProduct />
      </div>
    </div>
  );
};

export default HeroCarousel;
