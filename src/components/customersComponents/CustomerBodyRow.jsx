const CustomerBodyRow = ({ customer }) => {
    return (
        <tr>
            <td>{customer.name}</td>
            <td>{customer.surname}</td>
            <td>{customer.isikukood}</td>
            <td>{customer.driverLicenseNumber}</td>
            <td>{customer.address}</td>
            <td>{customer.email}</td>
            <td>{customer.phone}</td>
            <td>
                <button
                    type="button"
                    className="viewButton"
                >VIEW</button>
            </td>
            <td>
                <button
                    type="button"
                    className="deleteButton"
                >DELETE</button>
            </td>

        </tr>
    )
}

export default CustomerBodyRow;