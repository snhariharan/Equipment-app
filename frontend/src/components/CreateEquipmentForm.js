import React, {useContext, useRef} from "react";
import {createEquipment} from "../services/ApiService";
import {useNavigate} from 'react-router-dom';
import {EquipmentContext} from "../context/EquipmentContext";

export default function CreateEquipmentForm() {

  const navigate = useNavigate();
  const nameRef = useRef();
  const typeRef = useRef();
  const manufacturerRef = useRef();
  const modelRef = useRef();
  const serialRef = useRef();
  const locationRef = useRef();
  const statusRef = useRef();
  const descriptionRef = useRef();

  const {addEquipment} = useContext(EquipmentContext);

  async function add(target) {
    target.preventDefault();

    try {

      const newEquipment = {
        name: nameRef.current.value,
        type: typeRef.current.value,
        manufacturer: manufacturerRef.current.value,
        model: modelRef.current.value,
        serialNumber: serialRef.current.value,
        location: locationRef.current.value,
        status: statusRef.current.value,
        description: descriptionRef.current.value
      };

      const response = await createEquipment(newEquipment);
      addEquipment(response);
      navigate(`/${response.id}`);

    } catch (error) {
      console.error('Error', error);
    }
  }

  return(
    <form>
      <div className="mb-3 mt-5">
        <label htmlFor="name" className="form-label">Name</label>
        <input ref={nameRef} type="text" className="form-control" id="name" aria-describedby="nameHelp" />
        <div id="nameHelp" className="form-text">Input the equipment name here.</div>
      </div>
      <div className="mb-3">

        <div className="row">
          <div className="col-6">
            <label htmlFor="type" className="form-label">Type</label>
            <input ref={typeRef} type="string" className="form-control" id="type" />
          </div>
          <div className="col-6">
            <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
            <input ref={manufacturerRef} type="string" className="form-control" id="manufacturer" />
          </div>
          <div className="col-6">
            <label htmlFor="model" className="form-label">Model</label>
            <input ref={modelRef} type="string" className="form-control" id="model" />
          </div>
          <div className="col-6">
            <label htmlFor="serial" className="form-label">Serial Number</label>
            <input ref={serialRef} type="string" className="form-control" id="serial" />
          </div>
          <div className="col-6">
            <label htmlFor="location" className="form-label">Location</label>
            <input ref={locationRef} type="string" className="form-control" id="location" />
          </div>
          <div className="col-6">
            <label htmlFor="status" className="form-label">Status</label>
            <input ref={statusRef} type="string" className="form-control" id="status" />
          </div>
          <div className="col-6">
            <label htmlFor="description" className="form-label">Description</label>
            <input ref={descriptionRef} type="string" className="form-control" id="description" />
          </div>
        </div>

      </div>
      <button onClick={add} type="submit" className="btn btn-primary">Add</button>
    </form>
  );

}
