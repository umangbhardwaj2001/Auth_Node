var mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
require("dotenv").config();

const collectionName = "IdeaCollection";

const ideaCollectionSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  ideaName: { type: String },
  description: { type: String },
  category: { type: String, default: null },
  ownerName: { type: String },
  ownerId: { type: Number },
  reusable: { type: String },
  businessValue: { type: String, default: null },
  comments: { type: String, default: null },
  link: { type: String, default: null },
  pictureFile: { type: String, default: null },
  createdDate: { type: Date },
  ownerEmail: { type: String },
  ideaId: { type: Number, unique: true },
});
ideaCollectionSchema.plugin(AutoIncrement, { inc_field: "id" });
var IdeaCollection = mongoose.model(collectionName, ideaCollectionSchema);
module.exports = IdeaCollection;
