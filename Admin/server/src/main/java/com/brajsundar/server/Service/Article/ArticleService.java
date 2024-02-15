package com.brajsundar.server.Service.Article;

import java.util.List;

import com.brajsundar.server.Model.Article;

public interface ArticleService {
    // Create
    Article uploadArticle(Article article);

    // // Read
    List<Article> getArticle();

    // // Read by id
    Article getArticleById(String id);

    // // Update Article
    Article updateArticle(Article article);

    // // Delete Article
    void deleteArticle(String id);
}
