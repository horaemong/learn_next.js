import hello from "./hello.js";
export default function Cart() {
  let cart = ["Tomato", "Pasta", "Coconut"];
  return (
    <div>
      {hello()}
      <p>-------------------</p>
      <h4 className="title">Cart</h4>
      <CartItem item={cart[0]}></CartItem>
      <CartItem item={cart[1]}></CartItem>
    </div>
  );
}

function CartItem(props) {
  return (
    <div className="cart-item">
      <p>{props.item}</p>
      <p>$40</p>
      <p>1개</p>
      <Btn color="blue"></Btn>
    </div>
  );
}

function Btn(props) {
  return <button style={{ background: props.color }}>버튼임</button>;
}
