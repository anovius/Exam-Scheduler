const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const mongoosePaginate = require("mongoose-paginate-v2");
const slug = require("slug");

const ClassSchema = new mongoose.Schema({
    slug:{
        type:String,
        unique:true,
        required:true
    },
    degree: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    }
});

ClassSchema.plugin(uniqueValidator, { message: "is already taken." });
ClassSchema.plugin(mongoosePaginate);

ClassSchema.pre("validate", function (next) {
    if (!this.slug) {
      this.slugify();
    }
    next();
  });
  
ClassSchema.methods.slugify = function () {
    this.slug = slug(((Math.random() * Math.pow(36, 6)) | 0).toString(36));
};

ClassSchema.methods.toJSON = function () {
    return {
        slug: this.slug,
        degree: this.degree,
        year: this.year,
        section: this.section,
    }
}

module.exports = mongoose.model("Class", ClassSchema);