import { Link } from "react-router-dom";
import { Typewriter, Cursor } from 'react-simple-typewriter';
import { Fade } from "react-awesome-reveal";


const CountryBanner = () => {




    return (
        <div className="my-20">
            <div>
                <div className="carousel w-full relative ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={"https://i.ibb.co/pnNbsKQ/sundarban.jpg"}
                            className="w-full rounded-2xl" />
                        <div className="absolute flex flex-col justify-center items-center w-full h-full ">
                            <h2 className="text-5xl font-bold text-rose-600 "><span><Typewriter
                                words={['Sondarban']}
                                loop={false}
                                typeSpeed={100}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            /></span>
                                <Cursor></Cursor>
                            </h2>
                            <p className="py-4 text-lg text-white px-16 md:w-2/3 text-center"><Fade direction={"down"} delay={100} duration={1000} triggerOnce={true} damping={0.5}> Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. Sundarban Reserve Forest of Bangladesh is the largest mangrove forest in the world. </Fade> </p>

                            <Fade direction={"up"} delay={100} duration={1000} triggerOnce={true} damping={0.5}>
                                <Link to={`/login`}><button className="btn bg-green-600 text-white font-semibold" >Account Now!</button></Link>
                            </Fade>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={"https://i.ibb.co/yFb2xf3/malaysia-cameron-highlands.jpg"} className="w-full rounded-2xl" />
                        <div className="absolute flex flex-col justify-center items-center w-full h-full ">
                            <h2 className="text-5xl font-bold text-rose-600 ">
                                <span><Typewriter
                                    words={['Cameron Highlands']}
                                    loop={false}
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></span>
                                <Cursor></Cursor>
                            </h2>
                            <p className="py-4 text-lg text-white px-16 md:w-2/3 text-center"> <Fade direction={"down"} delay={100} duration={1000} triggerOnce={true} damping={0.5}> The Cameron Highlands is a district in Pahang, Malaysia, occupying an area of 712.18 square kilometres. To the north, its boundary touches that of Kelantan.</Fade></p>
                            <Fade direction={"up"} delay={100} duration={1000} triggerOnce={true} damping={0.5}>
                                <Link to={`/login`}><button className="btn bg-green-600 text-white font-semibold" >Account Now!</button></Link>
                            </Fade>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={"https://i.ibb.co/Tbc2hBj/angkor-wat-combodia.jpg"} className="w-full rounded-2xl" />
                        <div className="absolute flex flex-col justify-center items-center w-full h-full ">
                            <h2 className="text-5xl font-bold text-rose-600 ">
                                <span><Typewriter
                                    words={['Angkor Wat']}
                                    loop={false}
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></span>
                                <Cursor></Cursor>
                            </h2>
                            <p className="py-4 text-lg text-white px-16 md:w-2/3 text-center">
                                <Fade direction={"down"} delay={100} duration={1000} triggerOnce={true} damping={0.5}>
                                    Angkor Wat  is a Hindu-Buddhist temple complex in Cambodia. Located on a site the ancient Khmer capital city of Angkor, it is considered as the largest religious structure in the world by Guinness World Records.</Fade> </p>
                            <Fade direction={"up"} delay={100} duration={1000} triggerOnce={true} damping={0.5}>
                                <Link to={`/login`}><button className="btn bg-green-600 text-white font-semibold" >Account Now!</button></Link>
                            </Fade>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={"https://i.ibb.co/z8nP2Fq/raja-ampat-islands-indenesia.jpg"} className="w-full rounded-2xl" />
                        <div className="absolute flex flex-col justify-center items-center w-full h-full ">
                            <h2 className="text-5xl font-bold text-rose-600 ">
                                <span><Typewriter
                                    words={['Raja Ampat Islands']}
                                    loop={false}
                                    typeSpeed={100}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                /></span>
                                <Cursor></Cursor>
                            </h2>
                            <p className="py-4 text-lg text-white px-16 md:w-2/3 text-center"> <Fade direction={"down"} delay={100} duration={1000} triggerOnce={true} damping={0.5}>
                                Raja Ampat is an archipelago located of the northwest tip of Birds Head Peninsula, Southwest Papua province, Indonesia. It comprises over 1,500 small islands, cays, and shoals around the four main islands of Misool, Salawati, Batanta, and Waigeo.</Fade> </p>
                            <Fade direction={"up"} delay={100} duration={1000} triggerOnce={true} damping={0.5}>
                                <Link to={`/login`}><button className="btn bg-green-600 text-white font-semibold" >Account Now!</button></Link>
                            </Fade>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountryBanner;