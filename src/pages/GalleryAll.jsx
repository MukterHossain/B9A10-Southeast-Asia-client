import { useLoaderData } from "react-router-dom";
import GalleryAllCard from "./GalleryAllCard";


const GalleryAll = () => {
    const pictures = useLoaderData()



    return (
        <div>
            <div className="text-black my-6 mx-auto md:w-3/5 lg:w-1/2">
                <div className="bg-white mb-4 px-2 py-2 rounded-xl text-center ">
                    <h2 className="h2 text-4xl text-center text-blue-600 font-bold pb-4">Gallery</h2>
                </div>
                <hr />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    pictures?.map((item, index) => <GalleryAllCard key={item._id} item={item} index={index}></GalleryAllCard>)
                }
            </div>
        </div>
    );
};

export default GalleryAll;