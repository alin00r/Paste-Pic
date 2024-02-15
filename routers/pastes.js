const multer = require("multer");
const sharp = require("sharp");
const express = require("express");
const router = new express.Router();
const Paste = require("../models/paste");

const upload = multer({
    //   dest: "avatars",
    limits: {
        fileSize: 10000000,
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg|gif)$/)) {
            return cb(new Error("Please upload an Image!"));
        }
        cb(undefined, true);
    },
});

router.get("/", (req, res) => {
    res.render("index");
});

router.post(
    "/upload/img",
    upload.single("img"),
    async(req, res) => {
        const buffer = await sharp(req.file.buffer).png().toBuffer();
        const paste = new Paste({
            expiresAt: new Date(Date.now() + req.body.expire * 1000),
            img: buffer,
        });

        await paste.save();
        res.redirect(`/img/${paste._id}/`);
    },
    (error, req, res, next) => {
        res.status(400).send({ error: error.message });
    }
);

router.get("/img/:id/", async(req, res) => {
    try {
        const paste = await Paste.findById(req.params.id);
        if (!paste) {
            res.send("<h3>Not Found!</h3>");
        }
        res.set("Content-Type", "image/png");
        res.send(paste.img);
    } catch (e) {
        res.status(404).send();
    }
});
router.get("/img/*", (req, res) => {
    res.render("404");
});

router.get("/*", (req, res) => {
    res.render("404");
});

module.exports = router;