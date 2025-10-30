# Portfolio Setup Instructions

## Project Structure

```
portfolio/
├── src/
│   ├── App.jsx              # Main component (reads from config.json)
│   ├── App.css              # All styling
│   ├── config.json          # 📝 EDIT THIS FILE TO UPDATE CONTENT
│   ├── index.css            # Global styles
│   └── main.jsx
├── CONFIG_GUIDE.md          # Detailed guide on editing config.json
├── SETUP_INSTRUCTIONS.md    # This file
├── package.json
└── vite.config.js
```

## Getting Started

### Development

```bash
npm install
npm run dev
```

The dev server will start at `http://localhost:5175/`

### Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## Editing Content

**All content is managed in `src/config.json`**

### Common Edits

#### Update Your Name
Find `"personal": { "name": "..."}`

#### Change Your Email
Find `"personal": { "email": "..."}`

#### Add a New Experience Entry
```json
"experience": [
  ...existing entries...,
  {
    "role": "Your Job Title",
    "company": "Company Name",
    "location": "City, Country",
    "period": "Start - End",
    "highlights": ["Achievement 1", "Achievement 2"]
  }
]
```

#### Add a New Project
```json
"projects": [
  ...existing projects...,
  {
    "title": "Project Name",
    "description": "What it does",
    "tech": ["Tech 1", "Tech 2"],
    "icon": "Code2"
  }
]
```

#### Update Skills
Edit the `"skills"` object to add new categories or skills.

#### Add a Recommendation
```json
"recommendations": [
  ...existing recommendations...,
  {
    "text": "The recommendation text...",
    "author": {
      "name": "Person Name",
      "title": "Job Title",
      "company": "Company",
      "location": "City, Country",
      "image": "./image.jpg"
    }
  }
]
```

## Customization

### Colors
Edit `src/App.css` to change colors. Key color variables:
- `#a78bfa` - Purple accent
- `#60a5fa` - Blue accent
- `#d1d5db` - Light text
- `#0f0f1e` - Dark background

### Fonts
Main font is already system fonts (no external dependencies needed). To change, edit `src/App.css`.

### Sections
Navigation sections are defined in the component. To add a new section:
1. Add content in `config.json` under a new key
2. Create a new `<section>` in `App.jsx`
3. Add to `navItems` array

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Connect Vercel to GitHub repo
3. Vercel auto-deploys on push
4. Edit `src/config.json` directly on GitHub to update content

### Netlify
1. Push code to GitHub
2. Connect Netlify to GitHub repo
3. Auto-deploys on push
4. Edit `src/config.json` on GitHub to update content

### Traditional Server
1. Run `npm run build`
2. Upload `dist/` folder to your server
3. Serve the static files

## Troubleshooting

### Port Already in Use
If port 5175 is in use:
```bash
npm run dev -- --port 3000
```

### Changes Not Showing
- Make sure you're editing `src/config.json` (not a copy)
- Check that JSON is valid (use a JSON validator if unsure)
- Restart dev server if changes don't appear

### JSON Validation
Use an online JSON validator to check your `config.json` syntax:
- jsonlint.com
- jsonchecker.com

## Project Dependencies

- **React** - UI framework
- **Vite** - Build tool (fast!)
- **Lucide React** - Icons
- **Pure CSS** - No CSS frameworks

## Key Features

✅ Single-page portfolio
✅ Fully responsive (mobile, tablet, desktop)
✅ Fast (Vite + optimized)
✅ Easy to edit (JSON config)
✅ No database needed
✅ Modern design with gradients and animations
✅ SEO friendly

---

**Happy coding! 🚀**
