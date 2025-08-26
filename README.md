
# Clone the repository
git clone https://github.com/yourusername/Visuals_Medicine.git

# Navigate into project folder
cd medi

# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build


medi/
 ├── public/           # Static assets (index.html, images, manifest)
 ├── src/              # React components (if present in dev folder)
 ├── build/            # Production build (auto-generated)
 ├── package.json      # Dependencies and scripts
 ├── manifest.json     # PWA metadata
 └── service-worker.js # Offline caching
