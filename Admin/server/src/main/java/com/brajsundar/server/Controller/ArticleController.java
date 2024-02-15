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

import com.brajsundar.server.Model.Article;
import com.brajsundar.server.Service.Article.ArticleService;

@RestController
public class ArticleController {

    // private AmazonClient amazonClient;

    // @Autowired
    // BucketController

    @Autowired
    private ArticleService articleService;

    // Create Single Article
    @PostMapping("/article")
    public ResponseEntity<Article> uploadArticle(@RequestBody Article article) {
        return ResponseEntity.ok().body(this.articleService.uploadArticle(article));
    }

    // Get All Articles
    @GetMapping("/article")
    public ResponseEntity<List<Article>> getArticle() {
        return ResponseEntity.ok().body(articleService.getArticle());
    }

    // Get Article By id
    @GetMapping("/article/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable String id) {
        return ResponseEntity.ok().body(articleService.getArticleById(id));
    }

    // Update Article
    @PutMapping("/article/{id}")
    public ResponseEntity<Article> updateArticle(@PathVariable String id, @RequestBody Article article) {
        article.setId(id);
        return ResponseEntity.ok().body(this.articleService.updateArticle(article));
    }

    // Delete Article
    @DeleteMapping("/article/{id}")
    public HttpStatus deleteArticle(@PathVariable String id) {
        this.articleService.deleteArticle(id);
        return HttpStatus.OK;
    }
}
