
import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";


const AddServices = () => {

  useEffect(()=>{
    document.title = 'Beauty_care-All Services';
},[])
  const {user}=useContext(AuthContext);




    const handleSubmit =(e)=>{

        e.preventDefault();
        const form = e.target;
        const service_name = form.service_name.value;
        const service_image = form.service_image.value;
        const price =form.price.value;
        const service_area =form.service_area.value;
        const service_description =form.service_description.value;
        const email = form.email.value;
        const provider_name =form.provider_name.value;
        const provider_imageURL =form.provider_imageURL.value;

        

        const allData={service_name,service_image,price,service_area,service_description,email,provider_name,provider_imageURL}

        // console.log(allData);
        // sent data to server
        fetch('http://localhost:5000/assignment',{
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
      <div>
        <form onSubmit={handleSubmit} className="card-body">
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
                  <span className="label-text">Service Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  name="service_description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Provider Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  defaultValue={user.email}
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
                  defaultValue={user?.displayName}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Service Provider Image</span>
                </label>
                <input
                  type="text"
                  placeholder="ProviderImageURL"
                  name="provider_imageURL"
                  className="input input-bordered"
                  defaultValue={user?.photoURL}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-control mt-6">
            <button className=" text-white btn bg-[#cb8d5c]">Add Service</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;
