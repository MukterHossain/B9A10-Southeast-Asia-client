import { Fade } from "react-awesome-reveal";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";



const CountriesShowDetails = () => {
    const countriesData = useLoaderData()
    const {name, countryName, location, description, average, seasonality, travelTime, totalVisitors, userEmail, userName, image } = countriesData;

    


    return (
        <div>
            <div className="hero text-black  min-h-screen">
            <div className="hero-content gap-1 w-full flex-col lg:flex-row">
                    <div className="w-full">
                        <Fade direction="down" cascade={false} delay={400} triggerOnce={true} > <img
                            src={image}
                            className="rounded-lg shadow-2xl " /></Fade>
                    </div>

                    <Fade direction="up" cascade={false} delay={400} triggerOnce={true} >
                        <div className="px-5 py-3 bg-green-200 rounded-lg shadow-2xl">
                        <div className=" pb-3">
                            <h1 className="text-4xl font-bold text-green-900 py-2">{name}</h1>
                            <h2 className="text-2xl font-bold text-black">{countryName}</h2>
                            <p className=" text-xl flex items-center text-black font-semibold gap-2"><FaLocationDot size={16}></FaLocationDot> {location}</p>
                        </div>
                        <hr />
                        <div className=" pb-3 text-black">
                            <p className="py-2">{description}</p>
                            <p className="py-2"><span className="text-[16px] font-bold">Seasonality :</span> {seasonality}</p>
                        </div>
                        <hr />
                        <div className="text-black">
                            <div className="md:flex justify-between items-center">
                                <p className=""><span className="text-[16px] font-bold">Travel Time : </span>{travelTime}</p>
                                <p className="py-[4px]"> <span className="text-[16px] font-bold">Average Cost : </span>${average} per day</p>

                            </div>
                            <div className="md:flex justify-between items-center">
                                <p className="py-2"><span className="text-[16px] font-bold">Total Visitors : </span>{totalVisitors}</p>

                            </div>
                            <hr />
                            <div className="">
                                <p className="py-2"><span className="text-[16px] font-bold">Name : </span>{userName}</p>
                                <p className=""><span className="text-[16px] font-bold">Email : </span>{userEmail}</p>

                            </div>
                        </div>
                    </div>
                    </Fade>
                </div>
            </div>

        </div>
    );
};

export default CountriesShowDetails;