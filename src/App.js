import React,{useState,useEffect} from "react";
import Products from "./components/Products";
import axios from 'axios'
const App = () => {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(3);
  const [page,setPage]=useState(1);
  const [tcount,setTcount]=useState(0);
  useEffect(() => {
    const getProducts=async()=>{
      axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`).then((res)=>{setProducts(res.data);
      setTcount(Number(res.headers["x-total-count"]));
    });
      
    }
    getProducts();
    console.log(products);
  }, [ limit,page ])
  
 
  return (
  <div>
    {/* TODO: Code here */}
    <Products products={products} setProducts={setProducts} limit={limit} setLimit={setLimit} page={page}
    setPage={setPage} tcount={tcount} setTcount={setTcount} />
    
  </div>);
};

export default App;