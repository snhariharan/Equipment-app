package fi.sample.equipments.service.impl;

import fi.sample.equipments.exceptions.CustomException;
import fi.sample.equipments.exceptions.ItemNotFoundException;
import fi.sample.equipments.model.Equipment;
import fi.sample.equipments.repository.EquipmentRepository;
import fi.sample.equipments.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EquipmentServiceImpl implements EquipmentService {

    private final EquipmentRepository equipmentRepository;

    @Autowired
    public EquipmentServiceImpl(EquipmentRepository equipmentRepository) {
        this.equipmentRepository = equipmentRepository;
    }

    @Override
    public Equipment save(Equipment equipment) throws CustomException {
        try {
            return equipmentRepository.save(equipment);
        } catch (Exception e) {
            throw new CustomException("Error saving equipment: " + e.getMessage());
        }
    }

    @Override
    public Equipment updateById(Long id, Equipment equipment) throws CustomException {
        try {
            Equipment managedEquipment = equipmentRepository.findById(id)
                    .orElseThrow(() -> new ItemNotFoundException("Equipment with id " + id + " not found"));
            managedEquipment.setName(equipment.getName());
            managedEquipment.setLocation(equipment.getLocation());
            managedEquipment.setStatus(equipment.getStatus());
            managedEquipment.setDescription(equipment.getDescription());
            managedEquipment.setModel(equipment.getModel());
            managedEquipment.setManufacturer(equipment.getManufacturer());
            managedEquipment.setType(equipment.getType());
            managedEquipment.setSerialNumber(equipment.getSerialNumber());
            return this.save(managedEquipment);
        } catch (ItemNotFoundException e) {
            throw new CustomException("Error updating equipment: " + e.getMessage());
        }
    }

    @Override
    public List<Equipment> findAll() throws CustomException {
        try {
            return equipmentRepository.findAll();
        } catch (Exception e) {
            throw new CustomException(e.getMessage());
        }
    }

    @Override
    public Equipment findById(Long id) throws CustomException {
        try {
            return equipmentRepository.findById(id).orElse(null);
        } catch (Exception e) {
            throw new CustomException(e.getMessage());
        }
    }

    @Override
    public void deleteById(Long id) throws CustomException {
        try {
            equipmentRepository.deleteById(id);
        } catch (Exception e) {
            throw new CustomException(e.getMessage());
        }
    }
}
