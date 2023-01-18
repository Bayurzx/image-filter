import fs from "fs";
import Jimp = require("jimp");

// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    const outpath = "/tmp/filtered_" + Math.floor(Math.random() * 2000) + ".jpg";
    try {
      const photo = await Jimp.read(inputURL);
      try {
        await photo
          .resize(256, 256) // resize
          .quality(60) // set JPEG quality
          .greyscale() // set greyscale
          .write(__dirname + outpath, (img) => {          
            // console.log("Writing");
            
            resolve(__dirname + outpath);
          });
      } catch (error) {
        console.log("Photo err:");
        
        reject(error)
      }
    } catch (error) {
      console.log("Filter err:");
      reject(error);
    }
  });
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files: Array<string>) {
  for (let file of files) {
    console.log("file", file);
    
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);

    }
    console.log(`file: ${file.split("tmp/")[1]} was deleted`);
  }
}
