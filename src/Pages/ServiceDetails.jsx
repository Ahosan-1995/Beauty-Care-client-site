const ServiceDetails = () => {
  return (
    <div>
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            Mar 10, 2019
          </span>
          <button>Book Now!</button>
        </div>

        <div className="mt-2">
            <p  className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">Accessibility tools for designers and developers</p>
          
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p>Location: <span>Mirpur 10, Dhaka</span></p>

          <div className="flex items-center">
            <img
              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
              alt="avatar"
            />
            <p>Name: <span>Service Provider Name</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
