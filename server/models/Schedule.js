const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const mongoosePaginate = require("mongoose-paginate-v2");
const slug = require("slug");

const ScheduleSchema = new mongoose.Schema({
    slug:{
        type:String,
        unique:true,
        required:true
    },
    title: {
        type: String,
    },
    start:{
        type: String
    },
    end:{
        type: String
    },
    subjects: [
        {
            name: {type: String},
            teacher: {type: String},
            room: {type: String},
            slot: {type: String},
            date: {type: Date}
        }
    ],
    status: {
        type: Number,
        default: 1 // 1-Active 2-Deleted 
    }
},  { timestamps: true });

ScheduleSchema.plugin(uniqueValidator, { message: "is already taken." });
ScheduleSchema.plugin(mongoosePaginate);

ScheduleSchema.pre("validate", function (next) {
    if (!this.slug) {
      this.slugify();
    }
    next();
  });
  
ScheduleSchema.methods.slugify = function () {
    this.slug = slug(((Math.random() * Math.pow(36, 6)) | 0).toString(36));
};

ScheduleSchema.methods.toJSON = function () {
    return {
        slug: this.slug,
        title: this.title,
        start: this.start,
        end: this.end,
        subjects: this.subjects,
    }
}

module.exports = mongoose.model("Schedule", ScheduleSchema);