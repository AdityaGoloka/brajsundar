package com.brajsundar.server.Service.Book;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.brajsundar.server.Model.Books;
import com.brajsundar.server.Repository.BookRepository;

@Service
@Transactional
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Books uploadBook(Books book) {
        return this.bookRepository.save(book);
    }

    @Override
    public List<Books> getBook() {
        return this.bookRepository.findAll();
    }

    @Override
    public Books getBookById(String id) {
        Optional<Books> Books = this.bookRepository.findById(id);

        if (Books.isPresent()) {
            return Books.get();
        } else {
            System.out.println("Record Not Found with IdL " + id);
        }
        return null;
    }

    @Override
    public Books updateBook(Books book) {
        Optional<Books> Books = this.bookRepository.findById(book.getId());

        if (Books.isPresent()) {
            Books updatedBook = Books.get();
            updatedBook.setId(book.getId());
            updatedBook.setBookName(book.getBookName());
            updatedBook.setBookDetail(book.getBookDetail());
            updatedBook.setBookLink(book.getBookLink());
            updatedBook.setCountry(book.getCountry());
            updatedBook.setPreBook(book.getPreBook());
            bookRepository.save(updatedBook);
            return updatedBook;
        } else {
            System.out.println("Record Not found with id: " + book.getId());
        }
        return book;
    }

    @Override
    public void deleteBook(String id) {
        Optional<Books> Books = this.bookRepository.findById(id);

        if (Books.isPresent()) {
            this.bookRepository.delete(Books.get());
        } else {
            System.out.println("Record Not Found with it: " + id);
        }
    }
}
