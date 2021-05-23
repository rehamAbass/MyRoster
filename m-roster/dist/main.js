const renderer = new Renderer()
const inputElement = $("#searchInput")
const idcardsElement = $(".idcards")

const playersManager = new PlayersManager()


//===========================================================
/**
 * event listener for the get roster button 
 * it returns a team of given name input
 */
$("#rosterBtn").on("click",function(){
    playersManager.getPlayers()
    
})


//===========================================================
/**
 * event listener for the get dreamteam button
 * it gets the dreamteam to the client
 */

$("#dreamTeamBtn").on("click",function(){
    playersManager.getDreamTeam()
})

//===========================================================
/**
 * event listener for the players cards 
 * it makes sure to add the player to our dreamteam
 */
$("body").on("click",".card",function(){
    playersManager.addPlayertoDreamTeam()
})
