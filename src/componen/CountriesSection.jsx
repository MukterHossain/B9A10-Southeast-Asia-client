import CountriesSectionCard from "../pages/CountriesSectionCard";
import PropTypes from 'prop-types';


const CountriesSection = ({ travels }) => {
    const myTravels = travels.slice(0, 9)
    console.log(myTravels)

    return (
        <div>
            <div className="text-black my-6 mx-auto md:w-3/5 lg:w-1/2">
                <div className="bg-white mb-4 px-2 py-2 rounded-xl text-center ">
                    <h2 className="h2 text-4xl text-center text-blue-600 font-bold pb-4">Tourists Spots</h2>
                    <p className="text-[16px] py-2 ">This tourist destination, of course, is not located in any foreign country, rather it sits very comfortably right here in my beautiful country on its northwest part.  I have always wanted to visit this beautiful and exotic place</p>
                </div>
                    <hr />
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    myTravels?.map((tour, index) => <CountriesSectionCard key={tour._id} tour={tour} index={index}></CountriesSectionCard>)
                }
            </div>
        </div>
    );
};

export default CountriesSection;

CountriesSection.propTypes = {
    travels: PropTypes.object
}