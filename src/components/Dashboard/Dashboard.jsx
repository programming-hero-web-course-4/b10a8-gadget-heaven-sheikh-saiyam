import { useEffect, useState } from "react";
import { getAddToAllCart, getWishlist } from "../utility/localStorage";
import "react-tabs/style/react-tabs.css";
import modalImg from "../../assets/Group.png";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
const Dashboard = () => {
  const navigate = useNavigate();
  const [gadget, setGadget] = useState([]);
  const [gadgetWish, setGadgetWish] = useState([]);
  const [isCartIsEmpty, setIsCartIsEmpty] = useState();
  useEffect(() => {
    const cart = getAddToAllCart();
    setGadget(cart);
    // function for disable the purchase btn if cart is empty
    setIsCartIsEmpty(cart.length === 0);
    // function for disable the purchase btn if cart is empty
  }, []);

  useEffect(() => {
    const wishlist = getWishlist();
    setGadgetWish(wishlist);
  }, []);

  const totalCost = gadget.reduce((sum, gadget) => sum + gadget.price, 0);

  // function to sort data by price
  const handleSortByPrice = () => {
    const sort = [...gadget].sort((a, b) => b.price - a.price);
    setGadget(sort);
  };

  // Function to clear all localStorage data
  const clearLocalStorage = () => {
    localStorage.removeItem("Cart");
    setGadget([]);
  };

  // Function to clear all wishlist data
  const clearWishlist = () => {
    localStorage.removeItem("Wishlist");
    toast.success("Wishlist Clear");
    setGadgetWish([]);
  };

  // function for active cart&wishlist btn
  const [isActive, setIsActive] = useState({
    isActive: true,
    status: "cart",
  });

  const handleIsActive = (status) => {
    if (status === "cart") {
      setIsActive({
        isActive: true,
        status: "cart",
      });
    } else {
      setIsActive({
        isActive: false,
        status: "wishlist",
      });
    }
  };
  // function for active cart&wishlist btn

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dashboard || Gadget Heaven</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="bg-[#9538E2] pt-12 pb-8">
        <div className="text-center text-white">
          <div className="w-11/12 mx-auto">
            <h1 className="font-bold text-3xl">Dashboard</h1>
            <p className="text-center mt-2 md:text-lg">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to{" "}
              <br className="hidden md:block" /> the coolest accessories, we
              have it all!
            </p>
          </div>
        </div>
      </div>
      {/* btn div */}
      <div className="bg-[#9538E2]">
        <div className="flex gap-3 flex-wrap justify-center pb-10">
          <button
            onClick={() => handleIsActive("cart")}
            className={`btn btn-wide rounded-full border-2 font-bold text-lg ${
              isActive.status === "cart"
                ? "text-[#9538E2] bg-white"
                : "text-[#f2f2f3] bg-transparent"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => handleIsActive("wishlist")}
            className={`btn btn-wide rounded-full border-2 font-bold text-lg ${
              isActive.status === "wishlist"
                ? "text-[#9538E2] bg-white"
                : "text-[#f2f2f3] bg-transparent"
            }`}
          >
            WishList
          </button>
        </div>
        {isActive.status === "cart" ? (
          // cart div
          <div className="bg-[#f6f6f6] pt-12 pb-24">
            <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl ">
              {/* sort by & purchase div  */}
              <div className="mb-12 flex justify-between items-center gap-4 flex-wrap">
                <div>
                  <h1 className="text-2xl font-bold ">
                    Cart:{" "}
                    <span className="font-semibold">
                      {gadget.length === 0
                        ? "No item selected"
                        : `${gadget.length}item`}
                    </span>
                  </h1>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <h1 className="text-2xl font-bold">
                      Total Cost : ${totalCost}
                    </h1>
                  </div>
                  <div>
                    <button
                      onClick={handleSortByPrice}
                      className="border-[#9538E2] px-12 border-2 btn rounded-full bg-white text-[#9538E2] hover:bg-[#9538E2] hover:text-white hover:border-none"
                    >
                      Sort By Price
                    </button>
                  </div>
                  <div>
                    <button
                      disabled={isCartIsEmpty}
                      onClick={() => {
                        document.getElementById("my_modal_1").showModal();
                      }}
                      className="px-8 border-2 btn rounded-full bg-[#9538E2] text-white  hover:bg-white hover:text-[#9538E2] hover:border-none"
                    >
                      Purchase
                    </button>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <dialog
                      id="my_modal_1"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <div className="text-center">
                          <div>
                            <img
                              className="mx-auto h-16 mb-5"
                              src={modalImg}
                              alt=""
                            />
                          </div>

                          <div>
                            <h1 className="text-2xl font-bold mb-2">
                              Payment Successful
                            </h1>
                            <hr className="border mb-2" />
                          </div>
                          <div>
                            <p className="text-[#6b6b6f] mb-2 font-semibold">
                              Thanks For Purchasing
                            </p>
                            <p className="text-[#6b6b6f] mb-4 font-semibold">
                              Total: ${totalCost}
                            </p>
                          </div>
                        </div>
                        <div className="text-center">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                              onClick={() => {
                                clearLocalStorage();
                                navigate("/");
                              }}
                              className="btn w-full rounded-full font-bold btn-active"
                            >
                              Close
                            </button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </div>
                </div>
              </div>
              {/* sort by & purchase div  */}

              {/* cart div */}
              <div className="space-y-4">
                {gadget.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6">
                    <div className="space-y-4 sm:flex sm:space-y-0 gap-4 items-center">
                      <div className="w-full sm:w-4/12">
                        <img
                          className="w-full h-[140px] border-2 rounded-2xl"
                          src={item.product_image}
                          alt=""
                        />
                      </div>
                      <div className="w-full flex justify-between item-center gap-4">
                        <div className="space-y-2">
                          <h1 className="font-bold text-2xl">
                            {item.product_title}
                          </h1>
                          <p className="text-[#6b6b6f] text-lg">
                            {item.description}
                          </p>
                          <p className="font-semibold ">Price: ${item.price}</p>
                        </div>
                        <div>
                          <button
                            className="rounded-full border border-red-500 
                      bg-white h-12 px-3"
                          >
                            ❌
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* cart div */}
            </div>
          </div>
        ) : (
          // cart div
          // wishlist div
          <div className="bg-[#f6f6f6] pt-12 pb-24">
            <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl ">
              {/* wishlist clear div */}
              <div className="mb-12 flex justify-between items-center gap-4 flex-wrap">
                <div>
                  <h1 className="text-2xl font-bold ">
                    Wishlist:{" "}
                    <span className="font-semibold">
                      {gadgetWish.length === 0
                        ? "No item selected"
                        : `${gadgetWish.length}item`}
                    </span>
                  </h1>
                </div>
                <div className="flex justify-between items-center gap-4">
                  <div>
                    <button
                      onClick={clearWishlist}
                      className="px-8 border-2 btn rounded-full bg-[#9538E2] text-white  hover:bg-white hover:text-[#9538E2] hover:border-none"
                    >
                      Clear Wishlist
                    </button>
                  </div>
                </div>
              </div>
              {/* wishlist clear div */}

              {/* cart div */}
              <div className="space-y-4">
                {gadgetWish.map((item, index) => (
                  <div key={index} className="bg-white rounded-2xl p-6">
                    <div className="space-y-4 sm:flex sm:space-y-0 gap-4 items-center">
                      <div className="w-full sm:w-4/12">
                        <img
                          className="w-full h-[190px] border-2 rounded-2xl"
                          src={item.product_image}
                          alt=""
                        />
                      </div>
                      <div className="w-full flex justify-between item-center gap-4">
                        <div className="space-y-2">
                          <h1 className="font-bold text-2xl">
                            {item.product_title}
                          </h1>
                          <p className="text-[#6b6b6f] text-lg">
                            {item.description}
                          </p>
                          <p className="font-semibold ">Price: ${item.price}</p>
                          <div>
                            <button className="btn px-8  bg-[#9538E2] text-white rounded-full">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                        <div>
                          <button
                            className="rounded-full border border-red-500 
                      bg-white h-12 px-3"
                          >
                            ❌
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* cart div */}
            </div>
          </div>
          // wishlist div
        )}
      </div>
    </div>
  );
};

export default Dashboard;
