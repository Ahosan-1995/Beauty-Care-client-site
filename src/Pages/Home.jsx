import PopularService from "./PopularService";
import Slider from "./Slider";




const Home = () => {
    return (
        <div className="mr-20">
            <h2>This is home</h2>
            <Slider></Slider>
            <PopularService></PopularService>
        </div>
    );
};

export default Home;