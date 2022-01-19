const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const mongoosePaginate = require("mongoose-paginate-v2");
const slug = require("slug");

const SubjectSchema = new mongoose.Schema({
    slug:{
        type:String,
        unique:true,
        required:true
    },
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    status: {
        type: Number,
        default: 1 // 1-Active 2-Deleted 
    }
});

SubjectSchema.plugin(uniqueValidator, { message: "is already taken." });
SubjectSchema.plugin(mongoosePaginate);

SubjectSchema.pre("validate", function (next) {
    if (!this.slug) {
      this.slugify();
    }
    next();
  });
  
SubjectSchema.methods.slugify = function () {
    this.slug = slug(((Math.random() * Math.pow(36, 6)) | 0).toString(36));
};

SubjectSchema.methods.toJSON = function () {
    return {
        slug: this.slug,
        name: this.name,
        class: this.class,
    }
}

module.exports = mongoose.model("Subject", SubjectSchema);