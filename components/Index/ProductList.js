import { Card } from "semantic-ui-react";
import Cards from "../ui/Cards";

function ProductList({ products }) {
  function mapProductsToItems(products) {
    return products.map(product => ({
      header: product.name,
      image: product.mediaUrl,
      color: "teal",
      meta: `$${product.price}`,
      fluid: true,
      childKey: product._id,
      href: `/product?_id=${product._id}`
    }));
  }

  return (
    <>
      <Card.Group
        itemsPerRow={3}
        centered
        stackable
        items={mapProductsToItems(products)}
      />
      {/* <Cards items={mapProductsToItems(products)} /> */}
    </>
  );
}

export default ProductList;
