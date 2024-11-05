const getAddToAllCart = () => {
  const cart = localStorage.getItem("Cart");
  if (cart) {
    const parseCart = JSON.parse(cart);
    console.log(parseCart);
    return parseCart;
  } else {
    console.log([]);
    return [];
  }
};

const addToCart = (gadget) => {
  const cart = getAddToAllCart();
  // const isExist = cart.find((item) => item.product_id == gadget.product_id);
  cart.push(gadget);
  localStorage.setItem("Cart", JSON.stringify(cart));
  
  alert("Successfully Added");
};

export { addToCart, getAddToAllCart };
