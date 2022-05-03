import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const gallery = (req, res) => {
  const images = getImagesFromDir(path.join(__dirname, "../src/images"));
  res.render("gallery", { images: images });
};

function getImagesFromDir(dirPath) {
  const allImages = [];

  const files = fs.readdirSync(dirPath);

  for (let file of files) {
    const fileLocation = path.join(dirPath, file);
    const stat = fs.statSync(fileLocation);
    if (stat && stat.isDirectory()) {
      getImagesFromDir(fileLocation);
    } else if (
      stat &&
      stat.isFile() &&
      [".jpg", ".png"].indexOf(path.extname(fileLocation)) != -1
    ) {
      allImages.push("/" + file);
    }
  }
  return allImages;
}
