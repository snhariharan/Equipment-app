package fi.sample.equipments.service;

import fi.sample.equipments.exceptions.CustomException;
import fi.sample.equipments.model.Equipment;

import java.util.List;

public interface EquipmentService {
    Equipment save(Equipment equipment) throws CustomException;

    Equipment updateById(Long id, Equipment equipment) throws CustomException;

    List<Equipment> findAll() throws CustomException;

    Equipment findById(Long id) throws CustomException;

    void deleteById(Long id) throws CustomException;
}
