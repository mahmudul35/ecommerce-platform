import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Facebook from "../../assets/images/Facebook_Logo_Primary.png";
import Google from "../../assets/images/Google_Logo_Primary.png";
import bike from "../../assets/images/bikeLogin.jpg";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (!name || !username || !email || !password || !confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return;
    }

    setIsLoading(true);

    const data = {
      name,
      username,
      email,
      password,
    };

    setIsLoading(false);
    e.target.reset();
  };

  return (
    <div className="min-h-screen flex">
      {/* Right Section - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 p-8 order-2">
        {" "}
        {/* Added order-2 */}
        <div className="relative w-full h-full">
          <img
            src={bike}
            alt="bike in showroom"
            className="object-cover rounded-3xl h-screen"
          />
          <div className="absolute inset-0 bg-gray-900/30 rounded-3xl" />
        </div>
      </div>

      {/* Left Section - Signup Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-900 order-1">
        {" "}
        {/* Added order-1 */}
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Create Account</h1>
            <p className="mt-3 text-gray-400">
              Start your journey to find your perfect bike
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-3 right-3 text-gray-400 focus:outline-none"
                >
                  {passwordVisible ? (
                    <FiEyeOff className="text-lg sm:text-xl" />
                  ) : (
                    <FiEye className="text-lg sm:text-xl" />
                  )}
                </button>
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-3 right-3 text-gray-400 focus:outline-none"
                >
                  {passwordVisible ? (
                    <FiEyeOff className="text-lg sm:text-xl" />
                  ) : (
                    <FiEye className="text-lg sm:text-xl" />
                  )}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 bg-gray-800 border-gray-700 rounded text-blue-500 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-400">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-blue-500 hover:text-blue-400"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-blue-500 hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
              </span>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors cursor-pointer"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">or</span>
              </div>
            </div>

            {/* Social Sign Up */}
            <div className="space-y-3">
              <button
                type="button"
                // onClick={handleGoogleSignup}
                className="w-full flex items-center justify-center gap-3 py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700 transition-colors"
              >
                <img src={Google} alt="Google" width={30} height={30} />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center gap-3 py-2 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-lg border border-gray-700 transition-colors">
                <img src={Facebook} alt="Facebook" width={20} height={20} />
                Continue with Facebook
              </button>
            </div>

            {/* Login Link */}
            <p className="text-center text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:text-blue-400">
                Log in
              </Link>
            </p>
          </form>
          {/* Add Back to Home Link */}
          <p className="text-center text-gray-400 mt-4">
            <a
              href="/"
              className="flex items-center justify-center gap-2 text-blue-500 hover:text-blue-400 border border-gray-700 rounded-lg p-2 hover:bg-gray-800 transition-colors"
            >
              <span>←</span> Back to Home
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
