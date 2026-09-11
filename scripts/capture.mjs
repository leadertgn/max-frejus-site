// Capture d'écran de pages du site en dev, pour relecture visuelle.
// Usage : node scripts/capture.mjs <chemin> <nom-fichier> [largeur] [hauteur]
import { chromium } from "playwright";

const [chemin = "/", nom = "capture", largeur = "1440", hauteur = "1000"] = process.argv.slice(2);

const navigateur = await chromium.launch({ channel: "msedge" });
const page = await navigateur.newPage({
  viewport: { width: Number(largeur), height: Number(hauteur) },
  deviceScaleFactor: 2,
});

await page.goto(`http://localhost:5180${chemin}`, { waitUntil: "networkidle" });
await page.waitForTimeout(1600); // laisse le reveal du faisceau se terminer

await page.screenshot({ path: `captures/${nom}.png`, fullPage: true });
await navigateur.close();
console.log(`captures/${nom}.png`);
