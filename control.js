function generateLinks(){
    //get the id of the result section
    var result = document.getElementById("results");
    //get the link the user has pasted
    var link = document.getElementById("link").value;
    //get the max amount of episodes he/she wants
    var howmanyepisodes = document.getElementById("amount").value;

    var endHTML = "<h1>Episodes Link</h1>"

    if(link != ""){
        //get current season
        var match = /S\d+/.exec(link);
        //get current episode
        var episodesMatch = /E\d+/.exec(link);

        if(match != null && match.length != 0 
           && episodesMatch != null && episodesMatch.length != 0 
           && parseInt(howmanyepisodes) > 0){
            
            var season = parseInt(match[0].replace("S", ""));
            var currentEpisode = parseInt(episodesMatch[0].replace("E", ""));

            endHTML = "<ul class=\"list-group\">";

            for(var i = currentEpisode; i <= parseInt(howmanyepisodes); i++){
                if(i < 10){
                    //add the result
                    endHTML += "<li class=\"list-group-item\">"+"Episode "+ i;
                    endHTML += "<a class=\"ml-5 btn btn-primary\" href=\"";
                    endHTML += link.replace(/E\d+/, "E0"+i);
                    endHTML += "\" download=\""+"Episode "+ i+">Download</a></li>";
                } else {
                    endHTML += "<li class=\"list-group-item\">"+"Episode "+ i;
                    endHTML += "<a class=\"ml-5 btn btn-primary\" href=\"";
                    endHTML += link.replace(/E\d+/, "E"+i);
                    endHTML += "\" download=\""+"Episode "+ i+">Download</a></li>";
                }
            }
            endHTML += "</ul>";
        } else {
            endHTML = "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">"
            +"<strong>No episodes downloads available or the link you copied isn't well-formed</strong>"
            +"<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">"
            +"<span aria-hidden=\"true\"></span>"
            +"</button>"
            +"</div>";
        }
    } else {
        endHTML = "<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">"
        +"<strong>Please paste a link above to generate series of it</strong>"
        +"<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">"
        +"<span aria-hidden=\"true\"></span>"
        +"</button>"
        +"</div>";
    }
    

    result.innerHTML = endHTML;
}
