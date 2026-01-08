import "../src/index.css";
import NavBar from "./NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./Body";
import Shop from "./Shop";
import ProdDetails from "./ProdDetails";
import InDetails from "./InDetails";
import Forum from "./Forum";
import QnA from "./QnA";
import Thoughts from "./Thoughts";
import ShopContainer from "./ShopContainer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/shop" element={<ShopContainer />}>
              <Route index element={<Shop />}  />
              <Route path="/shop/details/:id" element={<ProdDetails />} />
              <Route path="/shop/ingredients" element={<InDetails />} />
            </Route>
            <Route path="/forum" element={<Forum />}>
              <Route path="/forum/questions" element={<QnA />} />
              <Route path="/forum/thoughts" element={<Thoughts />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
