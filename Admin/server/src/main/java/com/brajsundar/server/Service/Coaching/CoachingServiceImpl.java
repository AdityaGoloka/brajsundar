package com.brajsundar.server.Service.Coaching;

import org.springframework.transaction.annotation.Transactional;

import com.brajsundar.server.Model.Coaching;
import com.brajsundar.server.Repository.CoachingRepository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class CoachingServiceImpl implements CoachingService {

    @Autowired
    private CoachingRepository coachingRepository;

    @Override
    public Coaching uploadCoaching(Coaching coaching) {
        return this.coachingRepository.save(coaching);
    }

    @Override
    public List<Coaching> getCoaching() {
        return this.coachingRepository.findAll();
    }

    @Override
    public Coaching getCoachingById(String id) {
        Optional<Coaching> Coaching = this.coachingRepository.findById(id);

        if (Coaching.isPresent()) {
            return Coaching.get();
        } else {
            System.out.println("Record Not found with Id: " + id);
        }
        return null;
    }

    @Override
    public Coaching updateCoaching(Coaching coaching) {
        Optional<Coaching> Coaching = this.coachingRepository.findById(coaching.getId());

        if (Coaching.isPresent()) {
            Coaching updatedCoaching = Coaching.get();
            updatedCoaching.setId(coaching.getId());
            updatedCoaching.setName(coaching.getName());
            updatedCoaching.setSlug(coaching.getSlug());
            updatedCoaching.setPrice(coaching.getPrice());
            updatedCoaching.setObjectives(coaching.getObjectives());
            // return updatedCoaching;
            return this.coachingRepository.save(updatedCoaching);

        } else {
            System.out.println("Record Not found with id: " + coaching.getId());
        }
        return coaching;
    }

    @Override
    public void deleteCoaching(String id) {
        Optional<Coaching> Coaching = this.coachingRepository.findById(id);

        if (Coaching.isPresent()) {
            this.coachingRepository.delete(Coaching.get());
        } else {
            System.out.println("Record Not Found wit id: " + id);
        }
    }

}
