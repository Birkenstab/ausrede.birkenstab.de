const express = require("express")

const excuseManager = require("./excuseManager")

const router = express.Router()

/* GET home page. */
router.get("/", function (req, res) {
    res.render("index", {
        title: "Ausrede",
        excuse: excuseManager.getExcuse()
    })
})

module.exports = router
