import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

export default function ShortUrlPage() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const API_URL = "https://spurl.up.railway.app";

  const handleShorten = async () => {
    if (!url) {
      toast.error("Please enter a URL!"); 
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/shorten`, { url });
      setShortUrl(response.data.short_url);
      toast.success("URL shortened successfully!"); // Toastify success message
    } catch (error) {
      toast.error("Failed to shorten URL. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenUrl = () => {
    if (shortUrl) {
      window.open(`${API_URL}/${shortUrl}`, "_blank");
    }
  };

  const handleCopyUrl = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(`${API_URL}/${shortUrl}`);
      toast.success("Copied to clipboard!"); // Toastify success message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-purple-800 p-4">
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className="w-full max-w-md p-8 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/10">
        <h1 className="text-3xl font-bold text-white text-center mb-6">URL Shortener</h1>
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Enter your URL..."
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="w-full px-4 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-pink-700 active:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
            onClick={handleShorten}
            disabled={isLoading}
          >
            {isLoading ? "Shortening..." : "Shorten URL"}
          </button>
          {shortUrl && (
            <div className="mt-6 text-center">
              <p className="text-white/80 mb-4">
                Your URL:{" "}
                <a
                  href={`${API_URL}/${shortUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline transition"
                >
                  {`${API_URL}/${shortUrl}`}
                </a>
              </p>
              <div className="mt-3 flex justify-center gap-3">
                <button
                  className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                  onClick={handleOpenUrl}
                >
                  Open
                </button>
                <button
                  className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                  onClick={handleCopyUrl}
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}