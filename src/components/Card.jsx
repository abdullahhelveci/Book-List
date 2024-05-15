import { Link } from "react-router-dom"

const Card = ( {book} ) => {
  return (
    <div className="card shadow rounded p-1">
        <img className="img-fluid rounded" src={book.image}/>
        <div className="card-body">
            <p>{book.title}</p>
            <p>{book.author}</p>

            <Link to={'/ürün/'+book.id} className="btn btn-primary w-100" >ürün detayı</Link>
            
        </div>
    </div>
  )
}

export default Card


//<Link to={`/ürün/${book.id}`} />
//<Link to={'/ürün/'+book.id}>
