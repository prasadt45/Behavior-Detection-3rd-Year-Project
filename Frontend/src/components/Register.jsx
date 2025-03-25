import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required!");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/v1/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Registration failed");

      setSuccess("User registered successfully!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-[800px]">
        <div className="w-1/2 flex items-center justify-center p-8">
          <img src="https://res.cloudinary.com/doqoizcgs/image/upload/v1742873397/rxkz0jdb5a6bglulithx.jpg" alt="Register" className="w-full" />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center bg-gray-800 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Register User</h2>
          {error && <p className="text-red-400 text-center mb-2">{error}</p>}
          {success && <p className="text-green-400 text-center mb-2">{success}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-500 transition text-white font-semibold p-3 rounded-md"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <a href="/login" className="text-blue-400">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
