/**
 * a function that can communcate with the server and get players / dreamteams and others
 * @returns returns a player managing object that can communcate with the server 
 */
const PlayersManager = function () {
    //=========================================================================
    /**
     * gets players from the server
     */
    const getPlayers = function () {
        $.ajax({
            method: "GET",
            url: "http://localhost:3001/teams/" + inputElement.val(),
            success: function (response) {
                idcardsElement.empty()
                renderer.renderPlayers(response)
            },
        })

    }

    //=========================================================================
    /**
     * gets the dreamteam from the server
     */
    const getDreamTeam = function () {
        $.ajax({
            method: "get",
            url: "http://localhost:3001/dreamTeam/",
            success: function (response) {
                console.log(response)
                idcardsElement.empty()
                renderer.renderPlayers(response)
            },
        })

    }
    //=========================================================================
    /**
     * adds players to the dreamteam
     */
    const addPlayertoDreamTeam = function () {
        console.log("worked")
        //cause of bubbling we use event.target to go to the ones inner of card and be able to find it.
        personId = $(event.target).closest('div').attr('id')
        console.log(personId)
        $.ajax({
            method: "POST",
            url: "http://localhost:3001/roster/",
            data: { "personId": personId },
            success: function (response) {
                console.log(response)
                alert(response)
            },
        })

    }
    return {
        getPlayers: getPlayers,
        getDreamTeam: getDreamTeam,
        addPlayertoDreamTeam: addPlayertoDreamTeam
    }
}