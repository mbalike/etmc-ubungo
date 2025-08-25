// YouTube Configuration
// Replace these values with your actual data

// Your YouTube API Key from Google Cloud Console
// Get it from: https://console.cloud.google.com/apis/credentials
const YOUTUBE_API_KEY = 'YOUR_API_KEY_HERE';

// Array of YouTube video IDs (not full URLs, just the ID part)
// Example: For https://www.youtube.com/watch?v=dQw4w9WgXcQ, use 'dQw4w9WgXcQ'
const YOUTUBE_VIDEO_IDS = [
  'VIDEO_ID_1', // Replace with your first video ID
  'VIDEO_ID_2', // Replace with your second video ID
  'VIDEO_ID_3'  // Replace with your third video ID
];

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { YOUTUBE_API_KEY, YOUTUBE_VIDEO_IDS };
} 