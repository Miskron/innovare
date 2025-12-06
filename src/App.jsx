import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Vidio_player from "@/components/ui/vidio_player"
import  "@/components/ui/pdf-worker.jsx"
import Pdf from "@/components/ui/pdf"

function App() {
  return (

    <div className="pointer-events-auto">
      <Card className="p-4 mb-4">
        <h1 className="text-2xl font-bold mb-2">Welcome to Innovare Market</h1>
        <p className="text-gray-600 mb-4">
          Discover innovative products and solutions from creators around the world.
        </p>
        <Vidio_player />
        <Button variant="primary">Get Started</Button>
      </Card>

      <Pdf/>
    </div>
  )
}

export default App