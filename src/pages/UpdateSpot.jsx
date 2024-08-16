import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";
import { Cursor, Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";


const UpdateSpot = () => {
    const update = useLoaderData()
    const { _id, name, countryName, location, description, seasonality, travelTime, totalVisitors, image, average } = update;

    const handleUpdateTouristSpot = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const average = form.average.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitors = form.totalVisitors.value;
        const image = form.image.value;
        const newTravel = { name, countryName, location, description, average, seasonality, travelTime, totalVisitors, image };


        //sent data to the server
        fetch(`http://localhost:5000/country/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTravel)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success !',
                        text: 'Data update successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }



    return (
        <div className="mt-12  p-20">
            <div className='bg-white mb-4 rounded-xl text-black py-2 text-center mx-auto md:w-3/5 lg:w-1/2'>
                <h2 className="md:text-5xl text-3xl text-center text-blue-600 font-bold pb-3 "><span><Typewriter
                    words={['Update  Tourists Spot']}
                    loop={false}
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></span>
                    <Cursor></Cursor>
                </h2>
                <div className=' mb-4  px-4  '>
                    <p className="text-[16px]  py-2">If I were to choose between money and traveling, I would choose the latter. Because traveling gives us life lessons. It teaches us about the beauty of nature. Updated now</p>
                </div>
            </div>

            <hr className='px-4 text-center mx-auto md:w-3/5 lg:w-1/2' />

            <Fade direction="up" cascade={false} delay={400} triggerOnce={true} > 
            <div className="md:w-4/5 lg:3/5 text-black w-full mx-auto bg-blue-200 mt-10 rounded-2xl shadow-2xl p-4">
                <form onSubmit={handleUpdateTouristSpot}>
                    {/* form name and quantity row */}
                    <div className="md:flex gap-4 mb-6">
                        <div className="form-control  md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tourists_spot_name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} className="input bg-white input-bordered w-full"
                                    placeholder="Tourists_spot_name" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Country_Name</span>
                            </label>
                            <div className='w-full py-3 px-2 border-2 rounded-lg bg-white '>
                                <select name="countryName" defaultValue={countryName} id="" className="bg-white">
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Vietnam">Vietnam</option>
                                    <option value="Cambodia">Cambodia</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* form description row */}
                    <div className="md:flex gap-4 mb-6">
                        <div className="form-control  md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="location" defaultValue={location} className="input bg-white input-bordered w-full" placeholder="Location" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" defaultValue={description} className="input bg-white input-bordered w-full" placeholder="Short description" />
                            </label>
                        </div>
                    </div>
                    {/* form Average_cost and seasonality */}
                    <div className="md:flex gap-4 mb-6">
                        <div className="form-control  md:w-1/2">
                            <label className="label">
                                <span className="label-text"> Average_cost</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="average" className="input input-bordered bg-white w-full" defaultValue={average} placeholder="Average_cost" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seasonality" defaultValue={seasonality} className="input bg-white input-bordered w-full" placeholder="Seasonality" />
                            </label>
                        </div>
                    </div>
                    {/* form  travel_time and totaVisitorsPerYear */}
                    <div className="md:flex gap-4 mb-6">
                        <div className="form-control  md:w-1/2">
                            <label className="label">
                                <span className="label-text">Travel_time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="travelTime" defaultValue={travelTime} className="input bg-white input-bordered w-full" placeholder="travel_time" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Total Visitors PerYear</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="totalVisitors" defaultValue={totalVisitors} className="input bg-white input-bordered w-full" placeholder="TotalVisitorsPerYear" />
                            </label>
                        </div>
                    </div>
                    {/* form image URL row */}
                    <div className=" mb-6">
                        <div className="form-control  w-full">
                            <label className="label">
                                <span className="label-text"> image URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" defaultValue={image} className="input bg-white input-bordered w-full" placeholder="Photo URL" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update " className="btn btn-block bg-blue-400 text-xl text-white outline-none font-bold hover:bg-pink-400" />
                </form>
            </div>
            </Fade>
        </div>
    );
};

export default UpdateSpot;