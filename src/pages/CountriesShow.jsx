import { useEffect, useState } from "react";
import CountriesShowCard from "./CountriesShowCard";


const CountriesShow = () => {

    const [countries, setCountries] = useState(null) 
    

    useEffect(()=>{
        fetch('https://b9-a10-southeast-asia-server.vercel.app/countries')
        .then(res => res.json())
        .then(data => setCountries(data)
       
    )
        
    },[])
    console.log( countries)
    return (
        <div className="mt-20">
            <h2 className="h2 text-3xl text-center text-blue-600 font-bold pb-5">Countries</h2>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {
                countries?.map(country => <CountriesShowCard key={country._id} country={country}></CountriesShowCard>)
            }
            </div>

            
        </div>
    );
};

export default CountriesShow;