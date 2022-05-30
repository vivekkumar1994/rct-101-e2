import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import Product from "./Product";
import {Flex,Grid} from '@chakra-ui/react'

const Products = ({products,setProducts,limit,setLimit,page,setPage,tcount}) => {
  // TODO: Remove below const and instead import them from chakra
  
  return (
    <Flex direction="column">
      {/*  AddProduct */}
      <AddProduct products={products} setproducts={setProducts}/>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {/* List of Products */}
        {products.map((product)=>(
      <div key={product.id} >
         <Product product={product}/>
         </div>
      )
    )}
      </Grid>
      {/* Pagination */}
      <Pagination limit={limit} setLimit={setLimit} page={page} setpage={setPage} tcount={tcount} />
    </Flex>
  );
};

export default Products;