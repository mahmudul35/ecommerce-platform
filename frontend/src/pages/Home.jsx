import Category from "./HomeComponents/Category";
import CustomCarousel from "./HomeComponents/CustomCarousel";
import Discover from "./HomeComponents/Discover";
import ExploreProducts from "./HomeComponents/ExploreProducts";
import LocalBrand from "./HomeComponents/LocalBrand";
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
        <Discover />
        <LocalBrand />
        <ExploreProducts />
      </div>
    </div>
  );
};

export default HeroCarousel;
