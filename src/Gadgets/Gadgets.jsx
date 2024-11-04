import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "./Gadget";

const Gadgets = () => {
  const gadgets = useLoaderData();
  const { category } = useParams();
  const [filteredGadgets, setFilteredGadgets] = useState([]);
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...gadgets].filter(
        (gadget) => gadget.category === category
      );
      setFilteredGadgets(filteredByCategory);
    } else {
      setFilteredGadgets(gadgets);
    }
  }, [category, gadgets]);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredGadgets.map((gadget, idx) => (
        <Gadget gadget={gadget} key={idx}></Gadget>
      ))}
    </div>
  );
};

export default Gadgets;
