import { useLoaderData } from "react-router-dom";
import SingleData from "../pages/SingleData";
import { useState } from "react";


const MyList = () => {

    const dataShowLoaded = useLoaderData()
    const [dataShow, setDataShow] = useState(dataShowLoaded)
    

    return (
        <div className="mt-12">

            <div className="w-full">
            <tr className="w-full">
                        <th>Spot Name</th>
                        <th>CounTry Name</th>
                        <th>Average_Cost</th>
                        <th>Photo</th>
                        <th>Travel Time</th>
                        <th>Location</th>
                        <th>User Email</th>
                        <th>Update/Delete</th>
                    </tr>
            </div>
           
                <table className="w-full">
                    
                       {
                            dataShow?.map(data => <SingleData key={data._id}  data={data} setDataShow={setDataShow} dataShow={dataShow} ></SingleData>)
                        }                   
                </table>           
        </div>
    );
};

export default MyList;