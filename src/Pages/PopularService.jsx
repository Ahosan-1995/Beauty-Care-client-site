const PopularService = () => {
  return (
    <div>
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto mt-10 mb-10">
        <img
          className="object-cover w-full h-64"
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Product <span>$ 500.00</span>
            </span>
            <p className="text-3xl font-bold text-[#cb8d5c]">I Built A Successful Blog In One Year</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
                  alt="Avatar"
                />
                <p className="ml-2 font-bold">Jone Doe</p>
                
              </div>
              
            </div>
            <button className="bg-[#cb8d5c] rounded-lg p-3 w-full mt-8 text-white font-bold">View Details</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PopularService;
