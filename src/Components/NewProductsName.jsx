export default function NewProductsName({ products }) {
  console.log(products);
  return (
    <div>
      <h1>New Products Name</h1>
      <ul>
        {products.map((item) =>
          item.sales > item.quantity ? (
            <li>
              Name:{item.name} , Quantity:{item.quantity},Sales:{item.sales}
            </li>
          ) : (
            " "
          )
        )}
      </ul>
    </div>
  );
}
