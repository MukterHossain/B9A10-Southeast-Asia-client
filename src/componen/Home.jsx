import { useLoaderData } from "react-router-dom";
import CountriesSection from "./CountriesSection";
import CountryBanner from "./CountryBanner";
import CountriesShow from "../pages/CountriesShow";


const Home = () => {
    const country = useLoaderData()
    console.log(country)
   
    return (
        <div>
            <CountryBanner ></CountryBanner>
            <CountriesSection country={country}></CountriesSection>
            <CountriesShow></CountriesShow>
        </div>
    );
};

export default Home;




