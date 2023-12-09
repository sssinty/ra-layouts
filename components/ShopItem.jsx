
function ShopItem(props) {

  return(
    <div className="product-item">
      {props.card.map((elem, index) => {
        return <div key={index} className="product-item-list">
        <img src={elem.img} className="img-list"></img>
            <h2 className="name ">{elem.name}</h2>
            <h6 className="color">{elem.color}</h6>
            <div className="price__block">
                <span className="price">{elem.price}</span>
                <button className="add__cart">add to cart</button>
            </div>
        </div>
      })}
    </div>
  )
}

export default ShopItem;