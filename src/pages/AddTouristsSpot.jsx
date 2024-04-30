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

        //sent data to the server
        fetch('https://b9-a10-southeast-asia-server.vercel.app/travel', {
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
                    confirmButtonText: 'Cool'
                })
            })
    }



    return (
        <div className="mt-12  p-20">


            <h2 className="h2 text-3xl text-center text-blue-600 font-bold pb-5">Add Tourists Spot</h2>
            <div className="w-3/5 mx-auto mt-10">
                <form onSubmit={handleAddTouristSpot}>
                    {/* form name and quantity row */}
                    <div className="md:flex gap-4 mb-6">
                        <div className="form-control  md:w-1/2">
                            <label className="label">
                                <span className="label-text">Tourists_spot_name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" className="input input-bordered w-full"
                                    placeholder="Tourists_spot_name" />
                            </label>
                        </div>
                        

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Country_Name</span>
                            </label>
                            <div className='w-full py-3 px-2 border-2 rounded-lg '>
                            <select name="countryName" id="">
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
                                <input type="text" name="location" className="input input-bordered w-full" placeholder="Location" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="description" className="input input-bordered w-full" placeholder="Short description" />
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
                                <input type="text" name="average" className="input input-bordered w-full" placeholder="Average_cost" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seasonality" className="input input-bordered w-full" placeholder="seasonality" />
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
                                <input type="text" name="travelTime" className="input input-bordered w-full" placeholder="travel_time" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Total Visitors PerYear</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="totalVisitors" className="input input-bordered w-full" placeholder="TotalVisitorsPerYear" />
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
                                <input type="text" name="userEmail" className="input input-bordered w-full" placeholder="User Email" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="userName" className="input input-bordered w-full" placeholder="User Name" />
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
                                <input type="text" name="image" className="input input-bordered w-full" placeholder="Photo URL" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Spot " className="btn btn-block" />
                </form>
            </div>
        </div>

    );
};

export default AddTouristsSpot;