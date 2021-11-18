import { Link } from "react-router-dom";

const ItemCard = ({ product }) => {
  return (
    <article className="group">
      <Link to={`/item/${product.id}`}>
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          ${product.price}
        </p>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver detalles
        </button>
      </Link>
    </article>
  );
};

export default ItemCard;
