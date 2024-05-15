// import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import BookServiceCard from "./BookServiceCard";

const BookedService = () => {
  useEffect(() => {
    document.title = "Beauty_care-Booked Service";
  }, []);

  // const loaderData = useLoaderData();

  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [allBookData, setBookData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/add_purchase/${email}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setBookData(data);
      });
  }, [email]);

  console.log(allBookData);

// For change booking status to confirm
const handleBookingConfirm=id=>{
    fetch(`http://localhost:5000/add_purchase/${id}`,{
        method:'PATCH',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify({status:'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount>0){
            // update state
            // const remaining = allBookData.filter(bookData=>bookData._id!==id);
            // const updated = allBookData.find(bookData=>bookData._id===id)
            // updated.status='confirm';
            // const newBookings = [updated, ...remaining]
            // setBookData(newBookings);

        }
    })
}

  return (
    <div>
      <div className="overflow-x-auto">
        <p className="text-center mb-5 mt-10 text-3xl font-bold underline italic">
          Here is your booking Information
        </p>

        {allBookData.length == 0 ? (
          <p className="text-xl font-bold mt-2 mb-2 text-center">
            There is no purchase to show here
          </p>
        ) : (
          <table className="table mb-20">
            {/* head */}
            <thead>
              <tr>
                <th>provider_name</th>
                <th>service_area</th>
                <th>service_name</th>
                <th>price</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {allBookData.map((bookData) => (
                <tr key={bookData._id}>
                  <td>{bookData.provider_name}</td>
                  <td>{bookData.service_area}</td>
                  <td>{bookData.service_name}</td>
                  <td>{bookData.price}</td>
                  {/* <button><td>{bookData.pending}</td></button> */}
                  <td className="hover:bg-violet-600" onClick={()=>handleBookingConfirm(bookData._id)}>{bookData.pending}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BookedService;
