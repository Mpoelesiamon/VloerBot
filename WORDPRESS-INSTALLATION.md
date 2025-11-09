# WordPress Plugin Installation Guide

This guide will walk you through the complete process of converting the VloerBot chatbot into a WordPress plugin and installing it on your WordPress site.

## Prerequisites

- Node.js and npm installed
- WordPress site (self-hosted or WordPress.com Business plan)
- Supabase account with a project set up
- Access to your WordPress admin panel

## Step-by-Step Installation

### Step 1: Build the WordPress Plugin

1. **Open terminal in the project directory:**
   ```bash
   cd /path/to/vloerenhuis-bot
   ```

2. **Install dependencies (if not already done):**
   ```bash
   npm install
   ```

3. **Build the plugin:**
   ```bash
   npm run build:wordpress
   ```

   This creates the `wordpress-plugin/build` directory with all necessary files.

### Step 2: Prepare the Plugin for Installation

1. **Navigate to the wordpress-plugin directory:**
   ```bash
   cd wordpress-plugin
   ```

2. **Create a zip file:**
   - On Mac/Linux:
     ```bash
     zip -r vloerbot-chatbot.zip . -x "*.git*" -x "README.md"
     ```
   - On Windows:
     - Select the `vloerbot-chatbot.php` file and the `build` folder
     - Right-click → Send to → Compressed (zipped) folder
     - Name it `vloerbot-chatbot.zip`

   The zip should contain:
   - `vloerbot-chatbot.php`
   - `build/` folder (with all assets)

### Step 3: Install the Plugin in WordPress

#### Option A: Upload via WordPress Admin (Recommended)

1. **Log in to WordPress Admin**
2. **Go to Plugins → Add New**
3. **Click "Upload Plugin"** at the top
4. **Click "Choose File"** and select `vloerbot-chatbot.zip`
5. **Click "Install Now"**
6. **Click "Activate Plugin"** after installation completes

#### Option B: Manual Installation via FTP/SFTP

1. **Upload the plugin folder:**
   - Upload the entire `wordpress-plugin` folder to `/wp-content/plugins/`
   - Rename it to `vloerbot-chatbot` (remove the `wordpress-plugin` prefix)
   - Final path should be: `/wp-content/plugins/vloerbot-chatbot/`

2. **Activate the plugin:**
   - Go to WordPress Admin → Plugins
   - Find "VloerBot Chatbot"
   - Click "Activate"

### Step 4: Configure Supabase Credentials

1. **Get your Supabase credentials:**
   - Go to [supabase.com](https://supabase.com) and sign in
   - Select your project
   - Navigate to **Settings → API**
   - Copy the **Project URL** (e.g., `https://xxxxx.supabase.co`)
   - Copy the **anon/public** key (starts with `eyJ...`)

2. **Configure in WordPress:**
   - Go to WordPress Admin → **Settings → VloerBot**
   - Paste your **Supabase URL** in the first field
   - Paste your **Supabase Publishable Key** in the second field
   - Click **"Save Settings"**

### Step 5: Verify Installation

1. **Visit your WordPress site** (any page)
2. **Look for the chat icon** in the bottom-right corner
3. **Click the icon** to open the chatbot
4. **Test the chatbot** by sending a message

## Updating the Plugin

When you make changes to the React code:

1. **Rebuild the plugin:**
   ```bash
   npm run build:wordpress
   ```

2. **Re-zip the plugin folder** (same as Step 2)

3. **Update in WordPress:**
   - Go to Plugins → Installed Plugins
   - Deactivate "VloerBot Chatbot"
   - Delete it (this removes the old version)
   - Upload the new zip file (same as Step 3)
   - Activate the plugin

## Troubleshooting

### Chat widget doesn't appear

**Check:**
- ✅ Plugin is activated in WordPress Admin → Plugins
- ✅ Supabase credentials are saved in Settings → VloerBot
- ✅ Browser console for errors (F12 → Console tab)
- ✅ The `build` folder exists in the plugin directory

**Solution:**
- Rebuild the plugin: `npm run build:wordpress`
- Re-upload the plugin files
- Clear browser cache

### "Supabase credentials not configured" message

**Check:**
- ✅ You've saved the credentials in Settings → VloerBot
- ✅ The credentials are correct (no extra spaces)
- ✅ Your Supabase project is active

**Solution:**
- Go to Settings → VloerBot
- Re-enter and save the credentials
- Refresh your WordPress site

### JavaScript errors in console

**Common issues:**
- Build files are missing or corrupted
- File paths are incorrect
- WordPress can't find the assets

**Solution:**
- Rebuild: `npm run build:wordpress`
- Verify the `build/assets/` folder contains `.js` and `.css` files
- Check file permissions (should be readable by web server)
- Re-upload the plugin

### Supabase connection errors

**Check:**
- ✅ Supabase URL is correct (includes `https://`)
- ✅ Supabase key is the anon/public key (not the service role key)
- ✅ Your Supabase project is active and not paused
- ✅ The `chat-uploads` storage bucket exists in Supabase

**Solution:**
- Verify credentials in Supabase Dashboard → Settings → API
- Check Supabase project status
- Ensure storage bucket is created (see migration file)

## File Structure

After building, your plugin structure should look like:

```
wp-content/plugins/vloerbot-chatbot/
├── vloerbot-chatbot.php
└── build/
    └── assets/
        ├── main-[hash].js
        ├── main-[hash].css
        └── [other chunk files]
```

## Next Steps

- Customize the chatbot appearance (edit React components)
- Add custom styling to match your WordPress theme
- Configure additional Supabase settings if needed
- Set up Supabase Edge Functions for chat streaming

## Support

If you encounter issues:
1. Check the browser console for error messages
2. Verify all steps were completed correctly
3. Ensure Supabase project is properly configured
4. Check WordPress error logs (if available)

