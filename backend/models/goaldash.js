// Dependency 
const mongoose = require('mongoose');

// Full basic schema declared for future forms
const goalSchema = mongoose.Schema({
    importDt: { type: String },
    majCom: { type: String },
    totalSpend: { type: Number },
    sbSpend: { type: Number },
    sbPerc: { type: Number },
    sbGoal: { type: Number },
    sbStatus: { type: String },
    sbColor: { type: String },
    sdbSpend: { type: Number },
    sdbPerc: { type: Number },
    sdbGoal: { type: Number },
    sdbStatus: { type: String },
    sdbColor: { type: String },
    sdvoSpend: { type: Number },
    sdvoPerc: { type: Number },
    sdvoGoal: { type: Number },
    sdvoStatus: { type: String },
    sdvoColor: { type: String },
    wosbSpend: { type: Number },
    wosbPerc: { type: Number },
    wosbGoal: { type: Number },
    wosbStatus: { type: String },
    wosbColor: { type: String },
    hubzoneSpend: { type: Number },
    hubzonePerc: { type: Number },
    hubzoneGoal: { type: Number },
    hubzoneStatus: { type: String },
    hubzoneColor: { type: String },
    })

module.exports = mongoose.model('goal_fy19', goalSchema);