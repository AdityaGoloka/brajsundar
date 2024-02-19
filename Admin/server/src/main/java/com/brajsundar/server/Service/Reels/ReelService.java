package com.brajsundar.server.Service.Reels;

import java.util.List;

import com.brajsundar.server.Model.Reels;

public interface ReelService {
    Reels uploadReel(Reels reels);

    List<Reels> getReels();

    Reels getReelById(String id);

    Reels updateReel(Reels reels);

    void deleteReel(String id);
}
