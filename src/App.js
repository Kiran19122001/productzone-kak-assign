import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import Home from "./components/Home";
import ProductItem from "./components/ProducItem";
import { Provider } from "react-redux";
import store from "./store/store";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductItem />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
