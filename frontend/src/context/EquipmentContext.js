import React, { createContext, useState } from 'react';

export const EquipmentContext = createContext();

export const EquipmentListProvider = ({ children }) => {
  const [equipments, setEquipments] = useState([]);
  const [equipment, setEquipment] = useState({});

  const updateEquipments = (equipments) => {
    setEquipments(equipments)
  }

  const addEquipment = (equipment) => {
    setEquipments([... equipments, equipment]);
  }

  const updateEquipment = (equipment) => {
    setEquipment(equipment);
  }

  const removeEquipmentById = (id) => {
    const newEquipments = equipments.filter((equipment) => equipment.id !== id);
    setEquipments(newEquipments);
  }

  return (
    <EquipmentContext.Provider value={{ equipments, equipment, updateEquipments, updateEquipment, removeEquipmentById, addEquipment }}>
      {children}
    </EquipmentContext.Provider>
  );
}
