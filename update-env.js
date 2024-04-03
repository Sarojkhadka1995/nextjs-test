const fs = require('fs');

// Generate a new build ID (e.g., using a timestamp)
const buildID = new Date().getTime().toString();

// Update the .env.local file with the new build ID
fs.writeFileSync('.env.local', `NEXT_PUBLIC_BUILD_ID=${buildID}`);