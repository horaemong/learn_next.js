export default function List() {
  let products = ["Tomato", "Pasta", "Coconut"];
  return (
    <div>
      <h2>Products</h2>
      {products.map((product, index) => {
        return (
          <div className="food" key={index}>
            <h4>{product} $40</h4>
          </div>
        );
      })}
    </div>
  );
}
