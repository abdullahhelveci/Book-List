import { Link } from "react-router-dom"

const Header = () => {
  return (
    
<nav className="navbar bg-body-tertiary d-flex">
  <div className="container-fluid">
    <Link className="navbar-brand" to={"/"}>Kitap Listeleme</Link>


    <div><Link to="/">Anasayfa</Link></div>
    <div><Link to="/ürünler">Ürünler</Link></div>
  </div>

  
</nav>
  )
}

export default Header
