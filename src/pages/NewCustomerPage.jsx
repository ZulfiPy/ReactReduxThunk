import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewCustomer } from "../features/customersSlice";
import { nanoid } from "nanoid";
import getFormattedDate from "../getFormattedDate";

const NewCustomerPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [isikukood, setIsikukood] = useState("");
    const [driverLicenseNumber, setDriverLicenseNumber] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const clearInput = () => {
        setName("");
        setSurname("");
        setIsikukood("");
        setDriverLicenseNumber("");
        setAddress("");
        setEmail("");
        setPhone("");
    }

    const [addRequestStatus, setAddRequestStatus] = useState("idle");

    const canSave = [name, surname, isikukood, driverLicenseNumber, address, email, phone].every(Boolean) && addRequestStatus === "idle";

    const onSaveCustomer = () => {
        if (canSave) {
            try {
                setAddRequestStatus("pending");
                dispatch(
                    addNewCustomer({
                        id: nanoid(),
                        name,
                        surname,
                        isikukood,
                        driverLicenseNumber,
                        address,
                        email,
                        phone,
                        addedAt: getFormattedDate()
                    })
                ).unwrap()
                clearInput();
                navigate("/customers");
            } catch (error) {
                console.error("Failed to save the customer", error);
            } finally {
                setAddRequestStatus("idle");
            }
        }
    }

    return (
        <main className="NewCustomer">
            <h2>NEW CUSTOMER FORM</h2>
            <form className="inputForm">
                <div className="inputWrap">
                    <label htmlFor="name">NAME:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter a name"
                        required
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="surname">SURNAME:</label>
                    <input
                        type="text"
                        id="surname"
                        placeholder="Enter a surname"
                        required
                        value={surname}
                        onChange={(event) => setSurname(event.target.value)}
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="isikukood">ISIKUKOOD:</label>
                    <input
                        type="text"
                        id="isikukood"
                        placeholder="Enter a isikukood"
                        required
                        value={isikukood}
                        onChange={(event) => setIsikukood(event.target.value)}
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="driverLicenseNumber">DRIVER LICENSE NUMBER:</label>
                    <input
                        type="text"
                        id="driverLicenseNumber"
                        placeholder="Enter a driver license number"
                        required
                        value={driverLicenseNumber}
                        onChange={(event) => setDriverLicenseNumber(event.target.value)}
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="address">ADDRESS:</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Enter an address"
                        required
                        value={address}
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="email">EMAIL:</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter an email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="phone">PHONE:</label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Enter a phone"
                        required
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />
                </div>

                <div>
                    <button disabled={!canSave} type="button" onClick={onSaveCustomer}>ADD NEW CUSTOMER TO THE DATABASE</button>
                </div>
            </form>
        </main>
    )
}

export default NewCustomerPage;