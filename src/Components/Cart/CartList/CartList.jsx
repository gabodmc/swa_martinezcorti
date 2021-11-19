import { Link } from "react-router-dom";
import { useContext } from "react";
import CartListRow from "./CartListRow";
import "./CartList.css";
import { StyleContext } from "../../../Context/StyleContext";

const CartList = ({ items, total, clear }) => {

  const { greenButton, redButton } = useContext(StyleContext);
  
  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Producto
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                    >
                      Valor unitario
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase "
                    >
                      Cantidad
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Subtotal
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                    >
                      Borrar
                    </th>
                  </tr>
                </thead>
                {items.map((item) => (
                  <CartListRow item={item} key={item.id} />
                ))}
              </table>
            </div>
          </div>
        </div>
        <div className="total">
          {" "}
          <p>Total: $ {total()}</p>
        </div>
      </div>

      <div className="checkout-total">
        <Link to="/checkout">
          <button
            type="button"
            className={greenButton}
          >
            Finalizar compra
          </button>
        </Link>
        <button
          onClick={clear}
          className={redButton}
        >
          Vaciar carrito
        </button>
      </div>
    </>
  );
};

export default CartList;
