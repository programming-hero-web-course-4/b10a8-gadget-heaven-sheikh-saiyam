import { toast } from "react-toastify";
// for add to cart
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
  
  toast.success("Product Added Successfully");
};
// for add to cart
// for add to wishlist
// for add to wishlist
export { addToCart, getAddToAllCart };
