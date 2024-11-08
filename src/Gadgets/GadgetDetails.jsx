import { useEffect, useState } from "react";
import { Link, useLoaderData, useLocation, useParams } from "react-router-dom";
import {
  addToCart,
  addToWishlist,
  getAddToAllCart,
  getWishlist,
} from "../components/utility/localStorage";
import { Helmet } from "react-helmet";
const GadgetDetails = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
  const { product_id } = useParams();
  const gadgetDetail = useLoaderData();

  const [gadgetDetails, setGadgetDetails] = useState({});
  const [isExistInWishList, setExistInWishList] = useState(false);
  const [isExistInAddToCart, setIsExistInAddToCart] = useState(false);
  useEffect(() => {
    const details = gadgetDetail.find(
      (detail) => detail.product_id == product_id
    );
    setGadgetDetails(details);

    const carts = getAddToAllCart();
    const isExist = carts.find(
      (item) => item.product_id == gadgetDetails.product_id
    );
    if (isExist) {
      setIsExistInAddToCart(true);
    }

    const wishlist = getWishlist();
    const isExistWishlist = wishlist.find(
      (item) => item.product_id == details.product_id
    );
    if (isExistWishlist) {
      setExistInWishList(true);
    }
  }, [gadgetDetail, gadgetDetails.product_id, product_id]);

  // function for add to cart
  const handleAddToCart = (gadgetDetails) => {
    addToCart(gadgetDetails);
    setIsExistInAddToCart(true);
  };
  // function for add to cart

  // function for add to wishlist
  const handleAddToWishList = (gadgetDetails) => {
    addToWishlist(gadgetDetails);
    setExistInWishList(true);
  };
  // function for add to wishlist

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
    warranty,
  } = gadgetDetails;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Details || Gadget Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-[#9538E2] py-12">
        <div className="w-11/12 mx-auto">
          <div className="text-center text-white">
            <h1 className="font-bold text-3xl">Product Details</h1>
            <p className="text-center mt-2 md:text-lg">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to{" "}
              <br className="hidden md:block" /> the coolest accessories, we
              have it all!
            </p>

            <div className="mt-4 flex gap-3 flex-wrap justify-center">
              <Link
                to="/"
                className="btn-wide btn bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-200"
              >
                Go to product page
              </Link>
              <Link
                to="/dashboard"
                className="btn-wide btn bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-200"
              >
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* main div  */}
      <div className="bg-[#f6f6f6] py-12">
        <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl">
          <div className="bg-white p-4 rounded-2xl space-y-6 lg:flex items-center lg:space-y-0 gap-6">
            {/* img div */}
            <div className="lg:w-5/12">
              <img
                className="border-2 w-full rounded-2xl h-[503px]"
                src={product_image}
                alt=""
              />
            </div>
            {/* img div */}

            {/* text div  */}
            <div>
              <div>
                <h1 className="text-3xl font-bold mb-2">{product_title}</h1>
                <p className="font-semibold text-lg text-[#6b6b6f] mb-2">
                  Price: ${price}
                </p>
                {/* availability */}
                <button
                  className={
                    availability
                      ? "bg-[#ebf6e7] border-[#309c08] border-2 text-[#309c38] rounded-full py-1 px-4"
                      : "bg-[#fce8e7] border-[#c72c2c] border-2 text-[#a31c1c] rounded-full py-1 px-4"
                  }
                >
                  {availability ? "In stock" : "Stock out"}
                </button>
                {/* availability */}
                <div className="my-2">
                  <p className="text-[#6b6b6f]">Description: {description}</p>
                </div>
                {/* specification */}
                <div>
                  <h1 className="font-bold mb-2">Specifications:</h1>
                  <div className="list-decimal text-[#6b6b6f]">
                    {specification &&
                      specification.map((spec, index) => (
                        <li key={index}>{spec}</li>
                      ))}
                  </div>
                </div>
                {/* specification */}
                {/* warranty */}
                <div className="my-2">
                  <h1 className="font-bold">Warranty: {warranty}</h1>
                </div>
                {/* warranty */}
                {/* rating */}
                <div>
                  <h1 className="font-bold mb-1">Rating ⭐</h1>
                  <p className="flex items-center gap-2">
                    {"⭐".repeat(rating > 4.6 ? Math.round(rating) : rating)}
                    <span className="bg-[#eeeeee] rounded-2xl py-1 px-3">
                      {rating}
                    </span>
                  </p>
                </div>
                {/* rating */}

                {/* buttons div */}
                <div className="flex gap-3 mt-4 ">
                  <button
                    disabled={isExistInAddToCart}
                    onClick={() => handleAddToCart(gadgetDetails)}
                    className="btn md:btn-wide bg-[#9538E2] text-white rounded-full"
                  >
                    Add To Card
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                  <button
                    disabled={isExistInWishList}
                    onClick={() => handleAddToWishList(gadgetDetails)}
                    className="rounded-full border-2 border-[#d1d1d1] btn bg-transparent "
                  >
                    <i className="fa-regular fa-heart text-lg"></i>
                  </button>
                </div>
                {/* buttons div */}
              </div>
            </div>
            {/* text div  */}
          </div>
        </div>
        {/* main div  */}
      </div>
      {/* main div  */}
    </div>
  );
};

export default GadgetDetails;
