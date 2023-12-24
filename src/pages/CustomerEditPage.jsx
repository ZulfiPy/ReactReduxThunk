import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { selectAllCustomers } from "../features/customersSlice";
import { updateCustomer } from "../features/customersSlice";
import getFormattedDate from "../getFormattedDate";

const CustomerEditPage = () => {
    const { isikukood } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const customers = useSelector(selectAllCustomers);
    const customer = customers.find(customer => customer.isikukood === isikukood);

    const [editName, setEditName] = useState("");
    const [editSurname, setEditSurname] = useState("");
    const [editIsikukood, setEditIsikukood] = useState("");
    const [editDriverLicenseNumber, setEditDriverLicenseNumber] = useState("");
    const [editAddress, setEditAddress] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editPhone, setEditPhone] = useState("");

    useEffect(() => {
        if (customer) {
            setEditName(customer.name);
            setEditSurname(customer.surname);
            setEditIsikukood(customer.isikukood);
            setEditDriverLicenseNumber(customer.driverLicenseNumber);
            setEditAddress(customer.address);
            setEditEmail(customer.email);
            setEditPhone(customer.phone);
        }
    }, [customer])

    const setInput = () => {
        setEditName("");
        setEditSurname("");
        setEditIsikukood("");
        setEditDriverLicenseNumber("");
        setEditAddress("");
        setEditEmail("");
        setEditPhone("");
    }

    const onSaveUpdatedCustomer = async () => {
        const newDate = getFormattedDate();
        const edittedArray = customer.editedAt ? [...customer.editedAt, newDate] : [newDate];

        try {
            await dispatch(
                updateCustomer({
                    id: customer.id,
                    name: editName,
                    surname: editSurname,
                    isikukood: editIsikukood,
                    driverLicenseNumber: editDriverLicenseNumber,
                    address: editAddress,
                    email: editEmail,
                    phone: editPhone,
                    addedAt: customer.addedAt,
                    editedAt: edittedArray
                })
            ).unwrap();
            setInput();
            navigate("/customers");
        } catch (error) {
            console.error("Error occured:", error);
        }
    }

    return (
        <main className="EditCustomer">
            <article>
                {customer && 
                    <>
                        <h2>EDIT CUSTOMER DATA FORM</h2>
                        <form className="inputForm">
                            <div className="inputWrap">
                                <label htmlFor="editName">NAME:</label>
                                <input
                                    id="editName"
                                    type="text"
                                    value={editName}
                                    onChange={(event) => setEditName(event.target.value)}
                                />
                            </div>

                            <div className="inputWrap">
                                <label htmlFor="editSurname">SURNAME:</label>
                                <input
                                    id="editSurname"
                                    type="text"
                                    value={editSurname}
                                    onChange={(event) => setEditSurname(event.target.value)}
                                />
                            </div>

                            <div className="inputWrap">
                                <label htmlFor="editIsikukood">ISIKUKOOD:</label>
                                <input
                                    id="editIsikukood"
                                    type="text"
                                    value={editIsikukood}
                                    onChange={(event) => setEditIsikukood(event.target.value)}
                                />
                            </div>

                            <div className="inputWrap">
                                <label htmlFor="editDriverLicenseNumber">DRIVER LICENSE NUMBER:</label>
                                <input
                                    id="editDriverLicenseNumber"
                                    type="text"
                                    value={editDriverLicenseNumber}
                                    onChange={(event) => setEditDriverLicenseNumber(event.target.value)}
                                />
                            </div>

                            <div className="inputWrap">
                                <label htmlFor="editAddress">ADDRESS:</label>
                                <input
                                    id="editAddress"
                                    type="text"
                                    value={editAddress}
                                    onChange={(event) => setEditAddress(event.target.value)}
                                />
                            </div>

                            <div className="inputWrap">
                                <label htmlFor="editEmail">EMAIL:</label>
                                <input
                                    id="editEmail"
                                    type="text"
                                    value={editEmail}
                                    onChange={(event) => setEditEmail(event.target.value)}
                                />
                            </div>

                            <div className="inputWrap">
                                <label htmlFor="editPhone">PHONE:</label>
                                <input
                                    id="editPhone"
                                    type="text"
                                    value={editPhone}
                                    onChange={(event) => setEditPhone(event.target.value)}
                                />
                            </div>

                            <div>
                                <button 
                                    type="button"
                                    onClick={onSaveUpdatedCustomer}
                                >SAVE CHANGES</button>
                            </div>
                            
                        </form>
                    </>
                }
                {!customer && <p>Customer is loading...</p>}
            </article>
        </main>
    )
}

export default CustomerEditPage;