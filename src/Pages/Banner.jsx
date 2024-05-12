const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/4p4PGm4/girl2.jpg')] mb-10 h-[800px] bg-cover">
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
            <div className="text-center">
              <h1 className="text-4xl font-semibold text-white lg:text-4xl flex justify-center items-center">
                Build your <span className="text-[#cb8d5c] font-bold text-9xl">INNER</span>
                Confidence
              </h1>
              <button className="w-full px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Book your reservation NOW!
              </button>
            </div>
          </div>
    </div>
  );
};

export default Banner;
