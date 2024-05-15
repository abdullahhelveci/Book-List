import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage';
import ProductsPage from './Pages/ProductsPage';
import UndefinedPage from './Pages/UndefinedPage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './Pages/ProductDetail';

function App() {


  return (
  <BrowserRouter>
<Header />

  <Routes>
    <Route path='/' element={<MainPage />} />
    <Route path='/ürünler' element={<ProductsPage />} />


    <Route path='*' element={<UndefinedPage />}/>
    <Route path='/ürün/:id' element={<ProductDetail />}/>
  </Routes>

  <Footer />
  </BrowserRouter>);
}

export default App
