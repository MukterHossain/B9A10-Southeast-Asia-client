import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const SingleData = ({ data, setDataShow, dataShow }) => {
    const { _id, name, location, average, travelTime } = data;

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

                fetch(`https://b9-a10-southeast-asia-server.vercel.app/country/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
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
        <>
            <tr className="border-b text-sm border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                <td className="p-3">
                    <p>{name}</p>
                </td>
                <td className="p-3">
                    <p>${average}</p>
                </td>
                <td className="p-3">
                    <p>{travelTime}</p>
                </td>
                <td className="p-3">
                    <p>{location}</p>
                </td>
                <td className="p-3 text-right">
                    <Fade direction="left" cascade={false} delay={1000} triggerOnce={true}> <Link to={`/update/${_id}`}>
                        <button className="btn btn-sm bg-green-400">Update</button></Link> </Fade>
                </td>
                <td className="p-3 text-right">
                    <Fade direction="right" cascade={false} delay={1000} triggerOnce={true}> <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-red-500">Delete</button>
                    </Fade>
                </td>
            </tr>
        </>
    );
};

export default SingleData;