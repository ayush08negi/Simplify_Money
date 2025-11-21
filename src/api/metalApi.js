const BASE_URL = "https://www.goldapi.io/api";

const SYMBOLS = {
  gold: "XAU",
  silver: "XAG",
  platinum: "XPT",
};

export async function fetchMetal(metal) {
  const symbol = SYMBOLS[metal];
  if (!symbol) throw new Error("Unknown metal");

  const url = `${BASE_URL}/${symbol}/INR`;

  const res = await fetch(url, {
    headers: {
      "x-access-token": import.meta.env.VITE_GOLD_API_KEY,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch from GoldAPI");
  }

  const data = await res.json();

  return {
    name: data.metal, 
    price: data.price,
    prevOpen: data.open_price,
    prevClose: data.prev_close_price,
    change24h: data.ch, 
    symbol: data.currency,
    lastUpdated: new Date(data.timestamp * 1000).toLocaleTimeString(),
    date: new Date(data.timestamp * 1000).toLocaleDateString(),
  };
}
