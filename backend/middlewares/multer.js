// import multer from "multer"

// let storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"./public")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })
// const upload =multer({storage})

// export default upload


import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public");
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    },
});

const upload = multer({ storage });

export default upload;
