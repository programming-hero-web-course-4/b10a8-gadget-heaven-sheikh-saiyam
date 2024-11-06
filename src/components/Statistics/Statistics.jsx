import { Helmet } from "react-helmet";

const Statistics = () => {
  return (
    <div>
      <div className="bg-[#9538E2] py-12">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Statistics || Gadget Heaven</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <div className="text-center text-white">
          <div className="w-11/12 mx-auto">
            <h1 className="font-bold text-3xl">Statistics</h1>
            <p className="text-center mt-2 md:text-lg">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to{" "}
              <br className="hidden md:block" /> the coolest accessories, we
              have it all!
            </p>
          </div>
        </div>
      </div>{" "}
      {/* main div  */}
      <div className="bg-[#f6f6f6] py-16">
        <div className="bg-white px-12 rounded-2xl py-12 w-11/12 mx-auto md:w-10/12 max-w-screen-2xl">
          <div>
            <img
              className="mx-auto mb-4"
              src="https://i.ibb.co.com/41fK8pM/Statistics.jpg"
              alt=""
            />
          </div>
          <h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold">
            NO Statistics Available
          </h1>
        </div>
      </div>
      {/* main div  */}
    </div>
  );
};

export default Statistics;
