const ErrorPage = () => {
  return (
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src="./img/404-4.png"
          // alt="404 Not Found"
          className="max-w-md w-full mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-800"></h1>
        <p className="text-gray-600 text-lg mt-2">
        Sorry this page is not available!
        </p>
        <a className="" href="/"><button className="bg-[#f03838] py-3 px-6 rounded-lg font-medium">Go Home</button></a>
      </div>
    );
  };
export default ErrorPage;