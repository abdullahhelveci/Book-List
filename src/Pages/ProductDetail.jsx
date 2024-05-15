import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {

  const [book, setBook] = useState(false);
  console.log(book)

  const {id} = useParams();

  useEffect(()=> {
      axios
      .get("http://localhost:5000/books/"+id)
      .then((res)=> setBook(res.data))
      .catch((errr) => console.log(errr));
  },[id])
  return (
    <div style={{display:'flex', flexDirection:'column',alignItems:'center', marginTop:'20px',}}>
    <h1>{book.title}</h1>
    <img style={{maxWidth:'300px', borderRadius:'40px'}} src={book.image} alt={book.title} />
    <p><strong>Yazar:</strong> {book.author}</p>
    <p><strong>Yıl:</strong> {book.year}</p>
    <p><strong>Sayfa Sayısı:</strong> {book.page}</p>
    <p><strong>Açıklama:</strong> {book.description}</p>
  </div>
  )
}

export default ProductDetail
