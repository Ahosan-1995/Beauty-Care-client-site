const Banner2 = () => {
  return (
    <div>
      <div className="lg:flex lg:flex-row gap-10 lg:mt-32 mb-32">
        <div className="mx-auto">
          <p className="italic text-3xl text-center mt-10">
            Creative manicure and pedicure studio with masterly <br /> performance of services for the beauty of your nails
            
          </p>
          <p className="text-center mt-5">
            Vestibulum congue, sapien a sollicitudin euismod, lorem ex auctor <br />
            arcu, eget convallis mauris nisl sagittis dui. Ut nec laoreet ante. <br />
            Duis ultricies congue libero, et accumsan purus malesuada aptent taciti.
          </p>
          <div className="flex gap-10 flex-row justify-center mt-5 mb-5">
            <div className="flex  items-center">
              <p className="text-7xl">25</p>
              <p>Professional <br /> masters</p>
            </div>
            <div className="flex  items-center">
              <p className="text-7xl">285</p>
              <p>Nail polish <br /> colors</p>
            </div>
          </div>
        </div>
        <div className="flex gap-10 flex-row justify-center mx-auto">
          <img className="w-72 h-[400px] rounded-xl" src="https://i.ibb.co/TBXgBpH/nail2.jpg" alt="" />
          <img className="w-72 h-[400px] rounded-xl" src="https://i.ibb.co/52PbtY3/Nail1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner2;
