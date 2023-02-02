import Item from "./Item";

function Items(props) {
  return (
    <div className="container">
      {props.data.map(({ title, author, image }, id) => (
        <Item title={title} author={author} image={image} id={id} />
      ))}
    </div>
  );
}

export default Items;
