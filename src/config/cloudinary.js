import { v2 as cloudinary} from "cloudinary";
import fs from "fs";


          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME , 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret:process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async(localFilePath) => {
    try{
        if(!localFilePath) return null
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //file has been uploaded succesfully
        //console.log("file is uploaded on clodinary",response);
        fs.unlinkSync(localFilePath)
        return response;
    }catch(err){
       fs.unlinkSync(localFilePath)//remove the local saved temp file
       return null;
    }
}

const deleteOnCloudinary = async (localFilePath) => {
    try {
      if (!localFilePath) return null;
      //delete the file from the cloudinary
      const response = await cloudinary.uploader.destroy(localFilePath);
      //file has been deleted successfully
      // console.log("File is deleted from cloudinary: ", response);
      return response;
    } catch (error) {
      return null;
    }
  };


export {uploadOnCloudinary , deleteOnCloudinary}