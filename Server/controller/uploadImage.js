const cloudinary = require("cloudinary").v2; //! Cloudinary is being required
const uploadController = {};

uploadController.uploadImage = async (req, res) => {
	
  try {
    // Check if there is a file in the request
    console.log(req.files.image);

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: "No files were uploaded." });
    }

    const file = req.files.image; // Assuming the file input field is named "image"

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(file.tempFilePath);
     console.log(result);

    res.status(200).json({ imageUrl: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong.", error: error});
  }
};

module.exports = uploadController;
