import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const ManageService = () => {

    useEffect(()=>{
        document.title = 'Beauty_care-Manage Service';
    },[])

    // const loaderData = useLoaderData();

    // console.log(loaderData);

    const [emailCrad, setemailCard] = useState([]);

    const {user}=useContext(AuthContext);
    const email = user?.email;

    // console.log(email);

    // For delete operation
    // const [users, setUsers]= useState(loaderData);

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              
              





            }

            fetch(`https://assignment-11-serversite.vercel.app/assignment/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    console.log('deleted Successfully');
                    // remove user from ui
                    const remainingUsers = emailCrad.filter(emailcard2=emailcard2._id !== id);
                    setemailCard(remainingUsers);
                }
            })


          });


    }



    // 



    useEffect(()=>{
        fetch(`https://assignment-11-serversite.vercel.app/assignmentemail/${email}`)
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            setemailCard(data);
            
        })
    },[email])

    console.log(emailCrad);













    return (
        <div>
            
            <div className="p-10">
            <div>
                    <div className="overflow-x-auto">
                        <table className="table">
{/* head */}
                        <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Provider Name</th>
                            <th>Price</th>
                            <th>Area</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                        </thead>

                        <tbody>
{/* row 1 */}
                            {
                                emailCrad.map(emailCard1=> <tr key={emailCard1._id}>
                                    <td>{emailCard1.service_name}</td>
                                    <td>{emailCard1.provider_name}</td>
                                    <td>{emailCard1.price}</td>
                                    <td>{emailCard1.service_area}</td>
                                    <Link onClick={()=>handleDelete(emailCard1._id)}><td><button>Delete</button></td></Link>
                                    <Link to={`/update/${emailCard1._id}`}><td><button>Update</button></td></Link>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


            
        </div>
    );
};
// const allData={service_name,price,service_image,email,provider_name,user_email,user_name,date,service_area,pending}//have to delete just for help
export default ManageService;