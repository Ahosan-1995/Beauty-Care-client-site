
import { Link, useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import PopularService from "./PopularService";
import Slider from "./Slider";
import TextSlider from "./TextSlider";
import { useEffect } from "react";




const Home = () => {



    useEffect(()=>{
        document.title = 'Beauty_care-Home';
    },[])

    const myUsers=useLoaderData();
    // console.log(myUsers);

    return (
        <div className="">
            <br />
            <Banner></Banner>
            <Slider></Slider>
            <Banner2></Banner2>
            {
                myUsers.slice(0, 6).map(myUser=><PopularService key={myUser._id} myUser={myUser}></PopularService>)
            }
            <div className=" ">
                <Link to='/allServices'><button className="bg-pink-800 p-3 rounded-lg mb-10 text-white font-bold flex  mx-auto">Show All Services</button></Link>
            </div>
            <TextSlider></TextSlider>
        </div>
    );
};

export default Home;