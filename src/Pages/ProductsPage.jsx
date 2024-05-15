import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const ProductsPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div >
      <div className="card-container">
      {books.map((book) => (
        <Card key={book.id} book={book} />
      ))}
      </div>
    </div>
  );
};

export default ProductsPage;
