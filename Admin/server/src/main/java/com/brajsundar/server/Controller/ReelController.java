package com.brajsundar.server.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.brajsundar.server.Model.Reels;
import com.brajsundar.server.Service.Reels.ReelService;

@RestController
public class ReelController {

    @Autowired
    private ReelService reelService;

    // Create Single Article
    @PostMapping("/reels")
    public ResponseEntity<Reels> uploadReel(@RequestBody Reels reels) {
        return ResponseEntity.ok().body(this.reelService.uploadReel(reels));
    }

    // Get All Articles
    @GetMapping("/reels")
    public ResponseEntity<List<Reels>> getReels() {
        return ResponseEntity.ok().body(reelService.getReels());
    }

    // Get Article By id
    @GetMapping("/reels/{id}")
    public ResponseEntity<Reels> getReelById(@PathVariable String id) {
        return ResponseEntity.ok().body(reelService.getReelById(id));
    }

    // Update Article
    @PutMapping("/reels/{id}")
    public ResponseEntity<Reels> updateReel(@PathVariable String id, @RequestBody Reels reels) {
        reels.setId(id);
        return ResponseEntity.ok().body(this.reelService.updateReel(reels));
    }

    // Delete Article
    @DeleteMapping("/reels/{id}")
    public HttpStatus deleteReel(@PathVariable String id) {
        this.reelService.deleteReel(id);
        return HttpStatus.OK;
    }
}
