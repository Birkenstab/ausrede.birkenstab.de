const express = require("express")

const excuseManager = require("./excuseManager")

const router = express.Router()

/* GET home page. */
router.get("/", function (req, res) {
    const excuse = excuseManager.getExcuse()
    if (req.get("User-Agent") && req.get("User-Agent").startsWith("curl/")) { // Plain version for curl
        res.type("text/plain").send(excuse + "\n")
        return;
    }
    const shareText = encodeURIComponent(excuse + "\n\t– Generiert von ausrede.brk.st")
    res.render("index", {
        title: "Ausrede",
        excuse,
        blueskyUrl: "https://bsky.app/intent/compose?text=" + shareText,
        mastodonUrl: "https://share.joinmastodon.org/#text=" + shareText
    })
})

router.get("/api/get-excuse", function (req, res) {
    const excuse = excuseManager.getExcuse()
    res.send({
        excuse
    })
})

module.exports = router
