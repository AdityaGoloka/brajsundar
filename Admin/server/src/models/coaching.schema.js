import mongoose from "mongoose";

const coachingSchema = mongoose.Schema(
  {
    CoachingName: {
      type: String,
      required: true,
      // maxlength: 255,
    },
    CoachingSlug: {
      type: String,
      required: true,
    },
    CoachingPrice: {
      type: Number,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    CoachingDescription: {
      type: String,
      required: true,
    },
    CoachingObjectives: {
      type: [String],
      required: true,
    },
    // CoachingHighlights: {
    //   type: [String],
    //   required: true,
    // },
    // CoachingOutline: [
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
    // Assessment: {
    //   type: [String],
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Coaching = mongoose.model("Coaching", coachingSchema);

export default Coaching;
