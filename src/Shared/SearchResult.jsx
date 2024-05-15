import { Link } from "react-router-dom";

const SearchResult = ({ results }) => {
  console.log("this render from result", results);

  return (
    <div className="absolute">
      {
        results.map(result=>
        <div  key={result._id} className=" max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto mt-10 mb-10">

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Service-Charge <span>{result.price}</span>
            </span>
            <br />
            <p className="text-3xl font-bold text-[#cb8d5c]">{result.service_name}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {result.service_description.substring(0, 100)}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                
                <p className="ml-2 font-bold">{result.provider_name}</p>
              </div>
            </div>
            <Link to={`/details/${result._id}`}>
              <button className="bg-[#cb8d5c] rounded-lg p-3 w-full mt-8 text-white font-bold">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>)
      }
    </div>
  );
};

export default SearchResult;
