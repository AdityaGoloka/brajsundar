import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    CourseName: {
      type: String,
      required: true,
      maxlength: 255,
    },
    CourseSlug: {
      type: String,
      required: true,
    },
    CoursePrice: {
      type: Number,
      required: true,
    },
    // CourseThumbnail: {
    //   type: String,
    //   required: true,
    // },
    CourseDescription: {
      type: String,
      required: true,
    },
    CourseObjectives: {
      type: [String],
      required: true,
    },
    CourseHighlights: {
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

const Course = mongoose.model("Course", courseSchema);

export default Course;
