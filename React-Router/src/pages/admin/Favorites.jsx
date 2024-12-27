import React from "react";
import { useFavorites } from "../../context/FavoritesContext";



const FavoritesPage = () => {
  const { favorites } = useFavorites();  
  

  return (
    <div>
      <h1>Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorite products added yet!</p>
      ) : (
        <div className="product-grid">
          {favorites.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="card-body">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <span className="price">${product.price.toFixed(2)}</span>
                <span className="rating" >Rating: {product.rating.rate} </span>
                <span className="rating" >({product.rating.count} reviews)</span>
              </div>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default FavoritesPage;
