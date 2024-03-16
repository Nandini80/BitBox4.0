const {uploadImageToCloudinary}  = require("../controller/ImageUploader")

exports.uploadImage= async(req,res)=>{
    try{
        const image = req.files.image;

        const uploadDetails = await uploadImageToCloudinary(
            image,
            process.env.FOLDER_NAME
          )
          console.log(uploadDetails)

          return res.status(200).json({ success: true, data: uploadDetails })

    }
    catch(error){
        return res.status(500).json({
            success: false,
            message: "not uploaded",
            error: error.message,
          })

    }
}