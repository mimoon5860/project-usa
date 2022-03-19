const express = require('express');
const multer = require('multer');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const adsRoutes = require('./routes/ads.routes');
const upload = multer();
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
app.use(upload.array());
app.use(express.static('public'));



// Users All Api connected here
app.use("/api/users", userRoutes);


// Ads All api connected here
app.use("/api/ads", adsRoutes);


// Server running showing this api /
app.get('/', (req, res) => {
    res.send('Project usa server is running');
})

// Wrong api handled here 
app.use((req, res) => {
    res.send('Wrong api called');
})

// Server listening 
app.listen(PORT, () => {
    console.log(`app is running at port ${PORT}`);
})