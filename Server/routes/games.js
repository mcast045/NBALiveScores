const express = require('express');
const router = express.Router();
const fs = require('fs')
const path = require('path')

router.get('/live', (req, res, next) => {
    fs.readFile(path.join(__dirname, '../data/apinba.txt'), (err, data) => {
        if (err) console.log(err)
        else {
            const gamesArr = []
            const readData = JSON.parse(data)
            let games = readData.api.games
            for (let i = 0; i < games.length; i++) {
                gamesArr.push(games[i])
            }
            return res.json(gamesArr)
        }
    })
})

router.get('/scheduale', (req, res, next) => {
    fs.readFile(path.join(__dirname, '../data/scheduale.txt'), (err, data) => {
        if (err) console.log(err)
        else {
            const gamesArr = []
            const readData = JSON.parse(data)
            let games = readData.api.games
            for (let i = 0; i < games.length; i++) {
                gamesArr.push(games[i])
            }
            return res.json(gamesArr)
        }
    })
})

module.exports = router;