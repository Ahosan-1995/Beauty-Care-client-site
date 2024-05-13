import {useLoaderData } from "react-router-dom";
import AllServicesCard from "./AllServicesCard";


const AllServices = () => {

    const myUsers = useLoaderData();
    

    return (
      <div>
        {
            myUsers.map(myUser=><AllServicesCard key={myUser._id} myUser={myUser}></AllServicesCard>)
        }
      </div>
    );
};

export default AllServices;