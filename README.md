# 🌿 Paradise Nursery — Online Plant Shop

A React shopping cart app for an online plant shop, built with Vite + React Router.

## Features
- Landing page with hero section and call-to-action
- Product listing page with 3 plant categories (14 plants total):
  - Aromatic Plants
  - Medicinal Plants
  - Air Purifying Plants
- Shopping cart with quantity controls, delete, and order summary
- Live cart item count in the navbar
- Responsive design

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation & Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/paradise-nursery.git
cd paradise-nursery

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open your browser at **http://localhost:5173**

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

To preview the production build locally:
```bash
npm run preview
```

---

## 🌐 Deploy to GitHub Pages

1. Install the gh-pages deploy plugin:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add this to `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/paradise-nursery/',  // your repo name
   })
   ```

3. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

Your site will be live at: `https://YOUR_USERNAME.github.io/paradise-nursery/`

---

## 📁 Project Structure

```
paradise-nursery/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── data/
    │   └── plants.js
    ├── components/
    │   ├── Navbar.jsx
    │   └── Navbar.css
    └── pages/
        ├── Landing.jsx
        ├── Landing.css
        ├── ProductListing.jsx
        ├── ProductListing.css
        ├── Cart.jsx
        └── Cart.css
```

## Tech Stack
- React 18
- React Router DOM 6
- Vite 5
- Google Fonts (Playfair Display + Lato)
- Unsplash images (free, no API key needed)
