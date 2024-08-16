
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";


const CountriesShowCard = ({ country, index }) => {
    const { _id, image, countryName, short_description } = country;
    


 
    return (
        <>
            <Fade direction="down" cascade={false} delay={index * 200} triggerOnce={true} >
                <div className="p-3 bg-pink-200 hover:bg-lime-200 h-full rounded-2xl ">
                    <NavLink to={`/country/${countryName}`}>
                        <div className="card shadow-xl h-full">
                            <figure><img className="h-full" src={image} alt="Photo" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-green-800 font-bold">{countryName}</h2>
                                <p className="text-black">{short_description}</p>

                            </div>
                        </div>
                    </NavLink>
                </div>
            </Fade>
        </>
    );
};

export default CountriesShowCard;