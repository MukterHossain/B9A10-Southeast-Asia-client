import { useEffect, useState } from "react";
import CountriesShowCard from "./CountriesShowCard";


const CountriesShow = () => {

    const [countries, setCountries] = useState(null)


    useEffect(() => {
        fetch('https://b9-a10-southeast-asia-server.vercel.app/countries')
            .then(res => res.json())
            .then(data => setCountries(data)

            )

    }, [])
    
    return (
        <div className="mt-20">
            <div className="text-black my-6 mx-auto md:w-3/5 lg:w-1/2">
                <div className="bg-white mb-4 px-2 py-2 rounded-xl text-center ">
                    <h2 className="h2 text-4xl text-center text-blue-600 font-bold pb-4">Countries</h2>
                    <p className="text-[16px] py-2 ">I visited the Great Wall during the summer months, which is one of the best times to visit as the weather is warm and pleasant. I decided to visit the wall because I had heard so much about it and had always wanted to see it</p>
                </div>
                    <hr />
            </div>
            
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                {
                    countries?.map((country, index) => <CountriesShowCard key={country._id} country={country} index={index}></CountriesShowCard>)
                }
            </div>


        </div>
    );
};

export default CountriesShow;