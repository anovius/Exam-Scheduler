const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const mongoosePaginate = require("mongoose-paginate-v2");
const slug = require("slug");

const ComplaintSchema = new mongoose.Schema({
    slug:{
        type:String,
        unique:true,
        required:true
    },
    title:{
        type:String,
    },
    description:{
        type:String,
    },
    by:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    reply: {
        type: String,
        default: "",
    },
    status: {
        type: Number,
        default: 1 // 1-Pending 2-Solved
    }
});

ComplaintSchema.plugin(uniqueValidator, { message: "is already taken." });
ComplaintSchema.plugin(mongoosePaginate);

ComplaintSchema.pre("validate", function (next) {
    if (!this.slug) {
      this.slugify();
    }
    next();
  });
  
ComplaintSchema.methods.slugify = function () {
    this.slug = slug(((Math.random() * Math.pow(36, 6)) | 0).toString(36));
};

ComplaintSchema.methods.toJSON = function () {
    return {
        slug: this.slug,
        title: this.title,
        description: this.description,
        by: this.by,
        reply: this.reply,
        status: this.status
    }
}

module.exports = mongoose.model("Complaint", ComplaintSchema);