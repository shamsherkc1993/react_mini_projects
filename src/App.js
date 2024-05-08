import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Error from "./components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./components/single/SinglePage";
import Product from "./components/Product";
import Contact from "./components/Contact";
import HomeSingle from "./components/single/HomeSingle";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SinglePage />} />
        <Route
          path="/homesingleproduct/:homeproductid"
          element={<HomeSingle />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
