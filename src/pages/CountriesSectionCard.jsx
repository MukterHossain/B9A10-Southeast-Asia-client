import { Link } from "react-router-dom";


const CountriesSectionCard = ({ tour }) => {
    const { _id, name, countryName, location, description, average, seasonality, travelTime, totalVisitors, userEmail, userName, image } = tour;

    return (
        <div>
            <div className="card bg-lime-400 hover:bg-indigo-400 shadow-xl p-3 ">
                <figure><img className="rounded-xl w-full" src={image} alt="Shoes" /></figure>
                <div className="">
                    <h2 className="card-title">{countryName}</h2>
                    <p>{description.slice(0, 80)}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/country/${_id}`}>
                        <button className="btn hover:bg-lime-400 bg-green-400">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountriesSectionCard;