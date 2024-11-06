import { toast } from "react-toastify";
// for add to cart
const getAddToAllCart = () => {
  const cart = localStorage.getItem("Cart");
  if (cart) {
    const parseCart = JSON.parse(cart);
    return parseCart;
  } else {
    return [];
  }
};

const addToCart = (gadget) => {
  const cart = getAddToAllCart();
  cart.push(gadget);
  localStorage.setItem("Cart", JSON.stringify(cart));
  toast.success("Product Added Successfully");
};
// for add to cart

// for add to wishlist
const getWishlist = () => {
  const wishlist = localStorage.getItem("Wishlist");
  if (wishlist) {
    const parseWishlist = JSON.parse(wishlist);
    return parseWishlist;
  } else {
    return [];
  }
};

// Add a gadget to the wishlist
const addToWishlist = (gadget) => {
  const wishlist = getWishlist();
  wishlist.push(gadget);
  localStorage.setItem("Wishlist", JSON.stringify(wishlist));
  toast.success("Product Added to Wishlist");
};
// for add to wishlist

export { addToCart, getAddToAllCart, getWishlist, addToWishlist };
