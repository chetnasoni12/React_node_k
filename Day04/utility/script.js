import products from "./data.js";
console.log(products);

 const p = products.map((product) => ({

    category:product.category,

    item:product.productname,
 }));

  console.log(p);

  