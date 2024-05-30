var mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
require("dotenv").config();

const collectionName = "IdeaCollection";

const ideaCollectionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  ideaName: { type: String },
  description: { type: String },
  category: { type: String },
  ownerName: { type: String },
  ownerId: { type: Number },
  reusable: { type: String },
  businessValue: { type: String },
  comments: { type: String },
  link: { type: String },
  pictureFile: { type: String },
  createdDate: { type: Date },
  ownerEmail: { type: String },
  ideaId: { type: Number, unique: true },
});
ideaCollectionSchema.plugin(AutoIncrement, { inc_field: "id" });
var IdeaCollection = mongoose.model(collectionName, ideaCollectionSchema);
module.exports = IdeaCollection;
