
import Banner from "./Banner";
import Banner2 from "./Banner2";
import PopularService from "./PopularService";
import Slider from "./Slider";
import TextSlider from "./TextSlider";




const Home = () => {
    return (
        <div className="">
            <br />
            <Banner></Banner>
            <Slider></Slider>
            <Banner2></Banner2>
            <PopularService></PopularService>
            <TextSlider></TextSlider>
        </div>
    );
};

export default Home;