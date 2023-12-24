import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faPersonCirclePlus, faUsersViewfinder } from "@fortawesome/free-solid-svg-icons";

const CustomersModule = () => {
    const navigate = useNavigate();

    return (
        <main className="InnerModule">
            <div className="InnerModuleRow">
                <div onClick={() => navigate("/customer_module/customer")}>
                    <h2>ADD CUSTOMER</h2>
                    <FontAwesomeIcon icon={faPersonCirclePlus} size="2xl" />
                </div>

                <div onClick={() => navigate("/customer_module/customers")}>
                    <h2>FIND CUSTOMER</h2>
                    <FontAwesomeIcon icon={faUsersViewfinder} size="2xl" />
                </div>
            </div>
        </main>
    )
}

export default CustomersModule;
