// scripts/upload-cloudinary.js
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

async function upload(path, public_id) {
  const res = await cloudinary.uploader.upload(path, { public_id, folder: 'shopeinn/products' });
  console.log(res.secure_url);
  return res.secure_url;
}

(async () => {
  const files = fs.readdirSync('./images');
  for (const f of files) {
    const url = await upload(`./images/${f}`, f.split('.').slice(0, -1).join('-'));
    console.log(f, url);
  }
})();
