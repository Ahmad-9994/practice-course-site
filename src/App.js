import { BrowserRouter, Route, Routes } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home";
import Contact from "./Contact"
import About from "./About";
import Service from "./Service";
import "./style.css"
import "./App.css"
import Errorpage from "./Errorpage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/service" element={<Service />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<Errorpage />}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;
