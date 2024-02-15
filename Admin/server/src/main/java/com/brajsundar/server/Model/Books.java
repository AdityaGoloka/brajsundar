package com.brajsundar.server.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Document(collection = "Books")
public class Books {
    @Id
    private String id; // Use String instead of long for MongoDB-generated ID

    @NotBlank
    @Size(max = 100)
    @Indexed(unique = true)
    private String bookName;
    private String bookDetail;
    private String bookLink;
    private String country;
    private String preBook;

    // Getters and setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getBookDetail() {
        return bookDetail;
    }

    public void setBookDetail(String bookDetail) {
        this.bookDetail = bookDetail;
    }

    public String getBookLink() {
        return bookLink;
    }

    public void setBookLink(String bookLink) {
        this.bookLink = bookLink;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPreBook() {
        return preBook;
    }

    public void setPreBook(String preBook) {
        this.preBook = preBook;
    }
}
