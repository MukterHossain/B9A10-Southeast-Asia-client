import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";


const CountriesSectionCard = ({ tour, index }) => {
    const { _id,  countryName, description, image } = tour;


    return (
        <div>
            <Fade direction="up" cascade={false} delay={index * 200} triggerOnce={true} >
            <div className="card bg-lime-400 hover:bg-indigo-400 shadow-xl p-3 ">
                <figure><img className="rounded-xl w-full" src={image} alt="Shoes" /></figure>
                <div className="">
                    <h2 className="card-title">{countryName}</h2>
                    <p>{description.slice(0, 80)}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                        
                        <button className="btn hover:bg-lime-400 bg-green-400">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
};

export default CountriesSectionCard;