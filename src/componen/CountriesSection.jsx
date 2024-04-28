import CountriesSectionCard from "../pages/CountriesSectionCard";


const CountriesSection = ({country}) => {
    
    return (
        <div>
            <div className="h2 text-3xl text-center text-blue-600 font-bold pb-5"> Countries Section</div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                country.map(tour => <CountriesSectionCard key={tour._id} tour={tour}></CountriesSectionCard> )
            }
            </div>
        </div>
    );
};

export default CountriesSection;