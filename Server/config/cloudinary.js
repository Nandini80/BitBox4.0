const cloudinary = require("cloudinary").v2;


// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadController = {};

uploadController.uploadImage = async (req, res) => {
  try {

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "No files were uploaded." });
    }
    const file = req.files.image;
    console.log(req.files.image);
    const result = await cloudinary.uploader.upload(file.tempFilePath);
     console.log(result);

    res.status(200).json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};

module.exports = uploadController;
