import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
  { id: 1, name: "Shoes", description: "Running shoes", price: "£10", image: : "" },
  { id: 2, name: "Macbook", description: "Apple Macbook", price: "£20", image: "https://www.krcs.co.uk/macbook-pro-13-inch-intel"},
];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((products) => (
          <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={Product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
