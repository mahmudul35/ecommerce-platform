import { Lock, User } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Facebook from "../../assets/images/Facebook_Logo_Primary.png";
import Google from "../../assets/images/Google_Logo_Primary.png";
import bike from "../../assets/images/bikeLogin.jpg";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (!username || !password) {
      toast.error("Please fill all the fields");
      setIsLoading(false);
      return;
    }

    const data = {
      username,
      password,
    };
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gray-900 p-8">
        <div className="relative w-full h-full">
          <img
            src={bike}
            alt="Car at sunset"
            className="object-cover rounded-3xl border-2 border-gray-700 h-screen"
          />
          <div className="absolute inset-0 bg-gray-900/30 rounded-3xl" />
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-gray-900">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              Welcome Back
            </h1>
            <p className="mt-2 text-gray-400">
              Your dream bike is just a login away
            </p>
          </div>

          {/* Form */}
          <form className="mt-6 space-y-4" onSubmit={handleLogin}>
            <div className="space-y-3">
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="username"
                  placeholder="username"
                  name="username"
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
            </div>

            {/* Options */}
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="remember"
                  className="w-4 h-4 bg-gray-800 border-gray-700 rounded text-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-400">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:text-blue-400"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full mt-4 py-2.5 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors cursor-pointer"
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-900 text-gray-400">or</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="space-y-2">
              <button
                type="button"
                // onClick={handleGoogleLogin} // Triggers Google login
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

            {/* Sign Up Link */}
            <p className="text-center text-gray-400 mt-6">
              Don&apos;t have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:text-blue-400">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
