package com.brajsundar.server.Service.Coaching;

import java.util.List;

import com.brajsundar.server.Model.Coaching;

public interface CoachingService {
    Coaching uploadCoaching(Coaching coaching);

    List<Coaching> getCoaching();

    Coaching getCoachingById(String id);

    Coaching updateCoaching(Coaching coaching);

    void deleteCoaching(String id);

}
