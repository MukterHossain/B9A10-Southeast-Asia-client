// import { useEffect } from "react";
import {  useParams } from "react-router-dom";


const AllSpots = () => {
    
    const {id} = useParams()
  
    // useEffect(() =>{
    //     fetch(`http://localhost:5173/allTourist/${id}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [id])
    
    // console.log(countriesData)
    // const { _id, name, countryName, location, description, average, seasonality, travelTime, totalVisitors, userEmail, userName, image } = useLoaderData();
    return (
        <div>
            <h2>Hello: {id} </h2>
        </div>
    );
};

export default AllSpots;