import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const ServiceBooking = () => {

    const {user}=useContext(AuthContext);

    const myUser = useLoaderData();
    const {service_name,service_description,price,service_image,service_area,_id,email,provider_name,provider_imageURL}=myUser;

    return (
        <div>
            <form className="card-body">
          <div className="flex flex-col justify-center items-center bg-[url('https://i.ibb.co/W2J61YB/Banner5.jpg')] p-10 bg-cover">
            <div className="flex flex-row gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="URL"
                  name="service_image"
                  className="input input-bordered"
                  defaultValue={service_image}
                  readOnly
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Service Name"
                  name="service_name"
                  className="input input-bordered"
                  defaultValue={service_name}
                  readOnly
                  required
                />
              </div>
            </div>

            <div className="flex flex-row gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered"
                  defaultValue={price}
                  readOnly
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Area</span>
                </label>
                <input
                  type="text"
                  placeholder="Service Area"
                  name="service_area"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="flex flex-row gap-10">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Provider Name</span>
                </label>
                <input
                  type="text"
                  placeholder="providerName"
                  name="provider_name"
                  className="input input-bordered"
                  defaultValue={provider_name}
                  readOnly
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Provider Email</span>
                </label>
                <input
                  type="provider_email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  defaultValue={email}
                  readOnly
                  required
                />
              </div>
            </div>
            <div className="flex flex-row gap-10">
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Current User Email</span>
                </label>
                <input
                  type="user_email"
                  placeholder="Email"
                  name="user_email"
                  className="input input-bordered"
                  defaultValue={user?.displayName}
                  readOnly
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Current User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="ProviderImageURL"
                  name="user_name"
                  className="input input-bordered"
                  defaultValue={user?.photoURL}
                  readOnly
                  required
                />
              </div>
            </div>
            <div className="form-control w-2/6">
                <label className="label">
                  <span className="label-text">Service Taking Date</span>
                </label>
                <input
                  type="date"
                  placeholder="date"
                  name="date"
                  className="input input-bordered"
                  required
                />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className=" text-white btn bg-[#cb8d5c]">Purchase Now</button>
          </div>
        </form>
        </div>
    );
};

export default ServiceBooking;