
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Review from "./components/Review/Review";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CategoriesProducts from "./components/ProductList/CategoriesProducts";
import AllProducts from "./components/ProductList/AllProducts";
import Nav from "./components/Nav/Nav";


function App() {
  return (
    <div>
    <BrowserRouter >
    <Nav ></Nav>
      <Routes >
      
        <Route path="/" element={<Home/>}>
          <Route index element={<AllProducts/>} />  
         <Route path="/category/:category" element={<CategoriesProducts/>}/>
        </Route>
        
        <Route path="/category/:category/product/:productId" element={<ProductDetails/>}/>
        <Route path="/product/:productId" element={<ProductDetails/>}/>
        
        <Route path="/review" element={<Review/>}/>
        
        <Route path="*" element={<h1>Not found (404)</h1>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

      /* 
      import Jewelery from "./components/Catagories/Jewelery";
import Electronics from "./components/Catagories/Electronics";
import MensClothing from "./components/Catagories/MensClothing";
import WomensClothing from "./components/Catagories/WomensClothing";

        <Route path="/jewelery" element={<Jewelery/>}/>
        <Route path="/electronics" element={<Electronics/>}/>
        <Route path="/mens-clothing" element={<MensClothing/>}/>
        <Route path="/womens-clothing" element={<WomensClothing/>}/>
      */