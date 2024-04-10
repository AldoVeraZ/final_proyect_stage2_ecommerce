import { useContext, useState } from "react";
import { faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context/CartContext";
import Button from "./Button";
import Modal from "./Modal";

function Cart() {
  const { moviesCartList } = useContext(CartContext);
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="cart__container">
        <Button
          icon={faShoppingCart}
          className="cart__navbar-button"
          action={() => setOpen(!open)}
        />
        {moviesCartList.length ? (
          <div className="cart__badge">
            <span>
              {moviesCartList.reduce((acc, movie) => acc + movie.quantity, 0)}
            </span>
          </div>
        ) : undefined}
      </div>
      <Modal show={open}>
        <Button icon={faClose} className="" action={() => setOpen(!open)} />
        Modal
      </Modal>
    </>
  );
}

export default Cart;
