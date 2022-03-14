const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const userRoutes = require('./routes/users/user.routes')

// Middleware 
app.use(express.json());



// User Api connected here
app.use("/api/user", userRoutes);

app.get('/', (req, res) => {
    res.send('Project usa server is running')
})

app.use((req, res) => {
    res.send('Wrong api called')
})

app.listen(PORT, () => {
    console.log(`app is running at port ${PORT}`)
})