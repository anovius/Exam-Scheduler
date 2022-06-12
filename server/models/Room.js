const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const mongoosePaginate = require("mongoose-paginate-v2");
const slug = require("slug");

const RoomSchema = new mongoose.Schema({
    slug:{
        type:String,
        unique:true,
        required:true
    },
    name:{
        type: String
    },
    capacity: {
        type: Number
    },
    status: {
        type: Number,
        default: 1 // 1-Active 2-Deleted 
    }
});

RoomSchema.plugin(uniqueValidator, { message: "is already taken." });
RoomSchema.plugin(mongoosePaginate);

RoomSchema.pre("validate", function (next) {
    if (!this.slug) {
      this.slugify();
    }
    next();
  });
  
RoomSchema.methods.slugify = function () {
    this.slug = slug(((Math.random() * Math.pow(36, 6)) | 0).toString(36));
};

RoomSchema.methods.toJSON = function () {
    return {
        slug: this.slug,
        name: this.name,
        capacity: this.capacity
    }
}

module.exports = mongoose.model("Room", RoomSchema);