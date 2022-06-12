const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const mongoosePaginate = require("mongoose-paginate-v2");
const slug = require("slug");

const SlotSchema = new mongoose.Schema({
    slug:{
        type:String,
        unique:true,
        required:true
    },
    start:{
        type: String
    },
    end:{
        type: String
    },
    status: {
        type: Number,
        default: 1 // 1-Active 2-Deleted 
    }
});

SlotSchema.plugin(uniqueValidator, { message: "is already taken." });
SlotSchema.plugin(mongoosePaginate);

SlotSchema.pre("validate", function (next) {
    if (!this.slug) {
      this.slugify();
    }
    next();
  });
  
SlotSchema.methods.slugify = function () {
    this.slug = slug(((Math.random() * Math.pow(36, 6)) | 0).toString(36));
};

SlotSchema.methods.toJSON = function () {
    return {
        slug: this.slug,
        start: this.start,
        end: this.end
    }
}

module.exports = mongoose.model("Slot", SlotSchema);