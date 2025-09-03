# Favicon Setup Guide
## Key West Blue Crab Food Truck

### **What is a Favicon?**
A favicon is the small logo that appears in:
- Browser tabs
- Bookmarks
- Browser history
- Mobile home screen shortcuts

---

## **STEP 1: GENERATE FAVICON FILES**

### **Option A: Use favicon.io (Recommended)**
1. Go to [favicon.io](https://favicon.io/)
2. Click "Image" tab
3. Upload your `kwbc-logo.png` from `/public/images/`
4. Click "Download" to get all favicon files

### **Option B: Use RealFaviconGenerator**
1. Go to [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Upload your logo
3. Configure options (keep defaults for best results)
4. Generate and download package

---

## **STEP 2: PLACE FAVICON FILES**

### **Files to Add to `/public/` folder:**
- `favicon.ico` (16x16, 32x32, 48x48)
- `favicon-16x16.png` (16x16)
- `favicon-32x32.png` (32x32)
- `apple-touch-icon.png` (180x180)
- `android-chrome-192x192.png` (192x192)
- `android-chrome-512x512.png` (512x512)

### **File Structure:**
```
public/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── images/
    └── kwbc-logo.png
```

---

## **STEP 3: TEST YOUR FAVICON**

### **After adding files:**
1. **Clear browser cache** (Ctrl+F5 or Cmd+Shift+R)
2. **Check browser tab** - should show your logo
3. **Bookmark your site** - logo should appear
4. **Add to mobile home screen** - should show logo

### **What You Should See:**
- ✅ **Browser tab**: Small logo next to page title
- ✅ **Bookmarks**: Logo in bookmark bar
- ✅ **Mobile**: Logo when adding to home screen
- ✅ **Social media**: Logo when sharing links

---

## **STEP 4: TROUBLESHOOTING**

### **If favicon doesn't appear:**
1. **Check file names** - must match exactly
2. **Clear browser cache** - old favicon may be cached
3. **Check file permissions** - files should be readable
4. **Verify file paths** - all in `/public/` folder

### **Common Issues:**
- **Wrong file format** - use .ico for main favicon
- **Incorrect sizes** - follow the exact dimensions
- **Browser caching** - clear cache and reload
- **File corruption** - regenerate favicon files

---

## **STEP 5: OPTIMIZATION**

### **File Size Guidelines:**
- **favicon.ico**: Under 100KB
- **PNG files**: Under 50KB each
- **Total package**: Under 300KB

### **Quality Tips:**
- **Start with high-res logo** (your kwbc-logo.png is perfect)
- **Use transparent background** if possible
- **Keep design simple** - small size needs clarity
- **Test on different devices** and browsers

---

## **WHAT'S ALREADY SET UP:**

✅ **Metadata configured** in layout.tsx
✅ **Icon references** added to HTML head
✅ **Social media images** linked to your logo
✅ **Multiple device support** (desktop, mobile, tablet)

---

## **NEXT STEPS:**

1. **Generate favicon files** using favicon.io
2. **Place files in `/public/` folder**
3. **Test on different browsers**
4. **Verify mobile display**
5. **Check social media sharing**

---

## **BENEFITS OF PROPER FAVICON:**

- **Brand recognition** in browser tabs
- **Professional appearance** across all devices
- **Better user experience** with visual identification
- **Improved social sharing** with proper images
- **Mobile optimization** for home screen shortcuts

---

*Your logo will now appear everywhere your website is referenced!*
