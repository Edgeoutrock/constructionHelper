const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Projects collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/constructionProject");

const projectSeed = [
  {
    id: 1,
    title: "New Home Construction",
    imageURL: "https://si.wsj.net/public/resources/images/B3-DM067_RIGHTS_IM_20190319162958.jpg",
    description: "build a home from scratch",
    date: { type: Date, default: Date.now }
  },
  {
    id: 2,
    title: "Home Additions",
    imageURL: "https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale",
    description: "Remove or add stuff to an existing home",
    date: { type: Date, default: Date.now }
  },
  {
    id: 3,
    title: "Bathroom Remodels",
    imageURL: "https://www.thespruce.com/thmb/YuqBcOldMD_Z6D35Em-3ae-A0x8=/640x428/filters:no_upscale()/beach-style-bathroom-white-marble-589daa1c3df78c475853c280.jpg",
    description: "installation for faucets, sinks, showerheads, tubs, and other related items",
    date: { type: Date, default: Date.now }
  },
  {
    id: 4,
    title: "Kitchen Remodels",
    imageURL: "https://st.hzcdn.com/fimgs/90f15e760c36401e_1566-w312-h312-b0-p0--transitional-kitchen.jpg",
    description: "replacements of countertops with granite and faucet installation",
    date: { type: Date, default: Date.now }
  },
  {
    id: 5,
    title: "Windows and Doors",
    imageURL: "https://www.scorpionhome.com/images/pages/replacement-windows-doors-belleville-il.jpg",
    description: "placement of items",
    date: { type: Date, default: Date.now }
  },
  {
    id: 6,
    title: "Decks and Porches",
    imageURL: "https://nexgenremodeling.com/wp-content/uploads/2019/07/porch-and-deck-construction-services-by-local-professionals.jpg",
    description: "the exterior looks better with replacements",
    date: { type: Date, default: Date.now }
  }
];

db.Project.remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
