import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";


const AllCountriesCard = ({ dataItem, index }) => {
    const { name, countryName, average, seasonality, travelTime, totalVisitors, image } = dataItem;
    return (
        <div>
            <Fade direction="left" cascade={false} delay={index * 200} triggerOnce={true} >
                <div className="card mt-12 hover:transition-colors duration-1000  text-black hover:bg-purple-400 bg-rose-400 shadow-xl p-3 ">
                    <figure><img className="rounded-xl w-full" src={image} alt="Shoes" /></figure>
                    <div className="pt-4 pb-3">
                        <h2 className="card-title pb-2 text-3xl text-blue-800 font-bold">{name}</h2>
                        <h2 className="card-title pb-2 text-2xl text-green-800 font-bold">{countryName}</h2>
                        <hr />
                        <div className="flex md:col-span-1 justify-between py-2">
                            <p><span className="text-[16px] font-bold">Cost:</span> ${average} per day</p>
                            <p><span className="text-[16px] font-bold">Travel Time:</span> {travelTime}</p>
                        </div>
                        <p><span className="text-[16px] font-bold">Total Visitors:</span> {totalVisitors} per year</p>
                        <p className="pb-4"><span className="text-[16px]  font-bold">Seasonality:</span> {seasonality.slice(0, 30)}</p>
                        <hr />
                        <div className="text-center mt-4">
                            <NavLink to={`/CountriesDetails/${countryName}`}>
                                <span className="bg-green-700 lg:px-10 hover:transition-colors duration-1000  py-2 px-5 rounded-full hover:bg-orange-700  "><span className="  py-2 px-5   text-white ">View Details</span>
                                </span>

                            </NavLink>

                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default AllCountriesCard;