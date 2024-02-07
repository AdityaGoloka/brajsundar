import Coaching from "../models/coaching.schema.js";
import formidable from "formidable";
import fs from "fs";
import { s3FileUpload, s3FileDelete } from "../services/imageUploader.js";
import mongoose from "mongoose";
import { error } from "console";

const addCoaching = async (req, res) => {
  const form = formidable({ multiples: true, keepExtensions: true });

  try {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: "Internal Server Error" });
      }

      const coachingId = new mongoose.Types.ObjectId().toHexString();
      if (!coachingId) {
        throw new Error("Failed to generate coachingId");
      }

      const coachingThumbnail = files.thumbnail[0];
      const data = await fs.readFileSync(coachingThumbnail.filepath);
      const upload = await s3FileUpload({
        bucketName: process.env.S3_BUCKET_NAME,
        key: `Images/Coaching/${coachingId}/thumbnail_1.png`,
        body: data,
        contentType: coachingThumbnail.mimetype,
      });

      //   console.log(courseOutline);
      const coaching = await Coaching.create({
        _id: coachingId,
        CoachingName: fields.CoachingName[0],
        CoachingSlug: fields.CoachingSlug[0],
        CoachingPrice: fields.CoachingPrice[0],
        thumbnail: `https://d2lnag86znkprh.cloudfront.net/Images/Coaching/${coachingId}/thumbnail_1.png`,
        CoachingDescription: fields.CoachingDescription[0],
        CoachingObjectives: fields.CoachingObjectives,
      });

      const newCoaching = await coaching.save();

      return res.status(200).json({
        success: true,
        message: "Coaching saved successfully",
        data: newCoaching,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getCoaching = async (req, res) => {
  try {
    const coachings = await Coaching.find({});
    if (coachings.length === 0) {
      res.status(404).json({
        message: "Coaching Not Found",
      });
    } else {
      res.status(200).json({
        message: "Coaching Found",
        data: coachings,
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error,
    });
    console.log(error);
  }
};
const updateCoaching = async (req, res) => {
  const form = formidable({
    multiples: false,
    keepExtensions: true,
  });

  try {
    const workshopId = req.params.id;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ error: "Error parsing form data" });
      }

      if (files.workshopThumbnail) {
        const coachingThumb = await Coaching.findById(workshopId);

        const url = coachingThumb.thumbnail;

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

        const UpdateCoaching = await Coaching.findByIdAndUpdate(
          workshopId,
          {
            // workshopName: fields.workshopName[0],
            // workshopSlug: fields.workshopSlug[0],
            // workshopPrice: fields.workshopPrice[0],
            workshopThumbnail: `https://d2lnag86znkprh.cloudfront.net/${
              newUrl ? newUrl : s3Key
            }`,
            // workshopDescription: fields.workshopDescription[0],
            // workshopObjectives: fields.workshopObjectives[0],
            // workshopHighlights: fields.workshopHighlights[0],
            // Assessment: fields.Assessment,

            CoachingName: fields.CoachingName[0],
            CoachingSlug: fields.CoachingSlug[0],
            CoachingPrice: fields.CoachingPrice[0],
            CoachingDescription: fields.CoachingDescription[0],
            CoachingObjectives: fields.CoachingObjectives,
          },
          { new: true }
        );

        return res.status(200).json({
          message: "Coaching Updated Successfully",
          UpdateCoaching,
        });
      } else {
        const UpdateCoaching = await Coaching.findByIdAndUpdate(
          workshopId,
          {
            CoachingName: fields.CoachingName[0],
            CoachingSlug: fields.CoachingSlug[0],
            CoachingPrice: fields.CoachingPrice[0],
            CoachingDescription: fields.CoachingDescription[0],
            CoachingObjectives: fields.CoachingObjectives,
          },
          { new: true }
        );

        return res.status(200).json({
          message: "Workshop created Successfully",
          UpdateCoaching,
        });
      }
    });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
const deleteCoaching = async (req, res) => {
  try {
    const coaching = await Coaching.findById(req.params.id);

    if (!coaching) {
      res.status(400).json({
        message: "No coaching with that id",
        error: error,
      });
    }

    try {
      const url = coaching.thumbnail;

      const s3KeyArr = url.split(".net/");

      const s3Key = s3KeyArr[1];

      await s3FileDelete({
        bucketName: process.env.S3_BUCKET_NAME,
        key: s3Key,
      });

      await Coaching.findByIdAndDelete(req.params.id);
      res.status(200).json({
        message: "coaching Deleted Successfully",
        data: coaching,
      });
    } catch (error) {}
  } catch (error) {}
};
const getSpecificCoaching = async (req, res) => {
  try {
    const coaching = await Coaching.findById(req.params.id);
    if (!coaching) {
      res.status(404).json({
        message: "coaching Not Found",
      });
    } else {
      res.status(200).json({
        message: "coaching Found",
        data: coaching,
      });
    }
  } catch (error) {
    res.status(404).json({
      error: error,
    });
    console.log(error);
  }
};

export {
  addCoaching,
  getCoaching,
  updateCoaching,
  getSpecificCoaching,
  deleteCoaching,
};
