const express = require("express")

const excuseManager = require("./excuseManager")

const router = express.Router()

/* GET home page. */
router.get("/", function (req, res) {
    const excuse = excuseManager.getExcuse()
    if (req.get("User-Agent") && req.get("User-Agent").startsWith("curl/")) { // Plain version for curl
        res.send(excuse + "\n")
        return;
    }
    res.render("index", {
        title: "Ausrede",
        excuse,
        tweetUrl: "https://twitter.com/intent/tweet?text=" + encodeURIComponent(excuse + "\n\t– Generiert von ausrede.birkenstab.de")
    })
})

module.exports = router
