package fi.sample.equipments.controller;

import fi.sample.equipments.exceptions.CustomException;
import fi.sample.equipments.model.Equipment;
import fi.sample.equipments.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.List;

@Controller
public class EquipmentController {
    private final EquipmentService service;

    @Autowired
    public EquipmentController(EquipmentService service) {
        this.service = service;
    }

    @PostMapping
    public Equipment save(@RequestBody Equipment equipment) throws CustomException {
        return service.save(equipment);
    }

    @PutMapping("/{id}")
    public Equipment update(@PathVariable Long id, @RequestBody Equipment equipment) throws CustomException {
        return service.updateById(id, equipment);
    }

    @GetMapping
    public List<Equipment> findAll() throws CustomException {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Equipment findById(@PathVariable Long id) throws CustomException {
        return service.findById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteById(@PathVariable Long id) throws CustomException {
        service.deleteById(id);
    }

}
