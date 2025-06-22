
# Classic Car Restoration Portfolio

A minimalist, image-focused website showcasing classic car restoration projects with Apple and Instagram-inspired design.

## Live Website
Visit the live site at: [Your Domain Here]

## Features

- **Responsive Gallery Grid** - Mobile-first design with masonry layout
- **Fullscreen Modal Carousel** - Immersive project viewing experience  
- **Multilingual Support** - English/Portuguese with language toggle
- **Static Site** - No backend required, easy to host anywhere
- **Project Auto-Loading** - Automatically detects and loads projects from folders

## Adding New Projects

### 1. Create Project Folder

Create a new folder in `/projects/` with a descriptive name using kebab-case:

```
/projects/
 └── porsche-911-classic/
     ├── 01.jpg
     ├── 02.jpg
     ├── 03.jpg
     └── info.json
```

### 2. Folder Naming Conventions

- Use **kebab-case** (lowercase with hyphens): `porsche-911-classic`
- Be descriptive but concise: `ferrari-250gt-berlinetta`
- Include year if helpful: `mercedes-300sl-1955`

### 3. Image Requirements

**File Naming:**
- Use sequential numbers: `01.jpg`, `02.jpg`, `03.jpg`
- Pad with zeros for proper sorting
- Supported formats: `.jpg`, `.jpeg`, `.png`

**Image Specifications:**
- **Minimum Resolution:** 1200px on the longest side
- **Recommended Resolution:** 1920px on the longest side
- **Aspect Ratio:** Any (system auto-crops for grid)
- **File Size:** Under 2MB per image for fast loading
- **Color Profile:** sRGB

**Image Order:**
- `01.jpg` - Main hero image (appears in gallery grid)
- `02.jpg, 03.jpg...` - Additional detail shots
- Arrange in logical viewing order (exterior → interior → engine → details)

### 4. Project Information File

Create `info.json` in each project folder:

```json
{
  "name": "Porsche 911 Classic",
  "year": "1973",
  "tags": ["Full Restoration", "Engine", "Interior"],
  "description": "Complete rebuild with original performance and modern finishes. This project involved a full engine rebuild, interior restoration, and paint correction."
}
```

**Field Guidelines:**
- **name**: Project title (appears in gallery and modal)
- **year**: Vehicle year or project completion year
- **tags**: 2-4 descriptive tags (keep concise)
- **description**: 1-2 sentences describing the restoration work

### 5. Publishing New Projects

After adding a project folder:

1. Upload the entire project folder to `/projects/`
2. Ensure all images and `info.json` are present
3. The site will automatically detect and display the new project
4. No code changes required!

## Technical Setup

### Development
```bash
npm install
npm run dev
```

### Building for Production
```bash
npm run build
npm run preview
```

### Deployment
The site is completely static and can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Customization

### Colors
The site uses a minimal black/white/grey palette defined in `tailwind.config.ts`. To customize:
- Primary: Black (#000000)
- Background: White (#ffffff)  
- Accent: Grey shades

### Language Support
Currently supports English (EN) and Portuguese (PT). To add languages:
1. Add translations to the `translations` object in `src/pages/Index.tsx`
2. Add language button to header
3. Update the language state management

### Content Sections
- **Gallery**: Auto-populated from `/projects/` folders
- **About**: Edit content in the translations object
- **Contact**: Update contact information and map integration

## Browser Support
- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Optimized images load lazily
- Minimal JavaScript bundle
- CSS-only animations
- Mobile-first responsive design

## License
All rights reserved. Please respect automotive photography copyrights.

---

For questions or support, contact: info@classicrestoration.com
