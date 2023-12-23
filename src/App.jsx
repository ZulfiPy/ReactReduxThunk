import Home from "./components/Home"
import Layout from "./Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CustomerPage from "./pages/CustomersPage";
import VehiclesPage from "./pages/VehiclesPage";
import Missing from "./pages/Missing";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="customers" element={<CustomerPage />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="*" element={<Missing />}/>
        </Route>
      </Routes>
    </main>
  )
}

export default App;