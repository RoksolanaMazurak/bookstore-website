import "./CardItem.css";

function CardItem(props) {
  return (
    <>
      <div className="card-wrapper">
        <div className="genre-tag">{props.genre}</div>
        <img src={props.image}></img>
        <h3 className="card_header">{props.title}</h3>
        <p className="card_subheading">{props.author}</p>
        <h3 className="card_price">
          Price: <span>{props.price}$</span>
        </h3>
        <button>Load more</button>
      </div>
    </>
  );
}
export default CardItem;
