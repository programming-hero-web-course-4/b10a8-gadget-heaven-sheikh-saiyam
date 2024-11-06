import { Helmet } from "react-helmet";
import bannerImg from "../../assets/banner.jpg";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div>
      <div className="bg-[#9538E2] py-12">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About || Gadget Heaven</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="text-center text-white">
          <div className="w-11/12 mx-auto">
            <h1 className="font-bold text-3xl">About Us</h1>
            <p className="text-center mt-2 md:text-lg">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to{" "}
              <br className="hidden md:block" /> the coolest accessories, we
              have it all!
            </p>
          </div>
        </div>
      </div>

      {/* about us section  */}
      <div className="bg-[#f6f6f6] py-16">
        <div className="w-11/12 md:w-10/12 mx-auto">
          <div className="mx-auto flex flex-col-reverse space-y-6 lg:flex lg:flex-row lg:space-y-0 justify-between gap-12 ">
            <div className="lg:w-7/12">
              <h1 className="font-bold text-3xl md:text-4xl mb-4">
                Welcome to Gadget Heaven
              </h1>
              <p className="text-lg md:text-xl leading-relaxed">
                At Gadget Heaven, we are passionate about transforming how you
                experience the world of technology. Our mission is to offer a
                curated selection of the finest, most innovative gadgets that go
                beyond everyday convenience to enhance every aspect of your
                life. Whether you are{" "}
                <span className="inline md:hidden">...</span>
                <span className="hidden md:inline">
                  a die-hard tech enthusiast seeking the latest advancements or
                  a casual user looking for gadgets that make life simpler and
                  more enjoyable, we have something designed with you in mind.
                  From groundbreaking smart devices to unique, high-quality
                  accessories, our collection is tailored to provide
                  cutting-edge solutions that empower you to live smarter, work
                  more efficiently, and enjoy your tech in exciting new ways.
                </span>
              </p>
              <div className="space-y-4 sm:flex sm:space-y-0 gap-4 mt-6">
                <Link
                  to="/"
                  className="w-full sm:btn-wide btn bg-[#9538E2] text-white rounded-full"
                >
                  Our Products
                </Link>
                <a
                  href="#faq"
                  className="w-full sm:btn-wide btn text-[#9538E2] bg-white border-2 border-[#9538e2] rounded-full"
                >
                  F A Q
                </a>
              </div>
            </div>
            <div className="w-full lg:w-5/12 flex justify-center">
              <img
                className="w-full h-auto rounded-3xl shadow-2xl transform transition-all hover:scale-105"
                src={bannerImg}
                alt="Gadgets at Gadget Heaven"
              />
            </div>
          </div>{" "}
          <hr className="border-2 mt-24 mb-24" />
          <div className="mb-12">
            <p className="text-lg  font-semibold text-center md:text-xl leading-relaxed mb-6">
              From state-of-the-art smart devices to cutting-edge accessories,
              we curate the best products that combine functionality with style.
              Our goal is simple – to provide you with the tools and technology
              that transform your life, making it more efficient, fun, and
              connected.
            </p>
            {/* faq section */}
            <div id="faq">
              <h1 className="text-center text-5xl font-bold">FAQ❓</h1>
              {/* main div  */}
              <div className="mt-8 join join-vertical">
                <div className="collapse collapse-arrow bg-white border-2 join-item">
                  <input type="radio" name="my-accordion-2" defaultChecked />
                  <div className="collapse-title text-xl font-medium">
                    What is Gadget Heaven?
                  </div>
                  <div className="collapse-content">
                    <p>
                      {" "}
                      Gadget Heaven is your one-stop destination for the latest,
                      most innovative gadgets and accessories. We offer a wide
                      range of products designed to elevate your everyday
                      experiences, whether you are a tech enthusiast or just
                      looking for practical solutions.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-white border-2 join-item">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-xl font-medium">
                    How do I know if a product is right for me?
                  </div>
                  <div className="collapse-content">
                    <p>
                      {" "}
                      Each product on our website comes with detailed
                      descriptions, specifications, and user reviews to help you
                      make an informed decision. You can also contact our
                      support team for personalized recommendations.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-white border-2 join-item">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-xl font-medium">
                    Can I return a product if I am not satisfied?
                  </div>
                  <div className="collapse-content">
                    <p>
                      {" "}
                      Yes! We offer a 30-day return policy on most products. If
                      you are not completely satisfied with your purchase, you
                      can return it for a full refund or exchange. Please refer
                      to our Returns & Exchanges page for more details.
                    </p>
                  </div>
                </div>
                <div className="collapse collapse-arrow bg-white border-2 join-item">
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-xl font-medium">
                    Do you offer gift cards?
                  </div>
                  <div className="collapse-content">
                    <p>
                      {" "}
                      Yes, we offer gift cards! You can purchase them directly
                      from our website and use them on any future purchases.
                      They make the perfect gift for the tech lover in your
                      life.
                    </p>
                  </div>
                </div>
              </div>
              {/* main div  */}
            </div>
            {/* faq section */}
          </div>
        </div>
      </div>
      {/* about us section  */}
    </div>
  );
};

export default AboutUs;
