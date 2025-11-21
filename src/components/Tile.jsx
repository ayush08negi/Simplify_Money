import { useEffect, useState } from "react";
import { fetchMetal } from "../api/metalApi";
import { Link } from "react-router-dom";

const ICONS = {
  gold: "🟡",
  silver: "⚪",
  platinum: "💠",
};

export default function Tile({ metal }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchMetal(metal);
      setData(res);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div
      className="bg-neutral-800/60 backdrop-blur-xl 
        p-5 rounded-2xl shadow-[0_0_15px_rgba(0,0,0,0.4)]
        w-full border border-neutral-700/40
        hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(0,0,0,0.6)]
        transition-all duration-300 ease-out"
    >
      <div className="flex justify-between">
        <div>
          
          <div className="flex items-center gap-2">
            <span className="text-2xl">{ICONS[metal]}</span>
            <p className="opacity-70 text-sm">{metal.toUpperCase()}</p>
          </div>

          
          <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mt-1">
            {data?.name || metal}
          </h2>
        </div>

      
        <div>
          {loading ? (
            <div className="animate-pulse h-6 w-20 bg-neutral-700 rounded"></div>
          ) : error ? (
            <p className="text-red-400 text-sm">Error</p>
          ) : (
            <p className="text-xl font-bold">
              ₹{Number(data.price).toLocaleString()}
            </p>
          )}
        </div>
      </div>

      
      <p className="mt-2 opacity-75 text-sm">
        {loading
          ? "Loading..."
          : error
          ? "Failed to load"
          : `24h: ${data.change24h}% • ${data.lastUpdated}`}
      </p>

      
      <div className="flex gap-3 mt-4">
        <button
          onClick={load}
          className="px-3 py-1 rounded-lg bg-neutral-700/60 border border-neutral-600 hover:bg-neutral-700 transition"
        >
          Retry
        </button>

        <Link
          to={`/detail/${metal}`}
          state={{ data }}
          className="px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 transition"
        >
          Details
        </Link>
      </div>

      {error && <p className="mt-2 text-red-400 text-sm">{error}</p>}
    </div>
  );
}
