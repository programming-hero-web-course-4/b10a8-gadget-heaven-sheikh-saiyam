import { NavLink } from "react-router-dom";

const Category = ({ categories }) => {
  return (
    <div>
      <div className="bg-white border rounded-2xl p-4">
        {categories.map((category, idx) => (
          <div key={idx}>
            <NavLink
              to={`/${category.category}`}
              className={({ isActive }) =>
                `btn w-full rounded-full shadow-sm my-2 ${
                  isActive ? "bg-[#9538E2] text-white" : "bg-white"
                }`
              }
            >
              {category.category}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
