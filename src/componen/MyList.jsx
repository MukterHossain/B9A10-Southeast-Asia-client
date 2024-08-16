import { useLoaderData } from "react-router-dom";
import SingleData from "../pages/SingleData";
import { useState } from "react";


const MyList = () => {

    const dataShowLoaded = useLoaderData()
    const [dataShow, setDataShow] = useState(dataShowLoaded)


    return (
        <div className="mt-12">
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-sky-300">
                            <tr className="text-left text-[14px] font-bold">
                                <th className="p-3">Spot Name</th>
                                <th className="p-3">Average_Cost</th>
                                <th className="p-3">Travel Time</th>
                                <th className="p-3">Location</th>
                                <th className="p-3 text-right">Update</th>
                                <th className="p-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataShow?.map(data => <SingleData key={data._id} data={data} setDataShow={setDataShow} dataShow={dataShow} ></SingleData>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;