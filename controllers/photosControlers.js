const db = require('../models/db');

exports.getUserPhoto = (req, res) => {
    const avatar = req.params.avatar;

    const filePath = `../usersAvatars/${avatar}`;

    res.sendFile(filePath, (err, content) => {
        res.end(content);
    });
    // console.log(filePath);


}