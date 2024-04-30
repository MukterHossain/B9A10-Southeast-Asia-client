import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SingleData = ({ data, setDataShow, dataShow }) => {
    const { _id, name, countryName, location, average, travelTime, userEmail, image } = data;

    const handleDelete = _id => {
        console.log(_id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/travel/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your card has been deleted.",
                                icon: "success"
                            });
                            const remainData = dataShow.filter(aData => aData._id !== _id);
                            setDataShow(remainData)
                        }
                    })
            }
        });
    }


    return (
        <div>

            <tr>
                <td>{name}</td>
                <td>{countryName}</td>
                <td>{image}</td>
                <td>{travelTime}</td>
                <td>{average}</td>
                <td>{location}</td>
                <td>{userEmail}</td>
                <td>
                    <Link to={`/update/${_id}`}>
                    <button className="btn btn-sm bg-green-400">Update</button></Link>
                    </td>
                <td><button onClick={() => handleDelete(_id)} className="btn btn-sm bg-red-500">Delete</button></td>
            </tr>
        </div>
    );
};

export default SingleData;