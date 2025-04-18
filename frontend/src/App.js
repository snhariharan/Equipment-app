import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CreateEquipmentForm from './components/CreateEquipmentForm'
import NavBar from "./components/NavBar";
import EquipmentList from "./components/EquipmentList";
import Equipments from "./components/Equipments";
import { EquipmentListProvider } from "./context/EquipmentContext";
import EquipmentDetail from "./components/EquipmentDetail";
import UpdateEquipmentForm from './components/UpdateEquipmentForm';

function App() {
  return (
    <div className="App">
      <Router>
        <EquipmentListProvider>
          <div className="container">
            <NavBar/>
            <hr/>
            <Routes>
              <Route path="/new" element={<CreateEquipmentForm/>}/>
              <Route path="/" element={<Equipments/>}>
                <Route index element={<EquipmentList/>}/>
                <Route path=":id" element={<EquipmentDetail/>}/>
                <Route path=":id/edit" element={<UpdateEquipmentForm/>}/>
              </Route>
            </Routes>
            <div className="d-flex flex-row align-items-center footer bg-dark bg-opacity-25 shadow-lg mt-md-5">
              <p className="m-auto">s.n.hariharan@gmail.com | 2025</p>
            </div>
          </div>
        </EquipmentListProvider>
      </Router>
    </div>
  );
}

export default App;
