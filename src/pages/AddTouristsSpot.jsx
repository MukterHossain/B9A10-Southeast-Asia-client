import { Fade } from 'react-awesome-reveal';
import { Cursor, Typewriter } from 'react-simple-typewriter';
import Swal from 'sweetalert2'

const AddTouristsSpot = () => {

    const handleAddTouristSpot = event => {
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
        const userEmail = form.userEmail.value;
        const userName = form.userName.value;
        const image = form.image.value;
        const newAdd = { name, countryName, location, description, average, seasonality, travelTime, totalVisitors, userEmail, userName, image };
        console.log(newAdd)
        //sent data to the server
        fetch('http://localhost:5000/country', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdd)
        })
            .then(res => res.json())
            .then(() => {
                Swal.fire({
                    title: 'Success !',
                    text: 'Data added successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                })
            })
    }



    return (
        <div className="mt-12  p-16 text-black">
            <div className='bg-white mb-4 rounded-xl text-center mx-auto md:w-3/5 lg:w-1/2'>
                <h2 className="md:text-5xl text-3xl text-center text-blue-600 font-bold pb-3 "><span><Typewriter
                    words={['Add Tourists Spot']}
                    loop={false}
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                /></span>
                    <Cursor></Cursor>
                </h2>
                <div className=' mb-4  px-4  '>
                    <p className="text-[16px]  py-2">If I were to choose between money and traveling, I would choose the latter. Because traveling gives us life lessons. It teaches us about the beauty of nature. So add yours</p>
                </div>
            </div>

            <hr className='px-4 text-center mx-auto md:w-3/5 lg:w-1/2' />
            <Fade direction="down" cascade={false} delay={400} triggerOnce={true} > <div className="md:w-4/5 lg:3/5 text-black w-full mx-auto bg-orange-200 mt-10 rounded-2xl shadow-2xl p-4">
                <form onSubmit={handleAddTouristSpot}>
                    {/* form name and quantity row */}
                    <div className="md:flex gap-4 mb-6">
                        <div className="form-control  md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tourists_spot_name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" className="input input-bordered bg-white w-full"
                                    placeholder="Tourists_spot_name" />
                            </label>
                        </div>


                        <div className="form-control md:w-1/2 ">
                            <label className="label">
                                <span className="label-text">Country_Name</span>
                            </label>
                            <div className='w-full py-3 px-2 border-2 bg-white rounded-lg '>
                                <select name="countryName" id="" className='bg-white'>
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
                                <input type="text" name="location" className="input input-bordered bg-white w-full" placeholder="Location" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" className="input input-bordered bg-white w-full" placeholder="Short description" />
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
                                <input type="text" name="average" className="input input-bordered bg-white w-full" placeholder="Average_cost" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seasonality" className="input input-bordered bg-white w-full" placeholder="seasonality" />
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
                                <input type="text" name="travelTime" className="input input-bordered bg-white w-full" placeholder="travel_time" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Total Visitors PerYear</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="totalVisitors" className="input bg-white input-bordered w-full" placeholder="TotalVisitorsPerYear" />
                            </label>
                        </div>
                    </div>
                    {/* form  User Email and User Name */}
                    <div className="md:flex gap-4 mb-6">
                        <div className="form-control  md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userEmail" className="input input-bordered bg-white w-full" placeholder="User Email" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userName" className="input input-bordered bg-white w-full" placeholder="User Name" />
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
                                <input type="text" name="image" className="input input-bordered bg-white w-full" placeholder="Photo URL" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Spot " className="btn btn-block bg-blue-400 text-xl font-bold hover:bg-pink-400" />
                </form>
            </div>
            </Fade>
        </div>

    );
};

export default AddTouristsSpot;