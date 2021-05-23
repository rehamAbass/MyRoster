//express module
const express = require('express')
//path
const path = require('path')
var request = require('request');
//path
const api = require('./server/routes/api')

//======================================================================
//API for players
const apiURL = "http://data.nba.net/10s/prod/v1/2018/players.json"

//obj of ids
teamToIDs = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

//player base init
global.playerBase;
request(apiURL, function (error, response, body) {
    playerBase = JSON.parse(body).league.standard
});

global.dreamTeam = []


const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.json())
app.use(express.urlencoded({extended:false}))



app.use('/',api)


//port listening on
const port = 3001
app.listen(port, function () {
    console.log("server is listening on port " + port)
})

