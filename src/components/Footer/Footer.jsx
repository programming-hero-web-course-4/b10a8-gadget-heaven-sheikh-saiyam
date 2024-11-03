const Footer = () => {
  return (
    <div>
      <footer className="py-14 bg-base-200">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Gadget Heaven</h1>
          <p className="my-2 text-[#09080F]">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>{" "}
        <hr className="w-11/12 mx-auto md:w-10/12 max-w-screen-2xl border-2 my-8" />
        <footer className="flex md:justify-around gap-8 flex-wrap  bg-base-200 text-base-content ">
          <nav className="flex flex-col space-y-3">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="flex flex-col space-y-3">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="flex flex-col space-y-3">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </footer>
    </div>
  );
};

export default Footer;
