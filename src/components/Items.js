import Item from "./Item";

function Items(props) {
  return (
    <div className="container">
      <Item
        title={props.data[0].title}
        author={props.data[0].author}
        img={props.data[0].image}
      />
      <Item
        title={props.data[1].title}
        author={props.data[1].author}
        img={props.data[1].image}
      />
      <Item
        title={props.data[2].title}
        author={props.data[2].author}
        img={props.data[2].image}
      />
      <Item
        title={props.data[3].title}
        author={props.data[3].author}
        img={props.data[3].image}
      />
    </div>
  );
}

export default Items;
