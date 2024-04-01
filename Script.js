const mongoose = require("mongoose");
const User = require("./User");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");

    const user = await User.create({
      name: "sabarish",
      age: 22,
      email: "sabarishharidas@gmail.com",
      Skills: ["FrontEnd", "BackEnd"],
      address: {
        Street: "Iraniyan Street",
        City: "Erode",
      },
    });

    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}

main();
