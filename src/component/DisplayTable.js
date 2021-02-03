const DisplayTable = ({resultsets}) => {
    if(resultsets){
        return (
            <tbody>
            {   resultsets.map( result => (
                <tr>
                    <td>result.name</td>
                    <td>result.email</td>
                    <td>result.csp</td>
                    <td>result.level</td>
                    <td>result.certname</td>
                    <td>result.certid</td>
                    <td>result.startDate</td>
                    <td>result.expiry</td>
                    <td>result.validity</td>
                </tr>
            ))
            }
            </tbody>
        );
    }
    else{
        return(
            <h1> no data </h1>
        );
    }
}
export default DisplayTable;