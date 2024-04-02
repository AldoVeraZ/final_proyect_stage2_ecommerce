import { useContext } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
import Icon from "./Icon";

function Cart() {
  const { moviescartList } = useContext(CartContext);

  return (
    <button>
      <Icon icon={faShoppingCart} />
    </button>
  );
}

export default Cart;
