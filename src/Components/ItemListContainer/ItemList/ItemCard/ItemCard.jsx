import { Link } from "react-router-dom";

const ItemCard = ({ item, id }) => {
  return (
    <article key={id}>
      <img alt={item.name} src={item.image} />
      <h3 id="brand">{item.shortname}</h3>
      <p id="price">${item.price}</p>
      <Link to={`/item/${item.id}`}>
        {/* <Button variant="secondary" size="sm"> */}
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver detalles
        </button>
        {/* </Button>{" "} */}
      </Link>
    </article>
  );
};

export default ItemCard;
