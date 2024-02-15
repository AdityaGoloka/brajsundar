package com.brajsundar.server.Service.Article;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.amazonaws.services.s3.AmazonS3;
import com.brajsundar.server.Model.Article;
import com.brajsundar.server.Repository.ArticleRepository;

@Service
@Transactional
public class ArticleServiceImpl implements ArticleService {

    // @Value("${S3_BUCKET_NAME}");
    // private String bucketName;

    // private final AmazonS3 s3;

    // public s3Service(AmazonS3 s3){
    // this.s3 = s3;
    // }

    @Autowired
    private ArticleRepository articleRepository;

    @Override
    public Article uploadArticle(Article article) {
        return this.articleRepository.save(article);
    }

    @Override
    public List<Article> getArticle() {
        return this.articleRepository.findAll();
    }

    @Override
    public Article getArticleById(String id) {
        Optional<Article> Article = this.articleRepository.findById(id);

        if (Article.isPresent()) {
            return Article.get();
        } else {
            System.out.println("Record Not Found with IdL " + id);
        }
        return null;
    }

    @Override
    public Article updateArticle(Article article) {
        Optional<Article> Article = this.articleRepository.findById(article.getId());

        if (Article.isPresent()) {
            Article updatedArticle = Article.get();
            updatedArticle.setId(article.getId());
            updatedArticle.setTitle(article.getTitle());
            updatedArticle.setDescription(article.getDescription());
            articleRepository.save(updatedArticle);
            return updatedArticle;
        } else {
            System.out.println("Record Not found with id: " + article.getId());
        }
        return article;
    }

    @Override
    public void deleteArticle(String id) {
        Optional<Article> Article = this.articleRepository.findById(id);

        if (Article.isPresent()) {
            this.articleRepository.delete(Article.get());
        } else {
            System.out.println("Record Not Found with it: " + id);
        }
    }
}
