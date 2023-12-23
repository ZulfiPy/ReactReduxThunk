import { useSelector } from "react-redux";
import { getCustomersStatus, getCustomersError } from "../features/customersSlice";
import CustomerTable from "../components/customersComponents/CustomerTable";

const CustomerModule = () => {
    const customersStatus = useSelector(getCustomersStatus);
    const error = useSelector(getCustomersError);

    let content;
    if (customersStatus === "loading") {
        content = <p>&quot;Loading...&quot;</p>
    } else if (customersStatus === "succeeded") {
        content = <CustomerTable />;
    } else if (customersStatus === "failed") {
        content = <p>{error}</p>;
    }

    return (
        <main className="ModuleContent">
            <h2>Customers Database Module</h2>
            {content}
        </main>
    )
}

export default CustomerModule;