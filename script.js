const products = [
  { name: "Stylo", stock: 10 },
  { name: "Livre", stock: 3 },
  { name: "Clavier", stock: 0 }
]


function stockStatus(products) {
  const result = [];

  for (const product of products) {
    let status;

    if (product.stock === 0) {
      status = "out";
    } else if (product.stock < 5) {
      status = "low";
    } else {
      status = "ok";
    }

    result.push({
      name: product.name,
      stock: product.stock,
      status: status
    });
  }

  return result;
}



const result = stockStatus(products);
console.log(result);