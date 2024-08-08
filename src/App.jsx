import { useEffect, useState } from "react"
import { Footer, Home, Loading, Projects, Skills_NRM, Skills_TML } from "./components"

function App() {

  const [loading ,setLoading] = useState(false);
  const [overview, setOverview] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6500)
  }, [])
  

  return (loading) ? (<Loading />) : (
    <>
      <Home />
      {
        (overview) ? (<Skills_NRM setOverview = {setOverview} />) : (<Skills_TML setOverview = {setOverview} />)
      }
      <Projects />
      <Footer />

      {/* <Test /> */}
      
    </>
  )
}

export default App
