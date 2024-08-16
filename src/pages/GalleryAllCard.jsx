import { Fade } from "react-awesome-reveal";


const GalleryAllCard = ({item, index}) => {
    const { image, countryName, spotName } = item;
    return (
        <div>
            <Fade direction="up" cascade={false} delay={index * 200} triggerOnce={true} >
            <div className="card relative shadow-xl p-2 ">
                    <div className="relative">
                        <div className="">
                            <figure><img className="rounded-xl w-full" src={image} alt="Shoes" /></figure>

                        </div>
                        <div className="w-full h-full absolute top-0 left-0 ">
                            <div className="w-full opacity-60  hover:bg-gray-500 h-full rounded-lg  hover:scale-105 duration-700 bg-auto hover:bg-contain ">
                                <div className="flex h-full flex-col items-center justify-center">
                                    <h2 className="card-title  text-white font-bold text-2xl md:text-3xl">{spotName}</h2>
                                    <h2 className="card-title text-white font-bold  text-xl">{countryName}</h2>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default GalleryAllCard;