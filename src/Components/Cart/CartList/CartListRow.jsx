import "./CartListRow.css";
import TrashIcon from "./TrashIcon";
import { CartContext } from "../../../Context/CartContext";
import { StyleContext } from "../../../Context/StyleContext";
import { useContext } from "react";

const CartListRow = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  const { redButton } = useContext(StyleContext);

  return (
    <tbody key={item.name} className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <img src={item.image} alt={item.shortname} />
          {item.shortname}
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${item.price}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {item.quantity}
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          ${item.price * item.quantity}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          <button
            onClick={() => removeItem(item.id)}
            className={redButton}
          >
            <TrashIcon />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartListRow;
