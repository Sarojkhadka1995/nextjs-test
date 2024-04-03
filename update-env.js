const fs = require('fs');

// Generate a new build ID (e.g., using a timestamp)
const buildID = new Date().getTime().toString();

// Update the .env.local file with the new build ID
fs.writeFileSync('buildID.js', `module.exports = {
    "buildID": ${JSON.stringify(buildID, null, 2)}
}`);