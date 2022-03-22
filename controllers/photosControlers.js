path = require('path');

exports.getUserPhoto = (req, res) => {
    const avatar = req.params.avatar;
    const file = path.join(__dirname, `../usersAvatars/${avatar}`);
    res.sendFile(file);
}