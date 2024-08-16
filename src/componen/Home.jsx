import { useLoaderData } from "react-router-dom";
import CountriesSection from "./CountriesSection";
import CountryBanner from "./CountryBanner";
import CountriesShow from "../pages/CountriesShow";
import Gallery from "../pages/Gallery";
import ContactPage from "../pages/ContactPage";


const Home = () => {
    const travels = useLoaderData()
    // console.log(travels)
   
    return (
        <div>
            <CountryBanner ></CountryBanner>
            <CountriesSection travels={travels}></CountriesSection>
            <CountriesShow></CountriesShow>
            <Gallery></Gallery>
            <ContactPage></ContactPage>
        </div>
    );
};

export default Home;




