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

import com.brajsundar.server.Model.Books;
import com.brajsundar.server.Service.Book.BookService;

@RestController
public class BookController {

    @Autowired
    private BookService bookService;

    // Create Single Book
    @PostMapping("/book")
    public ResponseEntity<Books> uploadBook(@RequestBody Books books) {
        return ResponseEntity.ok().body(this.bookService.uploadBook(books));
    }

    // Get All Books
    @GetMapping("/book")
    public ResponseEntity<List<Books>> getBook() {
        return ResponseEntity.ok().body(bookService.getBook());
    }

    // Get Book By id
    @GetMapping("/book/{id}")
    public ResponseEntity<Books> getBookById(@PathVariable String id) {
        return ResponseEntity.ok().body(bookService.getBookById(id));
    }

    // Update Book
    @PutMapping("/book/{id}")
    public ResponseEntity<Books> updateBook(@PathVariable String id, @RequestBody Books books) {
        books.setId(id);
        return ResponseEntity.ok().body(this.bookService.updateBook(books));
    }

    // Delete Book
    @DeleteMapping("/book/{id}")
    public HttpStatus deleteBook(@PathVariable String id) {
        this.bookService.deleteBook(id);
        return HttpStatus.OK;
    }
}
