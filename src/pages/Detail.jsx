import { useParams, useLocation, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchMetal } from "../api/metalApi"

export default function Detail() {
    const { metal } = useParams()
    const { state } = useLocation()

    const [data, setData] = useState(state?.data || null)
    const [loading, setLoading] = useState(!data)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!data) {
            fetchMetal(metal)
                .then((res) => setData(res))
                .catch((e) => setError(e.message))
                .finally(() => setLoading(false))
        }
    }, [])

    return (
        <div className="bg-neutral-800/70 backdrop-blur-2xl 
            p-8 rounded-2xl border border-neutral-700/40 
            shadow-[0_0_25px_rgba(0,0,0,0.5)]">


            <Link to="/" className="text-sm opacity-75 mb-4 inline-block">
                ← Back
            </Link>

            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="text-red-400">{error}</p>
            ) : (
                <div className=" p-6 rounded-xl">

                    <h2 className="text-4xl font-bold mb-3 
                        bg-gradient-to-r from-yellow-400 to-orange-500 
                        bg-clip-text text-transparent drop-shadow-lg">
                        {data.name}
                    </h2>

                    <div className="border-b border-neutral-700/50 pb-3 mb-3">
                        <p className="opacity-70 text-sm mb-4">
                            Updated at {data.lastUpdated}
                        </p>
                    </div>


                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="opacity-70 text-sm">Price</p>
                            <p className="text-lg font-bold">₹{Number(data.price).toLocaleString()}</p>
                        </div>

                        <div>
                            <p className="opacity-70 text-sm">24h Change</p>
                            <p className="text-lg">{data.change24h}%</p>
                        </div>

                        <div>
                            <p className="opacity-70 text-sm">Previous Open</p>
                            <p className="text-lg">₹{data.prevOpen}</p>
                        </div>

                        <div>
                            <p className="opacity-70 text-sm">Previous Close</p>
                            <p className="text-lg">₹{data.prevClose}</p>
                        </div>
                    </div>

                    <p className="opacity-70 mt-4">Date: {data.date}</p>
                </div>
            )}
        </div>
    )
}
