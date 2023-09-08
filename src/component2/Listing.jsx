import React from "react";
import { Card } from "./Card";


export const Listing = () => {
  const [products, setProducts] = React.useState([]);

  return <Card products={products} />;

};