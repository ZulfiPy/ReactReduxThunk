import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCustomer } from "../../features/customersSlice";

const CustomerBodyRow = ({ customer }) => {
    const dispatch = useDispatch();
    const [requestStatus, setRequestStatus] = useState("idle")

    const onDeleteCustomer = () => {
        try {
            setRequestStatus("pending");
            dispatch(
                deleteCustomer({ id: customer.id })
            ).unwrap()
        } catch (error) {
            console.error("Error occured", error);
        } finally {
            setRequestStatus("idle");
        }
    }

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
                    onClick={onDeleteCustomer}
                >DELETE</button>
            </td>

        </tr>
    )
}

export default CustomerBodyRow;