import {useLoaderData } from "react-router-dom";
import AllServicesCard from "./AllServicesCard";
import { useEffect, useState } from "react";
import SearchBar from "../Shared/SearchBar";
import SearchResult from "../Shared/SearchResult";


const AllServices = () => {


  useEffect(()=>{
    document.title = 'Beauty_care-All Services';
},[])

    const myUsers = useLoaderData();

    const [results, setResults]=useState([]);
    

    return (
      <div>
  

        <div className="mt-10 flex flex-row justify-center bg-gray-300 p-4 gap-3">
          <p>Type here:</p>
              <SearchBar setResults={setResults}></SearchBar>
              <SearchResult  results={results}></SearchResult>
        </div>


        {
            myUsers.map(myUser=><AllServicesCard key={myUser._id} myUser={myUser}></AllServicesCard>)
        }
      </div>
    );
};

export default AllServices;