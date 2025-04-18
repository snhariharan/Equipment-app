import axios from "axios";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const apiUrl = `${baseURL}/rest/equipments`;

export const getEquipments = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const createEquipment = async (equipment) => {
  try {
    const response = await axios.post(apiUrl, equipment);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const getEquipmentById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const updateEquipmentById = async (id, equipment) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, equipment);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export const deleteEquipmentById = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
