import Article from "../models/course.schema.js";
import fs from "fs";
import { s3FileUpload, s3FileDelete } from "../services/imageUploader.js";
import formidable from "formidable";
import mongoose from "mongoose";

const addCourse = async (req, res) => {
  const form = formidable({ multiples: false, keepExtensions: true });
  try {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }
      const courseId = new mongoose.Types.ObjectId().toHexString();
      if (!courseId) {
        throw new Error("Failed to generate courseId");
      }
      console.log(courseId);
      // if (!fields.title || !fields.content) {
      //   throw new Error("All fields needed");
      // }

    //   const thumbnailFile = files.thumbnail[0];
    //   console.log(thumbnailFile);

    //   const data = await fs.readFileSync(thumbnailFile.filepath);

    //   const thumbnailUpload = await s3FileUpload({
    //     bucketName: process.env.S3_BUCKET_NAME,
    //     key: `Images/Article/${articleId}/thumbnail_1.png`, //`https://d2lnag86znkprh.cloudfront.net/Images/Book/${bookId}/thumbnail.png`
    //     body: data,
    //     contentType: "image/png",
    //   });

      const article = await Article.create({
        _id: courseId,
        // title: fields.title[0],
        // content: fields.content[0],
        ...fields
        // thumbnail: `https://d2lnag86znkprh.cloudfront.net/Images/Article/${courseId}/thumbnail_1.png`,
      });

      const newArticle = await article.save();

      return res.status(200).json({
        success: true,
        message: "Article saved successfully",
        data: newArticle,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export { addCourse };
