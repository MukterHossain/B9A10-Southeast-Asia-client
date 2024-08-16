import { useLoaderData } from "react-router-dom";
import AllCountriesCard from "../pages/AllCountriesCard";


const AllCountries = () => {
   const myData = useLoaderData('')


    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    myData?.map((dataItem, index) => <AllCountriesCard key={dataItem._id} index={index} dataItem={dataItem}></AllCountriesCard>)
                }
            </div>
        </div>
    );
};

export default AllCountries;