# Adding Your Profile Photo

## Quick Steps:

1. **Save your profile photo** as `profile.jpeg` 

2. **Copy it to**: `client/public/profile.jpeg`
   - Full path: `Temp-Portfolio\client\public\profile.jpeg`

3. **Recommended image specs**:
   - Format: JPG or PNG
   - Size: Square (e.g., 800x800px or 1000x1000px)
   - File size: Under 500KB for faster loading
   - The image from your attachment works perfectly!

4. **Redeploy**:
   ```powershell
   npm run build
   vercel --prod
   ```

## What's Been Updated:

✅ **Favicon/Logo** - Changed from Replit logo to custom "M" logo
✅ **Page Title** - Now shows "Manya Parikh | Data Scientist & SOC Analyst"
✅ **Profile Image** - Added to About page with your name label
✅ **Fallback** - If image not found, shows stylized "M" placeholder

## Files Modified:

1. `client/index.html` - Updated title and favicon
2. `client/public/logo.svg` - Created custom "M" logo for browser tab
3. `client/src/pages/About.tsx` - Added profile image section

Your portfolio now has a professional, branded appearance! 🎨
