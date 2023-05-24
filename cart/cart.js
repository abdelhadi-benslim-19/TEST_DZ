// script.js
const cartItems = [
    { id: 1, name: "Item 1", price: 10, quantity: 1 },
    { id: 2, name: "Item 2", price: 20, quantity: 1 },
    { id: 3, name: "Item 3", price: 30, quantity: 1 },
  ];
  
  function renderCartItems() {
    const cartItemsContainer = document.querySelector(".cart-items");
    cartItemsContainer.innerHTML = "";
  
    cartItems.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
  
      cartItem.innerHTML = `
        <div>${item.name}</div>
        <div>Quantity: ${item.quantity}</div>
        <div>Price: $${item.price * item.quantity}</div>
        <button onclick="removeItem(${item.id})">Remove</button>
      `;
  
      cartItemsContainer.appendChild(cartItem);
    });
  
    updateCartSummary();
  }
  
  function updateCartSummary() {
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  
    document.querySelector(".total-items").textContent = totalItems;
    document.querySelector(".subtotal").textContent = subtotal;
  }
  
  function removeItem(itemId) {
    const itemIndex = cartItems.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      cartItems.splice(itemIndex, 1);
      renderCartItems();
    }
  }
  
  renderCartItems();
  