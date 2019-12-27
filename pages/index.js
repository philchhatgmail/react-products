import React from "react";
import axios from "axios";
import ProductList from "../components/Index/ProductList";
import ProductPagination from "../components/Index/ProductPagination";
import baseUrl from "../utils/baseUrl";

function Home({ products, totalPages }) {
  return (
    <div className="content-main">
      <ProductList products={products} />
      <ProductPagination totalPages={totalPages} />
    </div>
  );
}

Home.getInitialProps = async ctx => {
  const page = ctx.query.page ? ctx.query.page : "1";
  const size = 9;

  const url = `${baseUrl}/api/products`;
  const payload = { params: { page, size } };

  // Get data from server
  const response = await axios.get(url, payload);
  // Note: object will be merged with existing props

  // Return response as an object
  return response.data;
};

export default Home;
