const mongoose = require("mongoose");
const User = require("./User");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");

    // const user = await User.create({
    //   name: "sabarish",
    //   age: 22,
    //   email: "sabarishharidas@gmail.com",
    //   Skills: ["FrontEnd", "BackEnd"],
    //   address: {
    //     Street: "Iraniyan Street",
    //     City: "Erode",
    //   },
    // });
    const user = await User.where("name")
      .equals("sabarish")
      .where("age")
      .lt(30)
      .limit(2)
      .populate("bestFriend");

    // user[0].bestFriend = "6608525682638abd9b056981";
    // await user[0].save();
    console.log(user);
  } catch (err) {
    console.log(err.message);
  }
}

main();
