import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <div>
      <div
        className="relative w-full min-h-[65vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/discover.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div>
          <div
            className="absolute inset-0 flex flex-col justify-center items-start p-10 "
            style={{
              backdropFilter: "blur(2px)",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Discover Your Next Favorite Product
              </h2>
              <p className="text-lg text-gray-200 max-w-lg mb-6">
                Browse our extensive selection of local goods and unique finds
                tailored for the Pabna community. Shop now and support local
                entrepreneurs!
              </p>
              <Link
                to="/shop"
                className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded-md cursor-pointer"
              >
                Start Shopping Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discover;
