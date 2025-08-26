// YouTube API Configuration for ETMC - Ubungo
// Replace 'YOUR_API_KEY_HERE' with your actual YouTube Data API v3 key

const YOUTUBE_API_KEY = 'YOUR_API_KEY_HERE';

// Array of YouTube video IDs to display
// You can get these from your YouTube video URLs (the part after v=)
const YOUTUBE_VIDEO_IDS = [
  'VIDEO_ID_1',  // Replace with actual video IDs from your channel
  'VIDEO_ID_2',
  'VIDEO_ID_3'
];

// To get your YouTube API key:
// 1. Go to https://console.developers.google.com/
// 2. Create a new project or select existing one
// 3. Enable YouTube Data API v3
// 4. Create credentials (API key)
// 5. Restrict the API key to YouTube Data API v3 only
// 6. Replace 'YOUR_API_KEY_HERE' above with your actual key

// To get video IDs:
// 1. Go to your YouTube video
// 2. Copy the URL (e.g., https://www.youtube.com/watch?v=VIDEO_ID_HERE)
// 3. Extract the part after v= and add it to the array above 