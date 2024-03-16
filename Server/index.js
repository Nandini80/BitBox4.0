const express = require("express");
const app = express();
const uploadRoutes = require("./routes/uploadroutes");
const database = require("./config/database");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2; // Import Cloudinary SDK
const { cloudinaryConnect } = require("./config/cloudinary");

dotenv.config();
const PORT = process.env.PORT || 3000;

// Connect to the database
database.connect();
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp",
  })
);
cloudinaryConnect();

// Middleware
app.use(cors());
app.use(express.json());

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use("/api", uploadRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

// Route for uploading image to Cloudinary
app.post("/upload", async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).json({ message: "No file uploaded." });
    }

    // Upload file to Cloudinary from stream
    const uploadedFile = await cloudinary.uploader.upload_stream(
      { folder: "uploads" }, // Optional folder in Cloudinary
      async (error, result) => {
        if (error) {
          console.error("Error uploading file to Cloudinary:", error);
          return res.status(500).json({ message: "Error uploading file." });
        }

        // You can now access the Cloudinary URL for the uploaded file
        const imageUrl = result.secure_url;

        return res.status(200).json({ imageUrl });
      }
    );

    req.files.file.data.pipe(uploadedFile); // Pipe file data to Cloudinary uploader stream
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    return res.status(500).json({ message: "Error uploading file." });
  }
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
