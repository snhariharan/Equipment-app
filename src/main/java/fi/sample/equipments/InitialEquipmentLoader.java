package fi.sample.equipments;

import fi.sample.equipments.model.Equipment;
import fi.sample.equipments.service.EquipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class InitialEquipmentLoader implements CommandLineRunner {
    private final EquipmentService service;

    @Autowired
    public InitialEquipmentLoader(EquipmentService service) {
        this.service = service;
    }

    @Override
    public void run(String... args) throws Exception {
        Equipment equipment = new Equipment();
        equipment.setName("Lift1");
        equipment.setLocation("Espoo");
        equipment.setModel("Kone");
        equipment.setManufacturer("Kone");
        equipment.setType("Lift");
        equipment.setSerialNumber("123456");
        equipment.setStatus("Active");
        equipment.setDescription("Lift in good condition");
        service.save(equipment);

        Equipment equipment2 = new Equipment();
        equipment2.setName("Lift2");
        equipment2.setLocation("Espoo");
        equipment2.setModel("Kone");
        equipment2.setManufacturer("Kone");
        equipment2.setType("Lift");
        equipment2.setSerialNumber("123456");
        equipment2.setStatus("Active");
        equipment2.setDescription("Lift in good condition");
        service.save(equipment2);
    }
}
