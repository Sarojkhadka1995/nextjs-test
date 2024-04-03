/** @type {import('next').NextConfig} */
module.exports = {
  generateBuildId: async () => {
    // Generate a new build ID (e.g., using a timestamp)
    return new Date().getTime().toString();
  },
};
