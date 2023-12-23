import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import { faUsersBetweenLines, faCarRear, faCarBurst, faShieldHeart, faCalculator, faTicket, faHandshake, faClipboard, faPercent, } from "@fortawesome/free-solid-svg-icons";

const ModulesBox = () => {
    const navigate = useNavigate('');

    return (
        <main className="ModulesContainer">

            <div className="ModuleRow">
                <div className="Module" onClick={() => navigate("customers")}>
                    <h2>CUSTOMERS</h2>
                    <FontAwesomeIcon icon={faUsersBetweenLines} size="2xl" />
                </div>

                <div className="Module">
                    <h2>VEHICLES</h2>
                    <FontAwesomeIcon icon={faCarRear} size="2xl" />
                </div>

                <div className="Module">
                    <h2>DISOUNT</h2>
                    <FontAwesomeIcon icon={faPercent} size="2xl" />
                </div>
            </div>

            <div className="ModuleRow">
                <div className="Module">
                    <h2>INSURANCE</h2>
                    <FontAwesomeIcon icon={faShieldHeart} size="2xl" />
                </div>

                <div className="Module">
                    <h2>TICKETS</h2>
                    <FontAwesomeIcon icon={faTicket} size="2xl" />
                </div>

                <div className="Module">
                    <h2>ACCIDENTS</h2>
                    <FontAwesomeIcon icon={faCarBurst} size="2xl" />
                </div>
            </div>

            <div className="ModuleRow">
                <div className="Module">
                    <h2>TASKS</h2>
                    <FontAwesomeIcon icon={faClipboard} size="2xl" />
                </div>

                <div className="Module">
                    <h2>CRM</h2>
                    <FontAwesomeIcon icon={faHandshake} size="2xl" />
                </div>

                <div className="Module">
                    <h2>DEBTOR</h2>
                    <FontAwesomeIcon icon={faCalculator} size="2xl" />
                </div>
            </div>
        </main>
    )
}

export default ModulesBox;