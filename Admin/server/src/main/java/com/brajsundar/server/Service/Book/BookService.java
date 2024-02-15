package com.brajsundar.server.Service.Book;

import java.util.List;

import com.brajsundar.server.Model.Books;

public interface BookService {
    // Create
    Books uploadBook(Books books);

    // // Read
    List<Books> getBook();

    // // Read by id
    Books getBookById(String id);

    // // Update Books
    Books updateBook(Books books);

    // // Delete Books
    void deleteBook(String id);
}
