import { useSelector } from "react-redux";
import { selectAllCustomers } from "../../features/customersSlice";
import CustomerHeadRow from "./CustomerHeadRow";
import CustomerBodyRow from "./CustomerBodyRow";

const CustomerTable = () => {
    const customers = useSelector(selectAllCustomers);

    return (
        <form className="tableForm" onSubmit={(event) => event.preventDefault()}>
            <table className="customerTable">
                <thead>
                    <CustomerHeadRow />
                </thead>
                
                <tbody>
                    {customers.map(customer => 
                        <CustomerBodyRow
                            key={customer.id}
                            customer={customer}
                        />)}
                </tbody>
            </table>
        </form>
    )
}

export default CustomerTable;