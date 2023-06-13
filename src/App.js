import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navar.jsx";
import ProductCard from "./components/ProductCard.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ProductCard
        imageUrl="/video-image/prueba.jpg"
        altText="Product Image 2"
        price="900"
        title="Green suit"
        brand="Dan suits"
        description="Green suit with shiny material. Available in various sizes. Suitable for parties and other functions"
        themeColor="rgb(1, 113, 53)"
      />
    </div>
  );
}

export default App;
