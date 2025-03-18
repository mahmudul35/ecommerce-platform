export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Explore */}
        <div>
          <h3 className="font-bold text-lg">Explore</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Shop All
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Clothing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Electronics
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg">About Us</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-bold text-lg">Customer Service</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Faq
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Secure Shopping
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="font-bold text-lg">Subscribe to our Newsletter</h3>
          <p className="text-gray-400 mt-2">
            Stay up to date with new products and special offers.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-0 p-2 bg-white rounded-md text-black"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 text-sm">
          &copy; 2025 myordersupply.com. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-400 hover:underline text-sm">
            Terms and Conditions
          </a>
          <a href="#" className="text-gray-400 hover:underline text-sm">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
