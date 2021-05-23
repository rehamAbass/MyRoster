//Renderer
/**
 * renderer is incharge of renderering the players onto the screen
 */
const Renderer = function(){
    /**
     * this function renders the players onto our html
     * @param {players are the group of players that been filtered and needs to be rendered} players 
     */
    const renderPlayers = function(players){
        console.log(players[0])
        var source = $('#player-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template({players:players});
        idcardsElement.append(newHTML);
        
    }


    return {
        renderPlayers:renderPlayers
       
    }
    
}