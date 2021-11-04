import { Link } from "react-router-dom"

const ItemCard = ({item, id}) => 
{
    return (
    <article key={id}>
    <img alt={item.name} src={item.image} />
    <h3 id="brand">{item.shortname}</h3>
    <p id="price">${item.price}</p>
    <Link to={`/item/${item.id}`}>
      {/* <Button variant="secondary" size="sm"> */}
        Ver detalle
      {/* </Button>{" "} */}
    </Link>
  </article>
  )


}

export default ItemCard