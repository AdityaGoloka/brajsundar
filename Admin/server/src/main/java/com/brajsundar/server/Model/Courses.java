package com.brajsundar.server.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Document(collection = "Courses")
public class Courses {
    @Id
    private String id; // Use String instead of long for MongoDB-generated ID

    @NotBlank
    @Size(max = 100)
    @Indexed(unique = true)
    private String name;
    private String slug;
    private Number price;
    private String description;
    private List<String> objectives;
    private List<String> highlights;
    private List<String> assessment;
    private List<String> outline;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public Number getPrice() {
        return price;
    }

    public void setPrice(Number price) {
        this.price = price;
    }

    public List<String> getObjectives() {
        return objectives;
    }

    public void setObjectives(List<String> objectives) {
        this.objectives = objectives;
    }

    public List<String> getHighlights() {
        return highlights;
    }

    public void setHighlights(List<String> highlights) {
        this.highlights = highlights;
    }

    public List<String> getAssessment() {
        return assessment;
    }

    public void setAssessment(List<String> assessment) {
        this.assessment = assessment;
    }

    public List<String> getOutline() {
        return outline;
    }

    public void setOutline(List<String> outline) {
        this.outline = outline;
    }
}
