import { useEffect, useState } from "react"
import { Home, Loading, Skills_NRM } from "./components"
import { Board } from "./components/Svgs"

function App() {

  const [loading ,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6500)
  }, [])

  return (loading) ? (<Loading />) : (
    <>
      <Home />
      <Skills_NRM />
    </>
  )
}

export default App
