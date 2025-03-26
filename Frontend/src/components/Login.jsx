import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("http://localhost:8000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // ✅ Ensures cookies are sent & received!
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      localStorage.setItem("token", data.token);
      setSuccess("Login successful!");
      console.log(document.cookie);
      setTimeout(() => navigate("/"), 1500); // Redirect after a delay
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r p-4">
      <div className="flex w-[890px] h-[500px] bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg">
        {/* Left Section - Image */}
        <div className="w-1/2 flex items-center justify-center bg-white">
          <img
            src="https://res.cloudinary.com/doqoizcgs/image/upload/v1742873397/rxkz0jdb5a6bglulithx.jpg"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Section - Login Form */}
        <div className="w-1/2 flex flex-col items-center justify-center p-6">
          <h2 className="text-white text-2xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}
          {success && (
            <div className="flex items-center text-green-500 text-sm mb-3">
              <CheckCircle className="w-5 h-5 mr-2" />
              {success}
            </div>
          )}
          <form onSubmit={handleLogin} className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mb-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mb-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}