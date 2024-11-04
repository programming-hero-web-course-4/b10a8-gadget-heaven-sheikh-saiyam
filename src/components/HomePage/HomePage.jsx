import { Outlet, useLoaderData } from "react-router-dom";
import Category from "../../Gadgets/Category";

const HomePage = () => {
  const categories = useLoaderData();
  return (
    <div className="bg-[#F6f6f6]">
      <div className="pb-28 w-11/12 mx-auto md:w-10/12 max-w-screen-2xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Explore Cutting-Edge Gadgets</h1>
        </div>
        <div className="space-y-6 md:flex md:space-y-0 gap-4 mt-8">
          <div className="md:w-3/12 lg:w-2/12">
            <Category categories={categories}></Category>
          </div>
          <div className="w-full">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
