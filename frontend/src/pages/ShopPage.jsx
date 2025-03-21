import { useState } from "react";
import { Slider } from "../components/ui/slider";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { X } from "lucide-react";

const categories = [
  "Electronics",
  "Clothing",
  "Home Appliances",
  "Books",
  "Toys",
  "Sports Equipment",
  "Furniture",
  "Beauty",
];
const brands = [
  "Samsung",
  "Nike",
  "LG",
  "Apple",
  "Sony",
  "Adidas",
  "Lego",
  "Mattel",
  "Ikea",
  "L'Oreal",
];

const products = [
  {
    id: 1,
    name: "Smartphone",
    category: "Electronics",
    brand: "Samsung",
    price: 700,
    description:
      "A powerful Samsung smartphone with a high-resolution display and long battery life.",
    img: "https://i.ebayimg.com/images/g/uEMAAOSwy1pk02mG/s-l1200.jpg",
  },
  {
    id: 2,
    name: "Shoes",
    category: "Clothing",
    brand: "Nike",
    price: 120,
    description:
      "Comfortable and stylish Nike running shoes designed for performance and everyday wear.",
    img: "https://redtape.com/cdn/shop/files/RSO4102_1_c0a68240-77e5-4003-8465-bff2bb2280a7.jpg?v=1741350323",
  },
  {
    id: 3,
    name: "Refrigerator",
    category: "Home Appliances",
    brand: "LG",
    price: 900,
    description:
      "A spacious LG refrigerator with energy-efficient cooling and advanced storage options.",
    img: "https://i5.walmartimages.com/seo/3-5cu-ft-Compact-Refrigerator-Mini-Fridge-with-Freezer-Krib-Bling-Small-Refrigerator-with-2-Door_0890787a-3dee-4282-a00a-117a0331b8dd.20f6eeb52132da4ebf25d883727b7c69.jpeg",
  },
  {
    id: 4,
    name: "Laptop",
    category: "Electronics",
    brand: "Apple",
    price: 1500,
    description:
      "A high-performance Apple laptop with a sleek design and powerful processing capabilities.",
    img: "https://images.unsplash.com/photo-1491472253230-a044054ca35f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 5,
    name: "Lego City Police Station",
    category: "Toys",
    brand: "Lego",
    price: 60,
    description:
      "Build a police station complete with vehicles and action figures.",
    img: "https://images.brickset.com/sets/images/7237-2.jpg?201108060859",
  },
  {
    id: 6,
    name: "Barbie Dreamhouse",
    category: "Toys",
    brand: "Mattel",
    price: 200,
    description:
      "A spacious and luxurious dollhouse perfect for Barbie and her friends.",
    img: "https://media.houseandgarden.co.uk/photos/647f0066726bb931873b5523/master/pass/AD0623_BARBIE_2%20copy.jpg",
  },
  {
    id: 7,
    name: "Basketball",
    category: "Sports Equipment",
    brand: "Nike",
    price: 30,
    description:
      "Official size and weight basketball designed for indoor and outdoor play.",
    img: "https://www.rockstaracademy.com/lib/images/news/basketball.jpeg",
  },
  {
    id: 8,
    name: "Soccer Cleats",
    category: "Sports Equipment",
    brand: "Adidas",
    price: 60,
    description:
      "Comfortable and durable cleats for soccer enthusiasts of all skill levels.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGv66Yuc3sJ2xWxJF435pTDbgyXi4yxGDSdA&s",
  },
  {
    id: 9,
    name: "Ergonomic Office Chair",
    category: "Furniture",
    brand: "Ikea",
    price: 120,
    description:
      "A comfortable and adjustable chair perfect for long hours of work or study.",
    img: "https://www.hbada.uk/cdn/shop/files/P501--AI_2.jpg?v=1707204176",
  },
  {
    id: 10,
    name: "Wooden Dining Table",
    category: "Furniture",
    brand: "Ikea",
    price: 350,
    description:
      "A stylish and durable wooden dining table perfect for family meals.",
    img: "https://www.vikinterio.com/product-images/IMG-20200918-WA0083.jpg/473239000000201517/900x900",
  },
  {
    id: 11,
    name: "Shampoo",
    category: "Beauty",
    brand: "L'Oreal",
    price: 8,
    description:
      "A nourishing shampoo that strengthens and adds shine to your hair.",
    img: "https://m.media-amazon.com/images/I/91LgTT5weYL._SL1500_.jpg",
  },
  {
    id: 12,
    name: "Lipstick",
    category: "Beauty",
    brand: "L'Oreal",
    price: 10,
    description:
      "A long-lasting, vibrant lipstick available in various shades. This product is cruelty-free.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk7l84UzKz_HfMcmiXGclj8KCPjcyZXkTsaA&s",
  },
];

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handlePriceChange = (newValue) => {
    setPriceRange(newValue);
  };

  const filteredProducts = products.filter((product) => {
    return (
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
  });

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 relative">
      {/* Filter Section (Sliding from left) */}
      <div
        className={`fixed inset-0 md:w-1/4 w-4/5 bg-gray-100 p-4 rounded-lg h-full transform transition-transform duration-300 ease-in-out ${
          isFilterOpen ? "translate-x-0 z-50" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold mb-3">Filters</h2>
          <X
            className="cursor-pointer"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          />
        </div>

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-medium border border-gray-300 px-2 py-1 rounded-md">
            Category
          </h3>
          <div className="mt-2">
            {categories.map((cat) => (
              <label key={cat} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={cat}
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                  className="w-4 h-4"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-4">
          <h3 className="font-medium border border-gray-300 px-2 py-1 rounded-md">
            Brand
          </h3>
          <div className="mt-2">
            {brands.map((brand) => (
              <label key={brand} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={brand}
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                  className="w-4 h-4"
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="font-medium">Price</h3>
          <Slider
            defaultValue={[0, 2000]}
            min={0}
            max={2000}
            step={50}
            value={priceRange}
            onValueChange={handlePriceChange}
            className="mt-2"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Filter Toggle Button for Mobile */}
      <div className="md:hidden fixed top-18 left-4 z-10">
        {!isFilterOpen && (
          <Button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="bg-gray-800 text-white font-medium py-2 px-4 rounded-lg"
          >
            Show Filters
          </Button>
        )}
      </div>

      {/* Products Section */}
      <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[65vh] mt-10 md:mt-0">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            className="shadow-lg rounded-xl hover:shadow-xl transition-shadow duration-300 h-fit"
          >
            <CardContent className="flex flex-col items-center text-center">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-50 object-cover"
              />
              <div className="p-2">
                <h3 className="text-lg font-bold mt-4">{product.name}</h3>
                <p className="text-sm text-gray-500">
                  {product.category} - {product.brand}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {product.description}
                </p>
                <p className="mt-3 font-semibold text-lg text-blue-600">
                  ${product.price}
                </p>
                <Button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg">
                  Add to Cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
