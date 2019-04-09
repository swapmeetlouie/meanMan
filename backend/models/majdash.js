const mongoose = require('mongoose');

const majSchema = mongoose.Schema({
  majCom: { type: String, required: true }, 
  totalSpend: { type: Number, required: true },
  sbSpend: { type: Number, required: true },
  otsbSpend: {type: Number},
});

module.exports = mongoose.model('dash_fy19', majSchema);
