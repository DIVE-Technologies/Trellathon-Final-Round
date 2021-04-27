require("dotenv").config();
const express = require('express');
const morgan = require("morgan");
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
app.use(morgan("tiny"));
const multer = require('multer');
const UploadVideos = require('./Model/VideoModel');

const connectDB = require('./DB/Connection');

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");

    next();
});

// allow cors requests from any origin and with credentials
app.use(cors({ origin: (origin, callback) => callback(null, true), credentials: true }));

app.get('/test', (req, res) => {
    res.json("Api working Prefectly fine.....")
})

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    //reject a file
    if (file.mimetype == 'video/mp4' || file.mimetype == 'video/gif') {
        cb(null, true);
    } else {
        cb(new Error('This type of file is not acceptable!!'), false);
    }

}

const upload = multer({
    storage: storage,
    limits: {
        fieldSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
}).single('video');

app.post('/upload', upload, async (req, res) => {
    const uploadvideos = new UploadVideos({
        video: req.file.path,
        videoname: req.body.videoname,
        location: req.body.location,
        description: req.body.description,
        tags: req.body.tags
    });
    const newVideos = await uploadvideos.save();
    if (newVideos) {
        return res.status(201).send({ message: 'New Videos Uploaded', data: newVideos });

    }
    return res.status(500).send({ message: 'Error in uploading Videos.' });

});

app.get("/all-videos", async (req, res) => {
    const videos = await UploadVideos.find({});
    res.send(videos);
})

app.get("/search/trending", function (req, res) {
    var regex = new RegExp(req.params.tags, 'i')
    UploadVideos.find({ tags: regex }).then((result) => {
        res.status(200).json(result)
    })
})

app.get("/search/:location", function (req, res) {
    var regex = new RegExp(req.params.location, 'i')
    UploadVideos.find({ location: regex }).then((result) => {
        res.status(200).json(result)
    })
})

const port = process.env.USER_PORT
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});