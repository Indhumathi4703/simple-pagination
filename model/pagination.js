const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaginationSchema = new Schema(
  {
    name:{type:String},
    index:{type:Number}
  },
  { timestamps: { createdAt: "dt", updatedAt: "u_dt" } }
);

module.exports = mongoose.model("pagination", PaginationSchema);