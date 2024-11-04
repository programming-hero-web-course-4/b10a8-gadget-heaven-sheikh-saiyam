import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="px-12 min-h-screen bg-purple-600 flex flex-col items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-5xl mt-12 font-bold mb-6">Oops! Page Not Found</h1>
          <p className="text-lg mb-8">
            It looks like the page you are looking for does not exist. Lets get
            you back on track.
          </p>
          <Link
            to="/"
            className="btn-wide btn bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-200"
          >
            Go Home
          </Link>
        </div>
        <div className="mt-8 mb-8">
          <img
            src="https://i.ibb.co.com/5BYvtX8/DALL-E-2024-11-04-10-58-45-A-vibrant-404-error-image-for-a-tech-themed-website-called-Gadget-Heaven.webp"
            alt="404 Not Found"
            className="rounded-lg border-4 w-full h-[350px] mx-auto border-white shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
