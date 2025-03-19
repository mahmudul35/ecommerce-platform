import { DollarSign, Filter } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import Bike1 from "/bike1.jpg";
import Bike2 from "/bike2.jpg";
import Bike3 from "/bike3.jpg";
import Bike4 from "/bike4.jpg";
import Bike5 from "/bike5.jpg";

const bikes = [
  {
    id: 1,
    name: "Mountain Bike",
    brand: "Brand A",
    category: "Mountain Bike",
    description: "A rugged mountain bike designed for off-road adventures.",
    price: "Tk.499",
    image: Bike1,
  },
  {
    id: 2,
    name: "Road Bike",
    brand: "Brand B",
    category: "Road Bike",
    description:
      "A lightweight road bike built for speed and performance on paved roads.",
    price: "Tk.599",
    image: Bike2,
  },
  {
    id: 3,
    name: "Hybrid Bike",
    brand: "Brand C",
    category: "Hybrid Bike",
    description:
      "A versatile hybrid bike that combines the features of both road.",
    price: "Tk.699",
    image: Bike3,
  },
  {
    id: 4,
    name: "Hybrid Bike",
    brand: "Brand C",
    category: "Hybrid Bike",
    description:
      "A versatile hybrid bike that combines the features of both road.",
    price: "Tk.699",
    image: Bike4,
  },
  {
    id: 5,
    name: "Hybrid Bike",
    brand: "Brand C",
    category: "Hybrid Bike",
    description:
      "A versatile hybrid bike that combines the features of both road.",
    price: "Tk.699",
    image: Bike5,
  },
];

const Bikes = () => {
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    price: "",
  });

  return (
    <div className="flex gap-6 p-6 ">
      {/* Filter Section */}
      <div className="w-1/4 p-4 bg-gray-100 rounded-xl sticky top-0 h-[fit-content]">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Filter size={20} /> Filters
        </h2>
        <div className="mb-4 flex flex-col gap-2">
          <h3 className="font-medium mb-2 border border-gray-300 px-1 rounded">
            Category
          </h3>
          <p>
            <Checkbox label="Mountain Bike" />
            <span className="ml-1">Mountain Bike</span>
          </p>
          <p>
            <Checkbox label="Road Bike" />
            <span className="ml-1">Road Bike</span>
          </p>
          <p>
            <Checkbox label="Hybrid Bike" />
            <span className="ml-1">Hybrid Bike</span>
          </p>
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <h3 className="font-medium mb-2 border border-gray-300 px-1 rounded">
            Brand
          </h3>
          <p>
            <Checkbox label="Brand A" />
            <span className="ml-1">Brand A</span>
          </p>
          <p>
            <Checkbox label="Brand B" />
            <span className="ml-1">Brand B</span>
          </p>
          <p>
            <Checkbox label="Brand C" />
            <span className="ml-1">Brand C</span>
          </p>
        </div>
        <div className="mb-4">
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <DollarSign size={16} /> Price Range
          </h3>
          <Input
            type="text"
            placeholder="$ Min - $ Max"
            className="p-2 w-full"
          />
        </div>
        <Button className="w-full cursor-pointer bg-amber-400 hover:bg-amber-500">
          Apply Filters
        </Button>
      </div>

      {/* Product Listing */}
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {bikes.map((bike) => (
          <Card key={bike.id} className="p-2 rounded-xl shadow-lg">
            <img
              src={bike.image}
              alt={bike.name}
              className="w-full object-cover rounded-md"
            />
            <CardContent className="mt-2 flex flex-col">
              <div>
                <h3 className="text-lg font-bold">{bike.name}</h3>
                <p className="text-gray-600">{bike.brand}</p>
                <p className="text-sm text-gray-500">{bike.description}</p>
                <p className="text-gray-600 mt-2">
                  <strong>Category:</strong> {bike.category}
                </p>
                <p className="text-green-600 font-semibold">{bike.price}</p>
              </div>
              <Button className="mt-3 w-full bg-amber-500 hover:bg-amber-600">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
