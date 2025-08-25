# YouTube Integration Setup Guide

This guide will help you set up the YouTube integration to display real video titles and published dates on your website.

## Prerequisites

1. A Google account
2. Access to Google Cloud Console

## Step 1: Get YouTube Data API v3 Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the YouTube Data API v3:
   - Go to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click on it and press "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key

## Step 2: Configure Video IDs

1. Open `youtube-config.js`
2. Replace `YOUR_API_KEY_HERE` with your actual API key
3. Replace the video IDs with your actual YouTube video IDs:

```javascript
const YOUTUBE_VIDEO_IDS = [
  'dQw4w9WgXcQ', // Example: Rick Roll
  'jNQXAC9IVRw', // Example: Me at the zoo
  'kJQP7kiw5Fk'  // Example: Despacito
];
```

### How to Find Video IDs

- Open any YouTube video
- The video ID is the part after `v=` in the URL
- Example: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- The video ID is: `dQw4w9WgXcQ`

## Step 3: Test the Integration

1. Save both files
2. Open your website
3. Check the browser console for any errors
4. The videos should load with real titles and dates

## Troubleshooting

### API Quota Limits
- YouTube Data API v3 has daily quotas
- Each video fetch costs 1 unit
- Default quota: 10,000 units/day
- Monitor usage in Google Cloud Console

### Common Errors
- **403 Forbidden**: Check if API is enabled and key is correct
- **400 Bad Request**: Verify video IDs are correct
- **Quota exceeded**: Wait until quota resets or request increase

### Security Notes
- Keep your API key private
- Don't commit it to public repositories
- Consider restricting the key to your domain

## Features

✅ **Real video titles** from YouTube  
✅ **Published dates** with smart formatting  
✅ **Channel names** displayed  
✅ **Responsive design** for all devices  
✅ **Error handling** for failed requests  
✅ **Loading states** while fetching data  

## Customization

You can modify the date formatting, styling, and number of videos displayed by editing the JavaScript code in `index.html`.

## Support

If you encounter issues:
1. Check browser console for error messages
2. Verify API key and video IDs
3. Ensure YouTube Data API v3 is enabled
4. Check your daily API quota usage 