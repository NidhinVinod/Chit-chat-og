import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import AuthImagePattern from "../components/AuthImagePattern";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageCircleCode } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="h-screen flex">
      {/* Left Side - Image/Pattern */}
      <div className="hidden lg:flex w-1/2  bg-base-100 mt-10 justify-center items-center">
        <AuthImagePattern
          title={"Welcome Back!"}
          subtitle={"Sign in to continue your conversations and stay connected."}
        />
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="max-w-md w-full">
          {/* Logo & Heading */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center transition-colors">
                <MessageCircleCode className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2">Welcome Back</h1>
              <p className="text-gray-500">Sign in to your account</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              {/* Email Input */}
              <div className="relative">
                <label className="block text-sm font-medium">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    className="input input-bordered w-full pl-10"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="block text-sm font-medium">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pl-10"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="text-gray-400" /> : <Eye className="text-gray-400" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-full flex items-center justify-center" disabled={isLoggingIn}>
              {isLoggingIn ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Signup Link */}
          <div className="text-center mt-4">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <Link to="/signup" className="link link-primary">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
