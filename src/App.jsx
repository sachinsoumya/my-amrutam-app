import "../src/index.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Shop from "./Shop";
import ProdDetails from "./ProdDetails";
import InDetails from "./InDetails";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/shop" element={<Shop />} />
            <Route path = "/forum" element = {<div>Forum pages</div>} />
            <Route path="/details" element={<ProdDetails />} />
            <Route path="/ingredients" element={<InDetails/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
