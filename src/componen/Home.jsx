import { useLoaderData } from "react-router-dom";
import CountriesSection from "./CountriesSection";
import CountryBanner from "./CountryBanner";


const Home = () => {
    const country = useLoaderData()
    console.log(country)
   
    return (
        <div>
            <CountryBanner ></CountryBanner>
            <CountriesSection country={country}></CountriesSection>
        </div>
    );
};

export default Home;




