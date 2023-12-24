import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteCustomer } from "../features/customersSlice";
import { selectAllCustomers } from "../features/customersSlice";

const CustomerViewPage = () => {
    const [requestStatus, setRequestStatus] = useState("idle");
    const { isikukood } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const customers = useSelector(selectAllCustomers);
    const customer = customers.find(customer => customer.isikukood === isikukood);

    const onDeleteCustomer = async () => {
        try {
            setRequestStatus("pending");
            await dispatch(
                deleteCustomer({ id: customer.id })
            ).unwrap();
            navigate("/customers");
        } catch (error) {
            console.error("Error occured", error);
        } finally {
            setRequestStatus("idle");
        }
    }
    
    return (
        <main className="Customer">
            <article>
                {customer &&
                <>
                    <h2>{customer.name} {customer.surname} profile</h2>
                    <p><span className="profileSpan">NAME:</span> {customer.name}</p>
                    <p><span className="profileSpan">SURNAME:</span> {customer.surname}</p>
                    <p><span className="profileSpan">ISIKUKOOD:</span> {customer.isikukood}</p>
                    <p><span className="profileSpan">DRIVER LICENSE NR.:</span> {customer.driverLicenseNumber}</p>
                    <p><span className="profileSpan">ADDRESS:</span> {customer.address}</p>
                    <p><span className="profileSpan">EMAIL:</span> {customer.email}</p>
                    <p><span className="profileSpan">PHONE:</span> {customer.phone}</p>

                    <button
                        type="button"
                        className="editButton"
                        onClick={() => navigate(`/customer/edit/${customer.isikukood}`)}
                    >EDIT</button>
                    <button
                        type="button"
                        className="deleteButton"
                        onClick={onDeleteCustomer}
                    >DELETE</button>
                </>
                }
                {!customer && 
                    <p>Customer page not found, sorry...</p>
                }
            </article>
        </main>
    )
}

export default CustomerViewPage;