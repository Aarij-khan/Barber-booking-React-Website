import Navbar from "./navbar";
import Hero from "./hero";
import Appointment from "./appointment";
import About from "./About";
import Footer from "./footer";
function Merge() {
  return (
    <div>
    <Navbar/>
      <Hero/>
      <About/>
      <Appointment/>
      <Footer/>
    </div>
  )
}

export default Merge