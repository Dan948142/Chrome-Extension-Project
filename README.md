# DSA Problem Tracker (Chrome Extension)

A lightweight Chrome Extension designed to help users bookmark and track important Data Structures and Algorithms (DSA) problems directly from maang.in. Streamline your interview prep with seamless problem management and persistent storage.

## ✨ Features

* 📌 **One-Click Bookmark:** Injects a custom bookmark button seamlessly into the problem UI for quick saving.
* 💾 **Persistent Storage:** Saves problem titles, links, and metadata securely using Chrome's Sync Storage.
* 🚀 **Quick Access:** View, open, or delete saved problems directly from the extension popup.
* 📊 **Problem Count:** See at a glance how many problems you've bookmarked.

## 📋 Requirements

* **Browser:** Google Chrome (version 88+)
* **Website:** maang.in (compatible with the current problem format)

## 🚀 Installation (Developer Mode)

1. **Clone or Download:**
   ```bash
   git clone https://github.com/Dan948142/Chrome-Extension-Project.git
   ```
   Or download the ZIP file from the repository.

2. **Open Chrome Extensions:**
   - Navigate to `chrome://extensions/` in your browser

3. **Enable Developer Mode:**
   - Toggle the **Developer mode** switch in the top right corner

4. **Load the Extension:**
   - Click the **Load unpacked** button
   - Select the folder containing the extension files
   - The extension should now appear in your extensions list

5. **Pin to Toolbar (Optional):**
   - Click the puzzle icon in your Chrome toolbar
   - Find "DSA Problem Tracker" and click the pin icon for quick access

## 📖 Usage

### Bookmarking Problems
1. Visit a problem on maang.in
2. Click the **Bookmark** button (injected into the problem page)
3. The problem is instantly saved to your collection

### Managing Bookmarks
1. Click the extension icon in your Chrome toolbar
2. **View:** See all your saved problems with their links
3. **Open:** Click any problem link to navigate directly to it
4. **Delete:** Remove problems you no longer need to track

## 🛠️ Project Structure

```
Chrome-Extension-Project/
├── manifest.json          # Extension configuration
├── popup.html            # Extension popup UI
├── popup.css             # Styling for popup
├── popup.js              # Popup functionality
├── content.js            # Content script for page injection
├── background.js         # Background service worker (if applicable)
├── styles/               # Additional stylesheets
└── assets/               # Icons and images
```

## 🔐 Privacy & Security

* ✅ No data is sent to external servers
* ✅ All bookmarks are stored locally using Chrome's Sync Storage
* ✅ Your browsing data remains completely private
* ✅ No ads or tracking

## 🐛 Known Limitations

* Works specifically with maang.in problem pages
* Requires the problem page DOM structure to remain consistent
* Sync features require Chrome profile login

## 📝 Future Enhancements

* 🔍 Search and filter bookmarks
* 🏷️ Custom tags/categories for problems
* 📈 Progress tracking and statistics
* 📤 Export bookmarks to CSV/JSON
* 🌙 Dark mode support
* ⭐ Star/rate problems for priority
* 🔔 Reminder notifications for bookmarked problems

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Troubleshooting

**Extension not showing bookmark button on maang.in?**
- Refresh the page (hard refresh: Ctrl+Shift+R or Cmd+Shift+R)
- Check that the extension is enabled in `chrome://extensions/`
- Verify you're on a valid problem page

**Changes not appearing in popup?**
- Reload the extension in `chrome://extensions/`
- Clear your browser cache

---

Happy DSA Problem Tracking! 🎯
