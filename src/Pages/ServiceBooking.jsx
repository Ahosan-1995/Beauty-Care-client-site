import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const ServiceBooking = () => {

  useEffect(()=>{
    document.title = 'Beauty_care-Booking';
},[])

    const {user}=useContext(AuthContext);

    const myUser = useLoaderData();
    const {service_name,price,service_image,service_area,_id,email,provider_name}=myUser;


    const handlePurchase =(e)=>{

        e.preventDefault();
        const form = e.target;
        const service_name = form.service_name.value;
        const price = form.price.value;
        const service_image =form.service_image.value;
        const email = form.email.value;
        const provider_name =form.provider_name.value;
        const user_email =form.user_email.value;
        const user_name =form.user_name.value;
        const date = form.date.value;
        const service_area = form.service_area.value;
        const pending = form.pending.value;

        const allData={service_name,price,service_image,email,provider_name,user_email,user_name,date,service_area,pending}

        console.log(allData);
        // sent data to server
        fetch('http://localhost:5000/add_purchase',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                // toast('Data added successfully to the database');
                Swal.fire({
                    title: 'Success',
                    text: 'User Added Successfully',
                    icon: 'Success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    }







    return (
        <div>
            <form onSubmit={handlePurchase} className="card-body">
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
                  defaultValue={user?.email}
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
                  defaultValue={user?.displayName}
                  readOnly
                  required
                />
              </div>
            </div>
            <div className="flex flex-row gap-10">
            <div className="form-control">
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
            <div className="form-control hidden">
                <label className="label">
                  <span className="label-text">Service Status</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  name="pending"
                  className="input input-bordered"
                  defaultValue='pending'
                  required
                  readOnly
                  
                />
            </div>
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