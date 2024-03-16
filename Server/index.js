const express = require("express");
const app = express();
const uploadRoutes= require("./routes/uploadroutes");



const database = require("./config/database");

const cors = require("cors");

const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT||4000;
app.use('/api', uploadRoutes);
//database connect
database.connect();
//middlewares
app.use(express.json());

app.use(cors());

app.use(fileUpload());


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`App is running at ${PORT}`)
})

