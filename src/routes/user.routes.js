import {Router} from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

//using fields as we need to upload multiple files
router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1

        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)

export default router;