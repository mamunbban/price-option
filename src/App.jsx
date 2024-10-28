
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceOptions from './components/PriceOptions/PriceOptions'

// import DaisyNav from './components/DaisyNav/DaisyNav'

function App() {


  return (
    <>
    {/* <DaisyNav></DaisyNav> */}
    <Navbar></Navbar>
   
      <h1 className='text-3xl bg-rose-600' >Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
