

const SingleData = ({data}) => {
     const { _id, name, countryName, location, description, average, seasonality, travelTime, totalVisitors, userEmail, userName, image } = data;
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
                <td>Update</td>
                <td>Delete</td>
                
                

            </tr>
        </div>
    );
};

export default SingleData;