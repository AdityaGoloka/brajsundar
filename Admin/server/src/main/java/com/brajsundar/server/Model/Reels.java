package com.brajsundar.server.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Document(collection = "Reels")
public class Reels {

    @Id
    private String id; // Use String instead of long for MongoDB-generated ID

    @NotBlank
    @Size(max = 100)
    @Indexed(unique = true)
    private String reelName;
    private String reelUrl;

    // Getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getReelName() {
        return reelName;
    }

    public void setReelName(String reelName) {
        this.reelName = reelName;
    }

    public String getReelUrl() {
        return reelUrl;
    }

    public void setReelUrl(String reelUrl) {
        this.reelUrl = reelUrl;
    }
}
