import { Link } from "react-router-dom";

const Gadget = ({ gadget }) => {
  const {product_id, product_image, product_title, price } = gadget;
  return (
    <div>
      <div className="rounded-2xl bg-white p-4">
        <div>
          <img className="rounded-2xl h-[200px] w-full border-2"
          src={product_image} alt=""/>
        </div>
        <div className="my-2">
          <h1 className="text-xl font-bold">{product_title}</h1>
          <h4 className="font-semibold text-[#6b6b6f]">Price: {price}$</h4>
        </div>
        <div>
          <Link to={`/gadgets/${product_id}`} className="border-[#9538E2] w-3/6 border-2 btn rounded-full bg-white text-[#9538E2] hover:bg-[#9538E2] hover:text-white hover:border-none">Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
