const multer = require('multer');
import { NextFunction, Request, Response } from "express"
const storage = multer.diskStorage({
    destination: function (req: Request, file: any, cb: any) {
        cb(null, './uploads/');
    },
    filename: function (req: Request, file: any, cb: any) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req: Request, file: any, cb: any) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

export const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});
