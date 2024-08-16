import { useLoaderData } from "react-router-dom";
import AllSpots from "../pages/AllSpots";
import { useState } from "react";
import { Typewriter, Cursor } from 'react-simple-typewriter';


const AllTouristSpot = () => {
    const allSports = useLoaderData()
    const [items, setItems] = useState(allSports)
    console.log(allSports)

    const handleSortChange = (event) => {
        const sortOrder = event.target.value;
        const sortItems = [...items].sort((a, b) => {
            if (sortOrder === 'asc') {
                return a.average - b.average;
            }
            else {
                return b.average - a.average
            }
        });
        setItems(sortItems)
    }

    return (
        <div>
            <div className="form-control  mt-10 mb-5">
                <label className="text-3xl text-blue-500 font-bold" htmlFor="sortOrder">
                    <span><Typewriter
                        words={['Sort by Average Cost']}
                        loop={false}
                        typeSpeed={100}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    /></span>
                    <Cursor></Cursor>
                </label>
                <div className=' py-3 px-2  '>
                    <select className="py-3 pl-5 pr-32 border-gray-300 text-green-500 font-semibold border-2 outline-none rounded-lg" name="" id="sortOrder" onChange={handleSortChange}>
                        <option value="">Select One</option>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    items.map((allSport, index) => <AllSpots key={allSport._id} index={index} allSport={allSport}></AllSpots>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;