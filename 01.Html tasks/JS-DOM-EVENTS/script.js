// Məhsulların məlumatı
const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description:
        "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
    }
  ];
  

  function displayProducts() {
    const container = document.getElementById("product-container");
  

    products.forEach(product => {
      
      const card = document.createElement("div");
      card.classList.add("product-card");
  
    
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.title;
  
      
      const title = document.createElement("h3");
      title.textContent = product.title;
  
    
      const description = document.createElement("p");
      description.textContent = product.description;
  
      
      const price = document.createElement("p");
      price.innerHTML = `<strong>$${product.price}</strong>`;
  
    
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(price);
    }}