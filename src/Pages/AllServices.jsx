import {useLoaderData } from "react-router-dom";
import AllServicesCard from "./AllServicesCard";
import { useEffect } from "react";


const AllServices = () => {


  useEffect(()=>{
    document.title = 'Beauty_care-All Services';
},[])

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