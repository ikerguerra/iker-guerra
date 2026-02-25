import sharp from "sharp";
import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, "../app/assets");

console.log("🖼️  Optimizing profile images...\n");

async function optimizeProfile() {
    const input = path.join(assetsDir, "profile.png");
    const outputP = path.join(assetsDir, "profile.webp");
    const outputRim = path.join(assetsDir, "profile-rim.webp");

    try {
        // 1. Generate main profile in WebP (High Quality for Next.js Image source)
        const infoMain = await sharp(input)
            .webp({ quality: 85 })
            .toFile(outputP);
        console.log(`✅ Main Profile → profile.webp (${Math.round(infoMain.size / 1024)} KB)`);

        // 2. Generate tiny version for the blurred background effect (rim)
        const infoRim = await sharp(input)
            .resize({ width: 150 }) // Extremely small since it gets a 50px blur anyway
            .webp({ quality: 40 })
            .toFile(outputRim);
        console.log(`✅ Tiny Rim → profile-rim.webp (${Math.round(infoRim.size / 1024)} KB)`);

    } catch (err) {
        console.error(`❌ Failed configuring profile images`, err);
    }
}

optimizeProfile();
