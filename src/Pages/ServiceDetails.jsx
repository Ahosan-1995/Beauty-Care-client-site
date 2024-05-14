
import { Link, useLoaderData } from "react-router-dom";





const ServiceDetails = () => {
  
  const myUser = useLoaderData();
  const {service_name,service_description,price,service_image,service_area,_id,email,provider_name,provider_imageURL}=myUser;

  




  return (
    <div>
      <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto mb-20 mt-20">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            <p className="text-3xl font-bold mb-8">Price: <span className="text-pink-800">{price}</span></p>
          </span>
          <Link to={`/details/book/${_id}`}><button className="bg-pink-800 p-3 rounded-lg mb-10 text-white font-bold">Book Now!</button></Link>
          
        </div>

        <img src={service_image} alt="" />

        <div className="mt-2">
            <p  className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{service_name}</p>
          
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {service_description}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p>Location: <span>{service_area}</span></p>

          <div className="flex items-center">
            <img
              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src={provider_imageURL}
              alt="avatar"
            />
            <p>Name: <span>{provider_name}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
