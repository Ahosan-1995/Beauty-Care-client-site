




const UpdateService = () => {


  return (
    <div>
      <div>
        <form className="card-body">
          <div className="flex flex-col justify-center items-center bg-[url('https://i.ibb.co/W2J61YB/Banner5.jpg')] p-10 bg-cover">
            <div className="flex flex-row gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="URL"
                  name="url"
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
                  name="serviceName"
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
                  name="serviceArea"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="flex flex-row gap-10">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Others</span>
                </label>
                <input
                  type="text"
                  placeholder="Others"
                  name="other"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-control mt-6">
            <button className=" text-white btn bg-[#cb8d5c]">
              Update Service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;
