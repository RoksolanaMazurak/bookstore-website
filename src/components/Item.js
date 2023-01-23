import "./Item.css";

function Item(props) {
  return (
    <div className="item">
      <img src={props.img} alt="Book cover" className="item__image" />
      <div className="item__heading">
        <h3 className="item__heading_header">{props.title}</h3>
        <p className="item__heading_subheader">{props.author}</p>
      </div>
    </div>
  );
}

export default Item;
