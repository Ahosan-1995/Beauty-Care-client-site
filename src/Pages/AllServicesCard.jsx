import React from 'react';
import { Link } from 'react-router-dom';

const AllServicesCard = ({myUser}) => {
    const {service_name,service_description,price,service_image,service_area,_id,email,provider_name,provider_imageURL}=myUser;



    return (
        <div>
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto mt-10 mb-10">
        <img
          className="object-cover w-full h-64"
          src={service_image}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Service-Charge <span>{price}</span>
            </span>
            <br />
            <span className="text-xl font-medium dark:text-blue-400">
              Service-Area: <span>{service_area}</span>
            </span>
            <p className="text-3xl font-bold text-[#cb8d5c]">{service_name}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {service_description.substring(0, 100)}
            </p>
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src={provider_imageURL}
                  alt="Avatar"
                />
                <p className="ml-2 font-bold">{provider_name}</p>
                
              </div>
              
            </div>
            <Link to={`/details/${_id}`}><button className="bg-[#cb8d5c] rounded-lg p-3 w-full mt-8 text-white font-bold">View Details</button></Link>
          </div>
        </div>

      </div>
    </div>
    );
};

export default AllServicesCard;