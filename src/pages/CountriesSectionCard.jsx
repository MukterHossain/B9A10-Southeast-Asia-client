

const CountriesSectionCard = ({ tour }) => {
    const { name, countryName, location, description, average, seasonality, travelTime, totalVisitors, userEmail, userName, image } = tour;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{countryName}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountriesSectionCard;