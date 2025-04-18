import React, {useContext, useEffect} from "react";
import {getEquipmentById, updateEquipmentById} from "../services/ApiService";
import {NavLink, useNavigate, useParams} from 'react-router-dom';
import {EquipmentContext} from "../context/EquipmentContext";

export default function UpdateEquipmentForm() {

  const { id } = useParams();
  const navigate = useNavigate();
  const {equipment, updateEquipment} = useContext(EquipmentContext);

  async function update(target) {
    target.preventDefault();

    try {
      const response = await updateEquipmentById(id, equipment);
      navigate(`/${response.id}`);
    } catch (error) {
      console.error('Error', error);
    }
  }

  useEffect(() => {

    async function fetchData() {
      try {
        const equipment = await getEquipmentById(id);
        updateEquipment(equipment);
      } catch (error) {
        console.error('Error fetching equipments:', error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (event) => {
    const { id, value } = event.target;

    switch (id) {
      case "name":
        updateEquipment({...equipment, name: value});
        break;
      case "type":
        updateEquipment({...equipment, type: value});
        break;
      case "manufacturer":
        updateEquipment({...equipment, manufacturer: value});
        break;
      case "model":
        updateEquipment({...equipment, model: value});
        break;
      case "serialNumber":
        updateEquipment({...equipment, serialNumber: value});
        break;
      case "location":
        updateEquipment({...equipment, location: value});
        break;
      case "status":
        updateEquipment({...equipment, status: value});
        break;
      case "description":
        updateEquipment({...equipment, description: value});
        break;
      default:
        break;
    }
  };

  return(
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Equipments</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink active to={`/${id}`}>{id}</NavLink>
          </li>
          <li className="breadcrumb-item active">
            <NavLink active to={`/${id}/edit`}>edit</NavLink>
          </li>
        </ol>
      </nav>
      <form>
        <div className="mb-3 mt-5">
          <label htmlFor="name" className="fw-bold form-label">Name</label>
          <input onChange={handleChange} value={equipment.name} type="text" className="form-control" id="name" aria-describedby="nameHelp" />
          <div id="nameHelp" className="form-text">Input the equipment name here.</div>
        </div>
        <div className="mb-3">
          <div className="row">
            <div className="col-6">
              <label htmlFor="type" className="fw-bold form-label">Price</label>
              <input onChange={handleChange} value={equipment.type} type="string" className="form-control" id="type" />
            </div>
            <div className="col-6">
              <label htmlFor="manufacturer" className="fw-bold form-label">Quantity</label>
              <input onChange={handleChange} value={equipment.manufacturer} type="string" className="form-control" id="manufacturer" />
            </div>
            <div className="col-6">
              <label htmlFor="model" className="fw-bold form-label">Model</label>
              <input onChange={handleChange} value={equipment.model} type="string" className="form-control" id="model" />
            </div>
            <div className="col-6">
              <label htmlFor="serialNumber" className="fw-bold form-label">Serial Number</label>
              <input onChange={handleChange} value={equipment.serialNumber} type="string" className="form-control" id="serialNumber" />
            </div>
            <div className="col-6">
              <label htmlFor="location" className="fw-bold form-label">Location</label>
              <input onChange={handleChange} value={equipment.location} type="string" className="form-control" id="location" />
            </div>
            <div className="col-6">
              <label htmlFor="status" className="fw-bold form-label">Status</label>
              <input onChange={handleChange} value={equipment.status} type="string" className="form-control" id="status" />
            </div>
            <div className="col-6">
              <label htmlFor="description" className="fw-bold form-label">Description</label>
              <input onChange={handleChange} value={equipment.description} type="string" className="form-control" id="description" />
            </div>
          </div>

        </div>
        <button onClick={update} type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );

}
