// package com.brajsundar.server.Config;

// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;

// import com.amazonaws.auth.AWSCredentials;
// import com.amazonaws.auth.AWSStaticCredentialsProvider;
// import com.amazonaws.auth.BasicAWSCredentials;
// import com.amazonaws.services.s3.AmazonS3;
// import com.amazonaws.services.s3.AmazonS3ClientBuilder;

// @Configuration
// public class AmazonConfig {

//     @Value("${S3_ACCESS_KEY}")
//     private String accessKey;

//     @Value("${S3_SECRET}")
//     private String secret;

//     @Value("${S3_REGION}")
//     private String region;

//     @Bean
//     public AmazonS3 s3() {
//         AWSCredentials awsCredentials = new BasicAWSCredentials(accessKey, secret);

//         return AmazonS3ClientBuilder.standard().withRegion(region)
//                 .withCredentials(new AWSStaticCredentialsProvider(awsCredentials)).build();

//     }
// }
