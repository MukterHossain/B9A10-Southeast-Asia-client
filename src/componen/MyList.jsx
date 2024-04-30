import { useLoaderData } from "react-router-dom";
import SingleData from "../pages/SingleData";


const MyList = () => {

    const dataShow = useLoaderData()
    

    return (
        <div className="mt-12">
            <div>
                <table className="w-full">
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
                    
                       <div className="w-full">
                       {
                            dataShow?.map(data => <SingleData key={data._id} data={data}></SingleData>)
                        }
                       </div>
                    
                </table>
            </div>
        </div>
    );
};

export default MyList;