const mongoose = require("mongoose");
/**
 * Todo model
 */

// get schema from Mongoose
const { Schema } = mongoose;

// creating our new schema
const TodoSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  complete: {
    type: Boolean,
    default: false
  }
});

// exporting the schema
module.exports = mongoose.model("todo", TodoSchema);
