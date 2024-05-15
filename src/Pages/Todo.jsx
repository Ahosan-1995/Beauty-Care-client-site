import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ToDoCard from "./ToDoCard";


const Todo = () => {

    useEffect(()=>{
        document.title = 'Beauty_care-ToDo';
    },[])



    const {user}=useContext(AuthContext);
    const email = user?.email;


    const [allBookData, setBookData] = useState([]);


    useEffect(()=>{
        fetch(`https://assignment-11-serversite.vercel.app/add_purchase/${email}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setBookData(data);
            
        })
    },[email])

    console.log(allBookData);



    return (
        <div>
            <h2>This is todo page</h2>

            <div className="overflow-x-auto">
                <p className="text-center mb-5 mt-10 text-3xl font-bold underline italic">Here is your booking Information</p>
                    
                       
                {allBookData.length==0?
                <p className="text-xl font-bold mt-2 mb-2 text-center">There is no purchase to show here</p>
                :
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

                           {

                                allBookData.map(bookData=><ToDoCard key={bookData._id} bookData={bookData}></ToDoCard>)
                            }
                        </tbody>
                    </table>
            }



                
                    
                </div>












        </div>
    );
};

export default Todo;