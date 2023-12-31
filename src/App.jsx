import Home from "./components/Home"
import Layout from "./Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomersModule from "./pages/CustomersModule";
import CustomersPage from "./pages/CustomersPage";
import NewCustomerPage from "./pages/NewCustomerPage";
import CustomerViewPage from "./pages/CustomerViewPage";
import CustomerEditPage from "./pages/CustomerEditPage";
import VehiclesPage from "./pages/VehiclesPage";
import DiscountPage from "./pages/DiscountPage";
import InsurancePage from "./pages/InsurancePage";
import TicketsPage from "./pages/TicketsPage";
import AccidentsPage from "./pages/AccidentsPage";
import TasksPage from "./pages/TasksPage";
import CRMPage from "./pages/CRMPage";
import DebtorPage from "./pages/DebtorPage";
import Missing from "./pages/Missing";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="customer_module">
            <Route index element={<CustomersModule />}/>
            <Route path="customers" element={<CustomersPage />}/>
            <Route path="customer" element={<NewCustomerPage />}/>
            <Route path="view/:isikukood" element={<CustomerViewPage />}/>
            <Route path="edit/:isikukood" element={<CustomerEditPage />}/>
          </Route>
          <Route path="vehicles" element={<VehiclesPage />}/>
          <Route path="discount" element={<DiscountPage />}/>
          <Route path="insurance" element={<InsurancePage />}/>
          <Route path="tickets" element={<TicketsPage />}/>
          <Route path="accidents" element={<AccidentsPage />}/>
          <Route path="tasks" element={<TasksPage />}/>
          <Route path="crm" element={<CRMPage />}/>
          <Route path="debtor" element={<DebtorPage />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="*" element={<Missing />}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App;