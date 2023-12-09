
function ShopCard(props) {

  return(
    <div className="product-card">
      {props.card.map((elem, index) => {
        return <div key={index} className="product-card-list">
            <h2 className="name ">{elem.name}</h2>
            <h6 className="color">{elem.color}</h6>
            <img src={elem.img} className="img "></img>
            <div className="price__block">
                <span className="price">{elem.price}</span>
                <button className="add__cart">add to cart</button>
            </div>
        </div>
      })}
    </div>
  )
}
export default ShopCard;