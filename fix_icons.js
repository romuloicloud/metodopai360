const fs = require('fs');
const path = require('path');
const appDir = path.join(__dirname, 'app');
const files = fs.readdirSync(appDir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const p = path.join(appDir, f);
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/<link rel=\"apple-touch-icon\" href=\"\/app-icon\.png\">/g, '<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">');
  fs.writeFileSync(p, content);
  console.log('Fixed', f);
});

// Fix sw.js
const swPath = path.join(appDir, 'sw.js');
let swContent = fs.readFileSync(swPath, 'utf8');
swContent = swContent.replace(/'\/app-icon\.png',/, "'/app-icon.png',\n    '/apple-touch-icon.png',");
swContent = swContent.replace(/pai360-v3/, 'pai360-v4');
fs.writeFileSync(swPath, swContent);
console.log('Fixed sw.js');
