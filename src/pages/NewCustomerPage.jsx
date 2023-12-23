const NewCustomerPage = () => {
    
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
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="surname">SURNAME:</label>
                    <input
                        type="text"
                        id="surname"
                        placeholder="Enter a surname"
                        required
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="isikukood">ISIKUKOOD:</label>
                    <input
                        type="text"
                        id="isikukood"
                        placeholder="Enter a isikukood"
                        required
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="driverLicenseNumber">DRIVER LICENSE NUMBER:</label>
                    <input
                        type="text"
                        id="driverLicenseNumber"
                        placeholder="Enter a driver license number"
                        required
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="address">ADDRESS:</label>
                    <input
                        type="text"
                        id="address"
                        placeholder="Enter an address"
                        required
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="email">EMAIL:</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter an email"
                        required
                    />
                </div>
                <div className="inputWrap">
                    <label htmlFor="phone">PHONE:</label>
                    <input
                        type="text"
                        id="phone"
                        placeholder="Enter a phone"
                        required
                    />
                </div>

                <div>
                    <button type="submit">ADD NEW CUSTOMER TO THE DATABASE</button>
                </div>
            </form>
        </main>
    )
}

export default NewCustomerPage;