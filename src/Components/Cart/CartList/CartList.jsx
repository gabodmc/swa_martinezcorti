import { Link } from "react-router-dom";
import CartListRow from "./CartListRow";
import "./CartList.css";

const CartList = ({ items, total, clear }) => {
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
      </div>
      <div className="checkout-total">
        <p>Total: $ {total()}</p>
        
        <button
          type="button"
          className="border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        ><Link to="/checkout">
          Finalizar compra
          </Link>
        </button>
      
        <button
          onClick={clear}
          className="border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Vacar carrito
        </button>
      </div>

      
    </>
  );
};

export default CartList;
