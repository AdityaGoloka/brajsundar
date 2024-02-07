import Course from "../models/course.schema.js";
import formidable from "formidable";
import fs from "fs";
import { s3FileUpload, s3FileDelete } from "../services/imageUploader.js";
import mongoose from "mongoose";
import { error } from "console";

const addCourse = async (req, res) => {
  const form = formidable({ multiples: true, keepExtensions: true });

  try {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }

      const courseId = new mongoose.Types.ObjectId().toHexString();
      if (!courseId) {
        throw new Error("Failed to generate courseId");
      }

      const courseThumbnail = files.thumbnail[0];
      const data = await fs.readFileSync(courseThumbnail.filepath);
      const upload = await s3FileUpload({
        bucketName: process.env.S3_BUCKET_NAME,
        key: `Images/Workshop/${courseId}/thumbnail_1.png`,
        body: data,
        contentType: courseThumbnail.mimetype,
      });

      // console.log(courseId);

      // Convert CourseOutline object to array of objects
      const courseOutline = [];
      for (let key in fields.CourseOutline) {
        courseOutline.push({
          key: key,
          value: fields.CourseOutline[key],
        });
      }
      console.log(courseOutline);
      const course = await Course.create({
        _id: courseId,
        CourseName: fields.CourseName[0],
        CourseSlug: fields.CourseSlug[0],
        CoursePrice: fields.CoursePrice[0],
        thumbnail: `https://d2lnag86znkprh.cloudfront.net/Images/Workshop/${courseId}/thumbnail_1.png`,
        CourseDescription: fields.CourseDescription[0],
        CourseObjectives: fields.CourseObjectives,
        CourseHighlights: fields.CourseHighlights,
        // CourseOutline: courseOutline, // Assign the converted courseOutline array
        Assessment: fields.Assessment,
      });

      const newCourse = await course.save();

      return res.status(200).json({
        success: true,
        message: "Course saved successfully",
        data: newCourse,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const getCourse = async (req, res) => {
  try {
    const course = await Course.find();
    console.log("HEll");
    if (course.length === 0) {
      res.status(404).json({
        message: "Course Not Found",
      });
    } else {
      res.status(200).json({
        message: "Course Found",
        data: course,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
    });
    console.log(error);
  }
};
const updateCourse = async (req, res) => {
  const form = formidable({
    multiples: false,
    keepExtensions: true,
  });

  try {
    const courseId = req.params.id;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ error: "Error parsing form data" });
      }

      if (files.thumbnail) {
        const courseThumb = await Course.findById(courseId);

        const url = courseThumb.thumbnail;

        const s3KeyArr = url.split(".net/");

        const s3Key = s3KeyArr[1];

        await s3FileDelete({
          bucketName: process.env.S3_BUCKET_NAME,
          key: s3Key,
        });

        const regex = /thumbnail_(\d+).png/;

        const match = s3Key.match(regex);

        if (match) {
          const originalNumber = parseInt(match[1], 10);

          const newNumber = originalNumber + 1;

          var newUrl = s3Key.replace(regex, `thumbnail_${newNumber}.png`);
        } else {
          console.log("Pattern Not Found in URL");
        }

        const thumbnailFile = files.thumbnail[0];

        const data = await fs.readFileSync(thumbnailFile.filepath);

        const upload = await s3FileUpload({
          bucketName: process.env.S3_BUCKET_NAME,
          key: newUrl ? newUrl : s3Key,
          body: data,
          contentType: thumbnailFile.mimetype,
        });
        console.log(s3Key);

        const UpdateCourse = await Course.findByIdAndUpdate(
          courseId,
          {
            // workshopName: fields.workshopName[0],
            // workshopSlug: fields.workshopSlug[0],
            // workshopPrice: fields.workshopPrice[0],

            // workshopDescription: fields.workshopDescription[0],
            // workshopObjectives: fields.workshopObjectives[0],
            // workshopHighlights: fields.workshopHighlights[0],
            // Assessment: fields.Assessment,
            CourseName: fields.CourseName[0],
            CourseSlug: fields?.CourseSlug[0],
            CoursePrice: fields?.CoursePrice[0],
            // thumbnail: `https://d2lnag86znkprh.cloudfront.net/Images/Workshop/${courseId}/thumbnail_1.png`,
            CourseDescription: fields?.CourseDescription[0],
            CourseObjectives: fields?.CourseObjectives,
            CourseHighlights: fields?.CourseHighlights,
            // CourseOutline: courseOutline, // Assign the converted courseOutline array
            Assessment: fields?.Assessment,
            thumbnail: `https://d2lnag86znkprh.cloudfront.net/${
              newUrl ? newUrl : s3Key
            }`,
          },
          { new: true }
        );

        return res.status(200).json({
          message: "Workshop Updated Successfully",
          UpdateCourse,
        });
      } else {
        const UpdateCourse = await Workshop.findByIdAndUpdate(
          courseId,
          {
            // workshopName: fields.workshopName[0],
            // workshopSlug: fields.workshopSlug[0],
            // workshopPrice: fields.workshopPrice[0],
            // workshopDescription: fields.workshopDescription[0],
            // workshopObjectives: fields.workshopObjectives[0],
            // workshopHighlights: fields.workshopHighlights[0],
            CourseName: fields.CourseName[0],
            CourseSlug: fields.CourseSlug[0],
            CoursePrice: fields.CoursePrice[0],
            // thumbnail: `https://d2lnag86znkprh.cloudfront.net/Images/Workshop/${courseId}/thumbnail_1.png`,
            CourseDescription: fields.CourseDescription[0],
            CourseObjectives: fields.CourseObjectives,
            CourseHighlights: fields.CourseHighlights,
            Assessment: fields.Assessment,
          },
          { new: true }
        );

        return res.status(200).json({
          message: "Workshop created Successfully",
          UpdateCourse,
        });
      }
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      res.status(400).json({
        message: "No course with that id",
        error: error,
      });
    }

    try {
      const url = course.thumbnail;

      const s3KeyArr = url.split(".net/");

      const s3Key = s3KeyArr[1];

      await s3FileDelete({
        bucketName: process.env.S3_BUCKET_NAME,
        key: s3Key,
      });

      await Course.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "course Deleted Successfully",
        data: course,
      });
    } catch (error) {}
  } catch (error) {}
};
const getSpecificCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      res.status(404).json({
        message: "course Not Found",
      });
    } else {
      res.status(200).json({
        message: "course Found",
        data: course,
      });
    }
  } catch (error) {
    res.status(404).json({
      error: error,
    });
    console.log(error);
  }
};
export { addCourse, getCourse, updateCourse, getSpecificCourse, deleteCourse };
