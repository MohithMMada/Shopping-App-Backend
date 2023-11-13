const mongoose = require ("mongoose");
const userCredsSchema = new mongoose.Schema({              
  customerName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: {type:String},
  preferredCategory: {type:String}
})


let UserCreds = mongoose.model("userCreds", userCredsSchema);

module.exports = UserCreds;