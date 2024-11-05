import { useEffect, useState } from "react";
import { addToWishlist, getAddToAllCart, getWishlist } from "../utility/localStorage";
import { NavLink } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import modalImg from "../../assets/Group.png";
import { toast } from "react-toastify";
const Dashboard = () => {
  const [gadget, setGadget] = useState([]);
  const [gadgetWish, setGadgetWish] = useState([]);
  console.log(gadget);
  useEffect(() => {
    const cart = getAddToAllCart();
    setGadget(cart);
  }, []);

  useEffect(()=>{
    const wishlist = getWishlist();
    setGadgetWish(wishlist)
  },[])

  const totalCost = gadget.reduce((sum, gadget) => sum + gadget.price, 0);

  // function to sort data by price
  const handleSortByPrice = () => {
    const sort = [...gadget].sort((a, b) => b.price - a.price);
    setGadget(sort);
  };

  // Function to clear all localStorage data
  const clearLocalStorage = () => {
    localStorage.clear();
    toast.success("Payment Successful");
    setGadget([]);
  }

  const clearWishlist = () => {
    localStorage.removeItem('Wishlist')
    setGadgetWish([]);
  }
  

  return (
    <div>
      <div className="bg-[#9538E2] py-12">
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
      <div className="hidden bg-[#9538E2]">
        <div className="flex gap-3 flex-wrap justify-center">
          {/* <NavLink
              className="btn-wide btn bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-200"
            >
              Cart
            </NavLink>
            <NavLink    
              className="btn-wide btn bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-200"
            >
              WishList
            </NavLink> */}
          <Tabs>
            <TabList>
              <Tab>Title 1</Tab>
              <Tab>Title 2</Tab>
            </TabList>

            <TabPanel></TabPanel>
            <TabPanel>
              <h2>Any content 2</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {/* btn div */}

      {/* cart div */}
      <div className="bg-[#f6f6f6] pt-12 pb-24">
        <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl ">
          {/* sort by & purchase div  */}
          <div className="mb-12 flex justify-between items-center gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-bold ">
                Cart: {gadget.length === 0 ?"No item selected":`${gadgetWish.length}item`} 
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
                  onClick={() =>
                    document.getElementById("my_modal_1").showModal()
                  }
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
                        <button onClick={clearLocalStorage} className="btn w-full rounded-full font-bold btn-active">
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
                      className="w-full h-[124px] border-2 rounded-2xl"
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
      {/* cart div */}

      {/* wishlist div */}
      <div className="bg-[#f6f6f6] pt-12 pb-24">
        <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl ">
          {/* wishlist clear div */}
          <div className="mb-12 flex justify-between items-center gap-4 flex-wrap">
            <div>
              <h1 className="text-2xl font-bold ">
                Wishlist: {gadgetWish.length === 0 ?"No item selected":`${gadgetWish.length}item`}
              </h1>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <button onClick={clearWishlist}
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
                      className="w-full h-[124px] border-2 rounded-2xl"
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
      {/* wishlist div */}

      
    </div>
  );
};

export default Dashboard;
