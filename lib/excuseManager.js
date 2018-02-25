const logger = require("pino")()

const excuses = require("./excuses")

function parse() {
    calcCombinationsRandom(excuses)
    logger.info("Einzigartige Ausreden: " + excuses.combinations)
}

function calcCombinationsRandom(input) {
    if (typeof input === "string")
        return 1

    const combinations = input.map(calcCombinationsCombined)
        .reduce((acc, value) => acc + value, 0)
    input.combinations = combinations
    return combinations
}

function calcCombinationsCombined(input) {
    if (typeof input === "string")
        return 1

    const combinations = input.map(calcCombinationsRandom)
        .reduce((acc, value) => acc * value, 1)
    return input.combinations = combinations
}

function getRandom(input) {
    if (typeof input === "string")
        return input

    let randomNumber = Math.floor(Math.random() * input.combinations)

    for (let i = 0; i < input.length; i++) {
        randomNumber -= typeof input[i] === "string" ? 1 : input[i].combinations
        if (randomNumber < 0)
            return getCombined(input[i])
    }
    console.log(input)
    console.log(input.combinations)
    throw new Error("hä" + randomNumber)

}

function getCombined(input) {
    if (typeof input === "string")
        return input

    return input.map(getRandom)
        .join("")
}

function getExcuse() {
    return getRandom(excuses)
}

function test() {
    const map = new Map()
    for (let i = 0; i < 1000000; i++) {
        const excuse = getExcuse()
        if (!map.has(excuse))
            map.set(excuse, 1)
        else
            map.set(excuse, map.get(excuse) + 1)
    }

    console.log("Anfang")
    map.forEach((value, key) => console.log(new Array(Math.floor(value / 300)).fill("O").join("")))
    console.log("Combinations: " + excuses.combinations)
    console.log("Map size: " + map.size)
}

parse()
//test()

module.exports = {
    getExcuse
}