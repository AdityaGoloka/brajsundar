package com.brajsundar.server.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.brajsundar.server.Model.Workshop;
import com.brajsundar.server.Service.Workshop.WorkshopService;

@RestController
public class WorkshopController {

    @Autowired
    private WorkshopService workshopService;

    @PostMapping("/workshop")
    public ResponseEntity<Workshop> uploadWorkshop(@RequestBody Workshop workshop) {
        return ResponseEntity.ok().body(this.workshopService.uploadWorkshop(workshop));
    }

    @GetMapping("/workshop")
    public ResponseEntity<List<Workshop>> getWorkshop() {
        return ResponseEntity.ok().body(workshopService.getWorkshop());
    }

    @GetMapping("/workshop/{id}")
    public ResponseEntity<Workshop> getWorkshopById(@PathVariable String id) {
        return ResponseEntity.ok().body(workshopService.getWorkshopById(id));
    }

    @PutMapping("/workshop/{id}")
    public ResponseEntity<Workshop> updateWorkshop(@PathVariable String id, @RequestBody Workshop workshop) {
        workshop.setId(id);
        return ResponseEntity.ok().body(this.workshopService.updateWorkshop(workshop));
    }

    @DeleteMapping("/workshop/{id}")
    public HttpStatus deleteWorkshop(@PathVariable String id) {
        this.workshopService.deleteWorkshop(id);
        return HttpStatus.OK;
    }
}