import { Link } from "react-router-dom";


const CountriesShowCard = ({ country }) => {
    const { _id, image, country_Name, average_cost, location, seasonality, short_description, tourists_spot_name } = country;

    console.log(country)
    return (
        <div className="p-3 bg-pink-200 h-full rounded-2xl ">
            <Link to={`allTourist/${_id}`}>
                <div className="card shadow-xl h-full">
                    <figure><img className="h-full" src={image} alt="Photo" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{country_Name}</h2>
                        <p>{short_description}</p>
                        
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default CountriesShowCard;