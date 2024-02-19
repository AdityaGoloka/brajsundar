package com.brajsundar.server.Service.Reels;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.brajsundar.server.Model.Reels;
import com.brajsundar.server.Repository.ReelRepository;

@Service
@Transactional
public class ReelServiceImpl implements ReelService {

    @Autowired
    private ReelRepository reelRepository;

    @Override
    public Reels uploadReel(Reels reels) {
        return this.reelRepository.save(reels);
    }

    @Override
    public List<Reels> getReels() {
        return this.reelRepository.findAll();
    }

    @Override
    public Reels getReelById(String id) {
        Optional<Reels> Reels = this.reelRepository.findById(id);

        if (Reels.isPresent()) {
            return Reels.get();
        } else {
            System.out.println("Record Not Found with Id " + id);
        }
        return null;
    }

    @Override
    public Reels updateReel(Reels reels) {
        Optional<Reels> Reels = this.reelRepository.findById(reels.getId());

        if (Reels.isPresent()) {
            Reels updatedReels = Reels.get();
            updatedReels.setId(reels.getId());
            updatedReels.setReelName(reels.getReelName());
            updatedReels.setReelUrl(reels.getReelUrl());
            reelRepository.save(updatedReels);
            return updatedReels;
        } else {
            System.out.println("Record Not found with id: " + reels.getId());
        }
        return reels;
    }

    @Override
    public void deleteReel(String id) {
        Optional<Reels> Reel = this.reelRepository.findById(id);

        if (Reel.isPresent()) {
            this.reelRepository.delete(Reel.get());
        } else {
            System.out.println("Record Not Found with it: " + id);
        }
    }

}
