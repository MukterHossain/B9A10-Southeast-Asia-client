import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import { Link } from "react-router-dom";


const Gallery = () => {
    const [pictures, setPictures] = useState(null)

    useEffect(() => {
        fetch('https://b9-a10-southeast-asia-server.vercel.app/pictures')
            .then(res => res.json())
            .then(data => setPictures(data))
    }, [])
    const picturesData = pictures?.slice(0, 6)


    return (
        <div>
            <div className="text-black my-6 mx-auto md:w-3/5 lg:w-1/2">
                <div className="bg-white mb-4 px-2 py-2 rounded-xl text-center ">
                    <h2 className="h2 text-4xl text-center text-blue-600 font-bold pb-4">Gallery</h2>
                    <p className="text-[16px] py-2 ">This tourist destination, of course, is not located in any foreign country, rather it sits very comfortably right here in my beautiful country on its northwest part</p>
                    
                </div>
                <hr />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    picturesData?.map((item, index) => <GalleryCard key={item._id} item={item} index={index}></GalleryCard>)
                }
            </div>
            <div className="card-actions justify-center mt-6">
                <Link to={'/pictures'}>

                    <button className="btn hover:bg-orange-600 text-[16px] text-white font-bold bg-green-600">All Gallery</button>
                </Link>
            </div>
        </div>
    );
};

export default Gallery;