import { NavLink } from "react-router-dom";
import {deleteEquipmentById} from "../services/ApiService";
import {useContext} from 'react';
import {EquipmentContext} from "../context/EquipmentContext";

export default function EquipmentTableRow ({id, name, location, status}) {

  const {removeEquipmentById} = useContext(EquipmentContext);

  async function deleteEquipment() {
    try {
      await deleteEquipmentById(id);
      removeEquipmentById(id);

    } catch (error) {
      console.error('Error fetching equipments:', error);
    }
  }

  return(
    <tr>
      <th scope="row">{id}</th>
      <td>{name}</td>
      <td>{location}</td>
      <td>{status}</td>
      <td>
        <div className="btn-group">
          <NavLink className="btn btn-info" to={`/${id}`}>View</NavLink>
          <NavLink className="btn btn-light" to={`/${id}/edit`}>Edit</NavLink>
          <button onClick={deleteEquipment} className="btn btn-danger">Delete</button>
        </div>
      </td>
    </tr>
  );
}
