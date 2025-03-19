import { X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
const Cart = () => {
  const [quantity, setQuantity] = useState(1);
  const price = 79.99;
  const shipping = 15.0;
  const subtotal = price * quantity;
  const total = subtotal + shipping;

  return (
    <div className="container mx-auto p-2 md:p-4 min-h-[68vh]">
      {/* Cart */}
      <h2 className="text-3xl font-bold mb-4">Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-4">
          <div>
            <div className="grid grid-cols-5 font-bold border-b pb-2 mb-2">
              <span className="col-span-2">Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 pb-4 mb-4">
            <div className=" flex flex-col md:flex-row relative items-center gap-2">
              <span className="absolute -left-6 -bottom-2 p-1 cursor-pointer">
                <X className="size-4" />
              </span>
              <img
                src="/p2.jpg"
                alt="product"
                className="size-20 object-cover"
              />
              <p>
                <strong>Product Name</strong>
              </p>
            </div>
            <div className=" flex items-center justify-center">
              <span>${price.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-center">
              <button
                className="border border-gray-600 px-2 cursor-pointer"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span
                className="border border-gray-600 px-2"
                style={{ width: "50px", textAlign: "center" }}
              >
                {quantity}
              </span>
              <button
                className="border border-gray-600 px-2 cursor-pointer"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <div className="flex items-center justify-center">
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Cart Totals */}
        <Card className="p-4">
          <CardContent>
            <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mt-2">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold mt-4 border-t pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link to={"/billing"}>
              <Button className="w-full mt-4 bg-black text-white py-2 cursor-pointer">
                Proceed to Checkout
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
