import React, {useContext, useEffect} from 'react';
import EquipmentTableRow from "./EquipmentTableRow";
import { EquipmentContext } from "../context/EquipmentContext";
import { getEquipments } from "../services/ApiService"
import {NavLink} from "react-router-dom";

export default function EquipmentList() {

  const { equipments, updateEquipments } = useContext(EquipmentContext);

  useEffect(() => {
    async function fetchData() {
      try {
        const equipments = await getEquipments();
        updateEquipments(equipments);
      } catch (error) {
        console.error('Error fetching equipments:', error);
      }
    }

    fetchData();
  }, []);

  return(
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <NavLink to="/">Equipments</NavLink>
          </li>
        </ol>
      </nav>
      <table className="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Location</th>
          <th scope="col">Status</th>
        </tr>
        </thead>
        <tbody>
        {equipments.map(equipment => <EquipmentTableRow key={equipment.id} {...equipment} />)}
        </tbody>
      </table>
      <div>
        <NavLink className="btn btn-primary" to="/new">Add</NavLink>
      </div>
    </div>

  );

}
