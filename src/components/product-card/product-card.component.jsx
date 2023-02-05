import "./product-card.styles.scss";
const ProductCard = ({ product }) => {
  const { name, description, price } = product;
  return (
    <div className="product-card">
      <div className="details">
        <div className="name">
          <h3>{name}</h3>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="price">
        <span>${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
