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
const getWishlist = () => {
  const wishlist = localStorage.getItem("Wishlist");
  if (wishlist) {
    const parseWishlist = JSON.parse(wishlist);
    console.log(parseWishlist);
    return parseWishlist;
  } else {
    console.log([]);
    return [];
  }
};

// Add a gadget to the wishlist
const addToWishlist = (gadget) => {
  const wishlist = getWishlist();
  // Check if the gadget already exists in the wishlist
  const isExist = wishlist.find(
    (item) => item.product_id === gadget.product_id
  );

  if (!isExist) {
    wishlist.push(gadget);
    localStorage.setItem("Wishlist", JSON.stringify(wishlist));
    toast.success("Product Added to Wishlist Successfully");
  } else {
    toast.info("Product is already in the Wishlist");
  }
};
// for add to wishlist

export { addToCart, getAddToAllCart, getWishlist, addToWishlist };
