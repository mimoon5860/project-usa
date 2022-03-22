path = require('path');

exports.getUserPhoto = (req, res) => {
    const avatar = req.params.avatar;
    const file = path.join(__dirname, `../photos/usersAvatars/${avatar}`);
    res.sendFile(file);
}

exports.getAdsPhoto = (req, res) => {
    const photo = req.params.photo;
    const file = path.join(__dirname, `../photos/adsPhotos/${photo}`);
    res.sendFile(file);
}