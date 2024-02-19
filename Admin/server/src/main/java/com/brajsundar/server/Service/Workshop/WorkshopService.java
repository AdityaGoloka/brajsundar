package com.brajsundar.server.Service.Workshop;

import java.util.List;

import com.brajsundar.server.Model.Workshop;

public interface WorkshopService {
    Workshop uploadWorkshop(Workshop workshop);

    List<Workshop> getWorkshop();

    Workshop getWorkshopById(String id);

    Workshop updateWorkshop(Workshop workshop);

    void deleteWorkshop(String id);

}
