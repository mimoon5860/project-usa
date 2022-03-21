const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const adsRoutes = require('./routes/ads.routes');
const photosRoutes = require('./routes/photos.routes');
const multer = require('multer');
const app = express();

// Server port 
const PORT = process.env.PORT || 4000;

// cors middleware 
app.use(cors());

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(express.static('public'));


// Users All Api connected here
app.use("/api/users", userRoutes);


// Ads All api connected here
app.use("/api/ads", adsRoutes);


// Get photos api
app.use("/api/photo", photosRoutes);


// Server running showing this api /
app.get('/', (req, res) => {
    res.send('Project usa server is running');
})

// Wrong api handled here 
app.use((req, res) => {
    res.send('Wrong api called');
})

// Handle error 
app.use((err, req, res, next) => {
    if (err) {
        if (err instanceof multer.MulterError) {
            res.status(505).send("File upload error check file size/type");
        } else {
            res.status(505).send(err.message);
        }
    } else {
        res.send({
            success: true
        })
    }
})

// Server listening 
app.listen(PORT, () => {
    console.log(`app is running at port ${PORT}`);
})