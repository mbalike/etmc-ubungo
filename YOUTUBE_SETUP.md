# YouTube Integration Setup Guide

This guide explains how to set up the YouTube videos section on the publications page.

## What's Been Added

The publications page now includes:
- A YouTube Videos section below the Photo Albums
- Dynamic loading of video data from YouTube API
- Responsive grid layout (3 columns on desktop, 2 on tablet, 1 on mobile)
- Loading states and error handling
- Automatic date formatting

## Setup Steps

### 1. Get YouTube Data API Key

1. Go to [Google Cloud Console](https://console.developers.google.com/)
2. Create a new project or select an existing one
3. Enable the "YouTube Data API v3"
4. Go to Credentials → Create Credentials → API Key
5. Copy your API key

### 2. Configure Video IDs

1. Open `youtube-config.js`
2. Replace `YOUR_API_KEY_HERE` with your actual API key
3. Replace the video IDs in the `YOUTUBE_VIDEO_IDS` array:
   - Go to your YouTube video
   - Copy the URL (e.g., `https://www.youtube.com/watch?v=VIDEO_ID_HERE`)
   - Extract the part after `v=` and add it to the array

Example:
```javascript
const YOUTUBE_VIDEO_IDS = [
  'dQw4w9WgXcQ',  // Your first video
  'abc123def456',  // Your second video
  'xyz789uvw012'   // Your third video
];
```

### 3. Test the Integration

1. Save the `youtube-config.js` file
2. Refresh the publications page
3. The YouTube section should now display your videos with:
   - Embedded video players
   - Video titles
   - Publication dates
   - Channel information

## Features

- **Responsive Design**: Automatically adjusts to different screen sizes
- **Loading States**: Shows loading indicators while fetching data
- **Error Handling**: Gracefully handles API errors or unavailable videos
- **Performance**: Videos load lazily and only when needed
- **Accessibility**: Proper ARIA labels and semantic HTML

## Troubleshooting

- **Videos not loading**: Check your API key and ensure YouTube Data API v3 is enabled
- **API quota exceeded**: YouTube API has daily limits; consider caching or reducing requests
- **Videos not displaying**: Verify video IDs are correct and videos are public

## Security Notes

- Keep your API key private and don't commit it to public repositories
- Consider restricting the API key to only YouTube Data API v3
- Monitor your API usage to avoid unexpected charges

## Customization

You can customize:
- Number of videos displayed (modify the array length)
- Video grid layout (adjust CSS grid properties)
- Date formatting (modify the `formatDate` function)
- Error messages and loading states 