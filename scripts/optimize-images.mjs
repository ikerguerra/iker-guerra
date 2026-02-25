import sharp from "sharp";
import { readdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "../public/images");

// Only project screenshots need converting — tech logos are already WebP
const targets = [
    "blueprint-ai.png",
    "gif-expert-app.png",
    "mundozapas.png",
    "project-construcciones.png",
    "web-eleva-hps.png",
    "web-eterna-diagnostics.png",
];

console.log("🖼️  Optimizing project images...\n");

for (const file of targets) {
    const input = path.join(imagesDir, file);
    const output = path.join(imagesDir, file.replace(".png", ".webp"));

    try {
        const info = await sharp(input)
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: 82 })
            .toFile(output);

        const originalSize = (await sharp(input).metadata()).size;
        const saving = originalSize
            ? `${Math.round((1 - info.size / originalSize) * 100)}% saved`
            : "";

        console.log(
            `✅ ${file} → ${file.replace(".png", ".webp")} ` +
            `(${Math.round(info.size / 1024)} KB, ${saving})`
        );
    } catch (err) {
        console.error(`❌ Failed: ${file}`, err.message);
    }
}

console.log("\n✨ Done! Update projects.ts to use .webp extensions.");
