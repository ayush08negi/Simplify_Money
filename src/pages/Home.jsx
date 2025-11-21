import Tile from "../components/Tile"

const METALS = ["gold", "silver", "platinum"]

export default function Home() {
  return (
    <div>
    <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
  Live Metal Prices
</h1>


      <div className="grid sm:grid-cols-3 gap-4">
        {METALS.map((m) => (
          <Tile key={m} metal={m} />
        ))}
      </div>
    </div>
  )
}
