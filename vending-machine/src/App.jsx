import "./App.css";

export default function App() {
  // Sample product data with relevant Lorem Picsum IDs
  const products = [
    { id: 1, name: 'Chips', price: 1.50, image: 'https://picsum.photos/id/0/150/150' },        // Laptop (looks like chips bag)
    { id: 2, name: 'Chocolate', price: 1.20, image: 'https://picsum.photos/id/20/150/150' },     // Coffee beans (chocolate-like)
    { id: 3, name: 'Cookies', price: 1.80, image: 'https://picsum.photos/id/24/150/150' },       // Baked goods
    { id: 4, name: 'Soda', price: 2.00, image: 'https://picsum.photos/id/30/150/150' },          // Drink can
    { id: 5, name: 'Water', price: 1.00, image: 'https://picsum.photos/id/40/150/150' },         // Water bottle
    { id: 6, name: 'Candy', price: 0.90, image: 'https://picsum.photos/id/60/150/150' },         // Colorful candy-like image
    { id: 7, name: 'Gum', price: 0.75, image: 'https://picsum.photos/id/70/150/150' },           // Small packaged item
    { id: 8, name: 'Nuts', price: 1.60, image: 'https://picsum.photos/id/80/150/150' },          // Nuts and seeds
  ];

  return (
    <div className="vending-machine">
      <h1>AnyTime AnyDay Vending Machine</h1>
      
      <div className="message-display">
        <p>Please select an item</p>
      </div>
      
      <div className="displays">
        <div className="display selected-item">
          <h3>Selected Item</h3>
          <p>No Item Selected</p>
        </div>
        
        <div className="display deposit">
          <h3>Amount Deposited</h3>
          <p>$0.00</p>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">${product.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="coin-buttons">
        <button className="coin-button">10¢</button>
        <button className="coin-button">50¢</button>
        <button className="coin-button">$1</button>
      </div>
    </div>
  );
}