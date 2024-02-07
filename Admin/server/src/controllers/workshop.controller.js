import Workshop from "../models/workshop.schema.js";
import fs from "fs";
import { s3FileUpload, s3FileDelete } from "../services/imageUploader.js";
import formidable from "formidable";
import mongoose from "mongoose";
import { error } from "console";

const addWorkshop = async (req, res) => {
    const form = formidable({
        multiples: false,
        keepExtensions: true
    });

    try {
        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(500).json({
                    error: "Internal Server Error"
                })
            }

            const workshopId = new mongoose.Types.ObjectId().toHexString();

            if (!workshopId) {
                throw new Error("Failed to Generate Workshop Id");
            }
            console.log(workshopId);

            const workshopThumbnail = files.workshopThumbnail[0];

            const data = await fs.readFileSync(workshopThumbnail.filepath);

            const upload = await s3FileUpload({
                bucketName: process.env.S3_BUCKET_NAME,
                key: `Images/Workshop/${workshopId}/thumbnail_1.png`,
                body: data,
                contentType: workshopThumbnail.mimetype,
            });

            const createWorkshop = await Workshop.create({
                _id: workshopId,
                workshopName: fields.workshopName[0],
                workshopSlug: fields.workshopSlug[0],
                workshopPrice: fields.workshopPrice[0],
                workshopThumbnail: `https://d2lnag86znkprh.cloudfront.net/Images/Workshop/${workshopId}/thumbnail_1.png`,
                workshopDescription: fields.workshopDescription[0],
                workshopObjectives: fields.workshopObjectives[0],
                workshopHighlights: fields.workshopHighlights[0],
                Assessment: fields.Assessment,
            });

            const newWorkshop = await createWorkshop.save();

            return res.status(200).json({
                message: "Workshop Created Successfully",
                newWorkshop,
            });
        });
    } catch (error) {
        return res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

const getWorkshops = async (req, res) => {
    try {
        const workshops = await Workshop.find({});
        if (workshops.length === 0) {
            res.status(404).json({
                message: "Workshops Not Found",
            });
        } else {
            res.status(200).json({
                message: "Workshops Found",
                data: workshops,
            });
        }
    } catch (error) {
        res.status(400).json({
            error: error
        });
        console.log(error);
    }
};

const getWorkshop = async (req, res) => {
    try {
        const workshop = await Workshop.findById(req.params.id);
        if (!workshop) {
            res.status(404).json({
                message: "Workshop Not Found",
            });
        } else {
            res.status(200).json({
                message: "Workshop Found",
                data: workshop,
            });
        }
    } catch (error) {
        res.status(404).json({
            error: error
        });
        console.log(error);
    }
};

const deleteWorkshop = async (req, res) => {
    try {
        const workshop = await Workshop.findById(req.params.id);

        if (!workshop) {
            res.status(400).json({
                message: "No Workshop with that id",
                error: error,
            })
        }

        try {
            const url = workshop.workshopThumbnail;

            const s3KeyArr = url.split(".net/");

            const s3Key = s3KeyArr[1];

            await s3FileDelete({
                bucketName: process.env.S3_BUCKET_NAME,
                key: s3Key,
            });

            await Workshop.findByIdAndDelete(req.params.id);
            res.status(200).json({
                message: "Workshop Deleted Successfully",
                data: workshop
            });
        } catch (error) {

        }
    } catch (error) {

    }
};

const updateWorkshop = async (req, res) => {
    const form = formidable({
        multiples: false,
        keepExtensions: true
    });

    try {
        const workshopId = req.params.id;

        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(400).json({ error: "Error parsing form data" });
            }

            if (files.workshopThumbnail) {
                const workshopThumb = await Workshop.findById(workshopId);

                const url = workshopThumb.workshopThumbnail;

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

                const thumbnailFile = files.workshopThumbnail[0];

                const data = await fs.readFileSync(thumbnailFile.filepath);

                const upload = await s3FileUpload({
                    bucketName: process.env.S3_BUCKET_NAME,
                    key: newUrl ? newUrl : s3Key,
                    body: data,
                    contentType: thumbnailFile.mimetype,
                });
                console.log(s3Key);

                const UpdateWorkshop = await Workshop.findByIdAndUpdate(
                    workshopId,
                    {
                        workshopName: fields.workshopName[0],
                        workshopSlug: fields.workshopSlug[0],
                        workshopPrice: fields.workshopPrice[0],
                        workshopThumbnail: `https://d2lnag86znkprh.cloudfront.net/${newUrl ? newUrl : s3Key}`,
                        workshopDescription: fields.workshopDescription[0],
                        workshopObjectives: fields.workshopObjectives[0],
                        workshopHighlights: fields.workshopHighlights[0],
                        Assessment: fields.Assessment,
                    },
                    { new: true }
                );

                return res.status(200).json({
                    message: "Workshop Updated Successfully",
                    UpdateWorkshop,
                });
            } else {
                const UpdateWorkshop = await Workshop.findByIdAndUpdate(
                    workshopId,
                    {
                        workshopName: fields.workshopName[0],
                        workshopSlug: fields.workshopSlug[0],
                        workshopPrice: fields.workshopPrice[0],
                        workshopDescription: fields.workshopDescription[0],
                        workshopObjectives: fields.workshopObjectives[0],
                        workshopHighlights: fields.workshopHighlights[0],
                        Assessment: fields.Assessment,
                    },
                    { new: true }
                );

                return res.status(200).json({
                    message: "Workshop created Successfully",
                    UpdateWorkshop,
                });
            }
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export { addWorkshop, getWorkshops, getWorkshop, deleteWorkshop, updateWorkshop };