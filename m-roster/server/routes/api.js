const express = require('express')
const router = express.Router()

//======================================================================
//filter active players by id of a team
const filterActiveByID = function (id) {
    return playerBase.filter(player => player.teamId == id).filter(player => player.isActive == true)
}

//======================================================================
//teamsfiltered
router.get('/teams/:teamName', function (req, res) {
    const teamName = req.params.teamName
    console.log(teamName)
    res.send(filterActiveByID(teamToIDs[teamName]))
})

//======================================================================
router.put('/teams', function (req, res) {
    const team = req.body
    teamToIDs[req.body.teamName] = req.body.teamId
    console.log(teamToIDs)
    res.end()
})

//======================================================================
router.get('/dreamTeam', function (req, res) {
    res.send(dreamTeam)
})

//======================================================================
router.post('/roster', function (req, res) {
    const personId = req.body.personId
    console.log("in roster")
    if (dreamTeam.length > 4) { res.send("Cannot add more!") }
    else {
        if (dreamTeam.find(player => player.personId == personId) == undefined) {
            dreamTeam.push(playerBase.find(player => player.personId == personId))
            res.send("added!")
        }
        else { res.send("already exsists") }
    }

})

//======================================================================
router.delete('/roster/:personId', function (req, res) {
    const personId = req.query.
    p0e012
    +rsonId
    if(dreamTeam.find(person => person.personId == personId)==undefined){
        res.send("cant delete whats not there")
    }
    else{
        dreamTeam = dreamTeam.filter(person => person.personId != personId)
        res.send("deleted")
    }
})

//======================================================================

module.exports = router