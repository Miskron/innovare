import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Vidio_player from "@/components/ui/vidio_player"
import "@/components/ui/pdf-worker.jsx"
import Pdf from "@/components/ui/pdf"

function App() {
  return (

    <div className="pointer-events-auto flex flex-col space-y-6">

    
      <Card className="p-4">
        <h1 className="text-2xl font-bold mb-2">Welcome to Innovare Market</h1>
        <p className="text-gray-600 mb-4">
          Discover innovative products and solutions from creators around the world.
        </p>

        <Vidio_player src = "https://youtu.be/yIPX-FNJ9qk?si=TTft2a1ua8HKGakS"
        /> 
        <Button variant="primary" className="mt-4">Get Started</Button>
      </Card>
      <Pdf />

      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-2">About Innovare Market</h2>
        <p className="text-gray-600 mb-4">
          Innovare Market is a platform dedicated to showcasing and selling innovative products developed by creators globally. Our mission is to connect innovators with consumers looking for cutting-edge solutions.
        </p>

        <Vidio_player src = "https://youtu.be/O2QiUN-7Rjw?si=31rM3tFdgb5UaCnf" /> 
      </Card>

    </div>

  )
}

export default App
