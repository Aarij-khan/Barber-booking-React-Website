import { BrowserRouter ,Route,Routes } from "react-router-dom";

import Booking from "./booking";
import Dashboard from "./dashboard";
import Merge from "./merge";
import Signin from "./signin";
import Viewpage from "./Viewpage";

function App() {
  return (
    <div>
      
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<Merge/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/viewpage" element={<Viewpage/>} />
      </Routes>
     </BrowserRouter>
    </div>
  ) 
}

export default App