
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Banner2 from "./Banner2";
import PopularService from "./PopularService";
import Slider from "./Slider";
import TextSlider from "./TextSlider";




const Home = () => {
    const myUsers=useLoaderData();
    // console.log(myUsers);

    return (
        <div className="">
            <br />
            <Banner></Banner>
            <Slider></Slider>
            <Banner2></Banner2>
            {
                myUsers.map(myUser=><PopularService key={myUser._id} myUser={myUser}></PopularService>)
            }
            <TextSlider></TextSlider>
        </div>
    );
};

export default Home;