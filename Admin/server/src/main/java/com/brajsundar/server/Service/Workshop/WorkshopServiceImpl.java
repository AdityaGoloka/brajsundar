package com.brajsundar.server.Service.Workshop;

import org.springframework.transaction.annotation.Transactional;

import com.brajsundar.server.Model.Workshop;
import com.brajsundar.server.Repository.WorkshopRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class WorkshopServiceImpl implements WorkshopService {

    @Autowired
    private WorkshopRepository workshopRepository;

    @Override
    public Workshop uploadWorkshop(Workshop workshop) {
        return this.workshopRepository.save(workshop);
    }

    @Override
    public List<Workshop> getWorkshop() {
        return this.workshopRepository.findAll();
    }

    @Override
    public Workshop getWorkshopById(String id) {
        Optional<Workshop> Workshop = this.workshopRepository.findById(id);

        if (Workshop.isPresent()) {
            return Workshop.get();
        } else {
            System.out.println("Record Not found with Id: " + id);
        }
        return null;
    }

    @Override
    public Workshop updateWorkshop(Workshop workshop) {
        Optional<Workshop> Workshop = this.workshopRepository.findById(workshop.getId());

        if (Workshop.isPresent()) {
            Workshop updatedWorkshop = Workshop.get();
            updatedWorkshop.setId(workshop.getId());
            updatedWorkshop.setName(workshop.getName());
            updatedWorkshop.setSlug(workshop.getSlug());
            updatedWorkshop.setPrice(workshop.getPrice());
            updatedWorkshop.setObjectives(workshop.getObjectives());
            updatedWorkshop.setHighlights(workshop.getHighlights());
            updatedWorkshop.setAssessment(workshop.getAssessment());
            return this.workshopRepository.save(updatedWorkshop);

        } else {
            System.out.println("Record Not found with id: " + workshop.getId());
        }
        return workshop;
    }

    @Override
    public void deleteWorkshop(String id) {
        Optional<Workshop> Workshop = this.workshopRepository.findById(id);

        if (Workshop.isPresent()) {
            this.workshopRepository.delete(Workshop.get());
        } else {
            System.out.println("Record Not Found wit id: " + id);
        }
    }

}
