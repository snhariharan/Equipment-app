import React, { useEffect, useContext } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { deleteEquipmentById, getEquipmentById } from '../services/ApiService';
import { EquipmentContext } from '../context/EquipmentContext';

export default function EquipmentDetail () {

  const { id } = useParams();
  const { equipment, updateEquipment, removeEquipmentById } = useContext(EquipmentContext);
  const navigate = useNavigate();

  useEffect(() => {

    async function fetchData () {
      try {
        const equipment = await getEquipmentById(id);
        updateEquipment(equipment);
      } catch (error) {
        console.error('Error fetching equipments:', error);
      }
    }

    fetchData();
  }, []);

  async function deleteEquipment () {
    try {
      await deleteEquipmentById(id);
      removeEquipmentById(id);
      navigate('/');
    } catch (error) {
      console.error('Error fetching equipments:', error);
    }
  }

  return (<div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Equipments</NavLink>
          </li>
          <li className="breadcrumb-item">
            <NavLink active to={`/${id}`}>{id}</NavLink>
          </li>
        </ol>
      </nav>
      <h4 className="text-center mb-5 mt-5">Equipment Info: {id}</h4>
      <table className="table">
        <tbody>
        <tr>
          <th scope="row">Name</th>
          <td>{equipment.name}</td>
        </tr>
        <tr>
          <th scope="row">Type</th>
          <td>{equipment.type}</td>
        </tr>
        <tr>
          <th scope="row">Manufacturer</th>
          <td>{equipment.manufacturer}</td>
        </tr>
        <tr>
          <th scope="row">Model</th>
          <td>{equipment.model}</td>
        </tr>
        <tr>
          <th scope="row">Serial Number</th>
          <td>{equipment.serial}</td>
        </tr>
        <tr>
          <th scope="row">Location</th>
          <td>{equipment.location}</td>
        </tr>
        <tr>
          <th scope="row">Status</th>
          <td>{equipment.status}</td>
        </tr>
        <tr>
          <th scope="row">Description</th>
          <td>{equipment.description}</td>
        </tr>
        </tbody>
      </table>
      <div>
        <div className="row">
          <div className="col-6">
            <NavLink className="btn btn-light" to={`/${id}/edit`}>Edit</NavLink>
          </div>
          <div className="col-6 text-end">
            <button onClick={deleteEquipment} className="btn btn-danger pull-right">Delete</button>
          </div>
        </div>
      </div>
    </div>);

}
