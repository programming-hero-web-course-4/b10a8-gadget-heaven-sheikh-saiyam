import { Link, NavLink, useLocation } from "react-router-dom";
import bannerImg from "../../assets/bannerImg.png";
import { useEffect, useState } from "react";
const Navbar = () => {
  const { pathname } = useLocation();
  const [isActive, setIsActive] = useState(false);
  const pathNames = ["/statistics", "/dashboard", "/about", "/gadgets"];

  useEffect(() => {
    const include = pathNames.some((path) => pathname.includes(path));
    setIsActive(include);
  }, [pathname]);
  return (
    <div>
      {!isActive ? (
        <div className="pb-24 bg-[#f6f6f6] pt-8">
          <div className="mx-8 bg-[#9538E2] rounded-t-3xl  pb-8">
            <div className="navbar text-white w-11/12 mx-auto md:w-10/12 max-w-screen-2xl">
              <div className="navbar-start">
                <div className="dropdown text-black">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-active rounded-2xl mr-2 lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <div className="menu menu-vertical space-y-4 font-semibold">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "underline" : ""
                        }
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to="/statistics"
                        className={({ isActive }) =>
                          isActive ? "underline" : ""
                        }
                      >
                        Statistics
                      </NavLink>
                      <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                          isActive ? "underline" : ""
                        }
                      >
                        Dashboard
                      </NavLink>
                      <NavLink
                        to="/about"
                        className={({ isActive }) =>
                          isActive ? "underline" : ""
                        }
                      >
                        About Us
                      </NavLink>
                    </div>

                    <div className="flex gap-4 mt-2 p-2 bg-base-200 rounded-2xl">
                      <button className="rounded-full border border-[#d6d6d6d] bg-white h-10  px-3">
                        <i className="fa-solid fa-cart-shopping text-black"></i>
                      </button>
                      <button className="rounded-full border border-[#d6d6d6d] bg-white h-10  px-3">
                        <i className="fa-regular fa-heart text-black"></i>
                      </button>
                    </div>
                  </ul>
                </div>
                <Link to="/" className="font-bold text-xl">
                  Gadget Heaven
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal space-x-8 font-semibold">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "underline font-bold" : ""
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/statistics"
                    className={({ isActive }) => (isActive ? "underline" : "")}
                  >
                    Statistics
                  </NavLink>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) => (isActive ? "underline" : "")}
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "underline" : "")}
                  >
                    About Us
                  </NavLink>
                </div>
              </div>
              <div className="navbar-end hidden lg:flex">
                <div className="flex gap-4">
                  <button className="rounded-full bg-white h-10  px-3">
                    <i className="fa-solid fa-cart-shopping text-black"></i>
                  </button>
                  <button className="rounded-full bg-white h-10  px-3">
                    <i className="fa-regular fa-heart text-black"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* banner section */}
            <div className="text-white mt-14 w-11/12 mx-auto md:w-10/12 max-w-screen-2xl">
              <div>
                <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-center lg:leading-[72px]">
                  Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>

                <p className="text-center mt-6 md:text-lg">
                  Explore the latest gadgets that will take your experience to
                  the next level. From smart devices to{" "}
                  <br className="hidden md:block" /> the coolest accessories, we
                  have it all!
                </p>

                <div className="text-center mt-8">
                  <Link
                    to="/dashboard"
                    className="btn btn-wide rounded-full bg-white font-bold text-[#9538E2]"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
            {/* banner section */}
          </div>
          <div>
            <img
              className="rounded-b-3xl px-8 w-full 2xl:h-[560px]"
              src={bannerImg}
              alt=""
            />
          </div>
        </div>
      ) : (
        <div className="navbar my-8 w-11/12 mx-auto md:w-10/12 max-w-screen-2xl">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-active mr-2 rounded-2xl lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <div className="menu menu-vertical space-y-4 font-semibold">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "underline" : "")}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/statistics"
                    className={({ isActive }) =>
                      isActive ? "underline font-bold text-[#9538E2]" : ""
                    }
                  >
                    Statistics
                  </NavLink>
                  <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                      isActive ? "underline font-bold text-[#9538E2]" : ""
                    }
                  >
                    Dashboard
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "underline font-bold text-[#9538E2]" : ""
                    }
                  >
                    About Us
                  </NavLink>
                </div>

                <div className="flex gap-4 mt-2 p-2 bg-base-200 rounded-2xl">
                  <button className="rounded-full border border-[#d6d6d6d] bg-white h-10  px-3">
                    <i className="fa-solid fa-cart-shopping text-black"></i>
                  </button>
                  <button className="rounded-full border border-[#d6d6d6d] bg-white h-10  px-3">
                    <i className="fa-regular fa-heart text-black"></i>
                  </button>
                </div>
              </ul>
            </div>
            <Link to="/" className="font-bold text-xl">
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal space-x-8 font-semibold">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "underline" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? "underline font-bold text-[#9538E2]" : ""
                }
              >
                Statistics
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive ? "underline font-bold text-[#9538E2]" : ""
                }
              >
                Dashboard
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "underline font-bold text-[#9538E2]" : ""
                }
              >
                About Us
              </NavLink>
            </div>
          </div>
          <div className="navbar-end hidden lg:flex">
            <div className="flex gap-4">
              <button className="rounded-full bg-white h-10 border-2 px-3">
                <i className="fa-solid fa-cart-shopping text-black"></i>
              </button>
              <button className="rounded-full bg-white h-10 border-2 px-3">
                <i className="fa-regular fa-heart text-black"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
