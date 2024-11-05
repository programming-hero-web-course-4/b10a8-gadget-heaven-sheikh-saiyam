const Footer = () => {
  return (
    <div>
      <footer className="py-16">
        <div className="text-center w-11/12 mx-auto">
          <h1 className="text-3xl font-bold">Gadget Heaven</h1>
          <p className="my-2 text-[#09080F]">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>{" "}
        <hr className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl border-2 my-8" />
        <div className="gap-y-10 flex justify-center gap-x-28 flex-wrap w-11/12 mx-auto md:w-10/12 max-w-screen-2xl">
          {/* 1st div */}

          <div className="text-center">
            <h6 className=" font-bold mb-2 ">Company</h6>
            <li className="list-none link link-hover">About Us</li>
            <li className="list-none link link-hover">Careers</li>
            <li className="list-none link link-hover">Contact</li>
          </div>
          {/* 1st div */}
          {/* 2nd div */}
          <div className="text-center">
            <h6 className=" font-bold mb-2">Services</h6>
            <li className="list-none link link-hover">Product Support</li>
            <li className="list-none link link-hover">Product Support</li>
            <li className="list-none link link-hover">Shipping & Delivery</li>
            <li className="list-none link link-hover">Returns</li>
          </div>
          {/* 2nd div */}
          {/* 3rd div */}
          <div className="text-center">
            <h6 className=" font-bold mb-2">Legal</h6>
            <li className="list-none link link-hover">Terms of Service</li>
            <li className="list-none link link-hover">Privacy Policy</li>
            <li className="list-none link link-hover"> Cookie Policy</li>
          </div>
          {/* 3rd div */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
