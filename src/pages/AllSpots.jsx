import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";



const AllSpots = ({ allSport, index }) => {

    const { _id, name, countryName, location, description, average, seasonality, travelTime, totalVisitors, userEmail, userName, image } = allSport;



    return (
        <>
        <Fade direction="down" cascade={false} delay={index * 200} triggerOnce={true} >
            <div className="card bg-purple-400 hover:transition-colors duration-1000  text-black hover:bg-rose-400 shadow-xl p-3 ">
                <figure><img className="rounded-xl w-full" src={image} alt="Shoes" /></figure>
                <div className="pt-4 pb-3">
                    <h2 className="card-title pb-2 text-2xl text-blue-800 font-bold">{name}</h2>
                    <hr />
                    <div className="flex md:col-span-1 justify-between py-2">
                        <p><span className="text-[16px] font-bold">Cost:</span> ${average} per day</p>
                        <p><span className="text-[16px] font-bold">Travel Time:</span> {travelTime}</p>
                    </div>
                    <p><span className="text-[16px] font-bold">Total Visitors:</span> {totalVisitors} per year</p>
                    <p className="pb-4"><span className="text-[16px]  font-bold">Seasonality:</span> {seasonality.slice(0, 30)}</p>
                    <hr />
                    <div className="card-actions  justify-center mt-4">
                        <Link to={`/allDetails/${_id}`}>
                            <span className="w-full text-center py-2 px-5 rounded-full hover:bg-purple-500 bg-green-700 text-white ">View Details</span>
                        </Link>
                    </div>
                </div>
            </div>
            </Fade>
        </>
    );
};

export default AllSpots;