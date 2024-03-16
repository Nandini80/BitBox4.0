const express = require("express");
const app = express();
const uploadRoutes = require("./routes/uploadroutes");
const database = require("./config/database");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

// Connect to the database
database.connect();

// Middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use('/api', uploadRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: 'Your server is up and running....'
  });
});

app.listen(PORT, () => {
  console.log(`App is running at ${PORT}`);
});
