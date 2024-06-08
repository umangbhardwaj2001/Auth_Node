const mongoose = require("mongoose");
const IdeaCollection = require("./db");

const url = process.env.DATABASE_URL;
async function main() {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    await insertTestData();
    await fetchAllIdeas();
  } catch (err) {
    console.error("Error:", err);
  } finally {
    mongoose.disconnect();
  }
}

// Write

async function insertTestData() {
  const testData = new IdeaCollection({
    id: 2,
    ideaName:
      "Check Feasibility - Check if Fiber feasibility is available on a specific address",
    description:
      "For Altice's Fiber testing, before we place an order, the address must have active Fiber Ports available. if a Port is available the address is feasible for a fiber connection.\nThis tool checks if an address has ports available or not. ",
    category: null,
    ownerName: "Ganesh Prakash Kutty",
    ownerId: 168465,
    reusable: "no",
    businessValue: "",
    comments: "",
    link: null,
    pictureFile: null,
    createdDate: new Date(),
    ownerEmail: null,
    ideaId: 1367,
  });
  await testData.save();
  console.log("Test data inserted successfully");
}
// READ operation
async function fetchAllIdeas() {
  const data = await IdeaCollection.find();
  console.log(data);
}

main();
