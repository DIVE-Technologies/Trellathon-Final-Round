const mongoose = require('mongoose');

const videosSchema = new mongoose.Schema({
    videoname: { type: String },
    location: { type: String },
    video: { type: String },
    tags: { type: String },
    description: { type: String }
})

const videoModel = mongoose.model("Videos", videosSchema);

module.exports = videoModel;