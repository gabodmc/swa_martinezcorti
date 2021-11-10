import "./CartListRow.css";
import TrashIcon from "./TrashIcon";
import { CartContext } from "../../../Context/CartContext";
import { useContext } from "react";

const CartListRow = ({ item }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <tbody key={item.item.name} className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <img src={item.item.image} alt={item.item.shortname} />
          {item.item.shortname}
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${item.item.price}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {item.quantity}
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${item.item.price * item.quantity}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <button
            onClick={() => removeItem(item.item.id)}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <TrashIcon />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartListRow;
