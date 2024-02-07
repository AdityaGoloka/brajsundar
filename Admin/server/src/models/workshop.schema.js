import mongoose from "mongoose";

const workshopSchema = mongoose.Schema(
    {
        workshopName: {
            type: String,
            required: true,
            maxlength: 255,
        },
        workshopSlug: {
            type: String,
            required: true,
        },
        workshopPrice: {
            type: Number,
            required: true,
        },
        workshopThumbnail: {
            type: String,
            required: true,
        },
        workshopDescription: {
            type: String,
            required: true,
        },
        workshopObjectives: {
            type: [String],
            required: true,
        },
        workshopHighlights: {
            type: [String],
            required: true,
        },
        // CourseOutline: [
        //   {
        //     key: {
        //       type: String,
        //       required: true,
        //     },
        //     value: {
        //       type: [String],
        //       required: true,
        //     },
        //   },
        // ],
        Assessment: {
            type: [String],
            required: true,
        },
    },
    { timestamps: true }
);

const Workshop = mongoose.model("Workshop", workshopSchema);

export default Workshop;
