const Storage = (cartItems) => {
  // Save cart items to session storage
  localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
};

export const CartReducer = (state, action) => {
  let index = -1;

  if (action.payload) {
    // Find item by product ID
    index = state.cartItems.findIndex(x => x.id === action.payload.id);
  }

  let newCartItems = [...state.cartItems]; // copy of cart to update

  switch (action.type) {
    case "ADD":
    case "INCQTY":
      if (index === -1) {
        // Add new item with quantity 1
        newCartItems = [...state.cartItems, { ...action.payload, quantity: 1 }];
      } else {
        // Increase quantity
        newCartItems = state.cartItems.map((item, i) =>
          i === index ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      Storage(newCartItems);
      return { ...state, cartItems: newCartItems };

    case "DECQTY":
      // Decrease quantity but not below 1
      newCartItems = state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );
      Storage(newCartItems);
      return { ...state, cartItems: newCartItems };

    case "REMOVE":
      // Remove item
      newCartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      Storage(newCartItems);
      return { ...state, cartItems: newCartItems };

    case "CLEAR":
      newCartItems = [];
      Storage(newCartItems);
      return { ...state, cartItems: newCartItems };

    default:
      return state;
  }
};
