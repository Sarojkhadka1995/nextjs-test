// pages/api/build-id.js
const buildData = require('../../buildID'); // Adjust the path as needed

export default function handler(req, res) {
    const buildID = buildData.buildID || 'default-build-id';

    res.status(200).json({ buildID });
}