import { useEffect, useState } from "react";
import { getAddToAllCart } from "../utility/localStorage";

const Dashboard = () => {
  const [gadget, setGadget] = useState([]);
  console.log(gadget);
  useEffect(() => {
    const cart = getAddToAllCart();
    setGadget(cart);
  }, []);
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

      <div className="bg-[#f6f6f6] py-12">
        <div className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl ">
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
                      <button className="rounded-full border border-red-500 
                      bg-white h-12 px-3">❌</button>    
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* cart div */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
