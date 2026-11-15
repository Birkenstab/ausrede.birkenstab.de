const express = require("express")
const path = require("path")
const logger = require("pino")()
const helmet = require("helmet")
const pinoHttp = require("pino-http")({
    logger
})

const index = require("./lib/index")
const app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "hbs")

app.disable("x-powered-by")

app.use(pinoHttp)
app.use(helmet())
app.use(express.static(path.join(__dirname, "public")))

app.use("/", index)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    const err = new Error("Not Found")
    err.status = 404
    next(err)
})

// error handler
app.use(function (err, req, res, next) {
    const isDevelopment = req.app.get("env") === "development"
    const status = err.status || 500

    if (status >= 500)
        req.log.error(err)

    // set locals, only providing error details in development
    res.locals.message = status >= 500 && !isDevelopment ? "Internal Server Error" : err.message
    res.locals.error = isDevelopment ? err : {}

    // render the error page
    res.status(status)
    res.render("error")
})

module.exports = app
