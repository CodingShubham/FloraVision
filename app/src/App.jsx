import  {Navbar}  from "./Navbar"
import Hero from "./Hero"
import heroPlant from "./assets/images/heroPlant.jpg"

function App() {
  return (
    
    <div className="bg-primary-bg  min-h-screen relative ">

      

<img  className='absolute  object-cover z-0 min-h-full min-w-full -translate-y-[80px]' src={heroPlant} />
    <Navbar/>
    <Hero/>
    </div>
  )
}
export default App