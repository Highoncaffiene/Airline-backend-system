const path = require('path');
const dotenv = require('dotenv');

// Ensure the service loads the FlightsAndSearch/.env file even if npm is run from a different folder.
// (This keeps the service self-contained inside FlightsAndSearch.)
const envFile = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envFile });

module.exports = {
    PORT: process.env.PORT || 3000,
};