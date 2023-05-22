export default function ProductsName({ products }) {
  console.log(products);
  return (
    <div>
      <h1>ProductsName</h1>
      {products.map((item) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
}
