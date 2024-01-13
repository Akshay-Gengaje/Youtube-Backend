import { v2 as cloudinary } from "cloudinary";
import { fs } from "fs";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

const uploadOnCloudinay = async function (localFilePath) {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinay
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    // file has been uploaded successfully
    console.log("File Uploaded successfully on cloudinay", response.url);
    return response;
  } catch (err) {
    fs.unlinkSync(); // remove the locally saved temporary file as the upload operation got failed
    console.log(err);
    return null;
  }
};

export { uploadOnCloudinay };
