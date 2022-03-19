const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const userRoutes = require('./routes/users/user.routes');
var multer = require('multer');
var upload = multer();

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

// User Api connected here
app.use("/api/user", userRoutes);

app.get('/', (req, res) => {
    res.send('Project usa server is running');
})

app.use((req, res) => {
    res.send('Wrong api called');
})

app.listen(PORT, () => {
    console.log(`app is running at port ${PORT}`);
})