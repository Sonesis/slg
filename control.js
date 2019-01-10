function generateLinks(){
    var result = document.getElementById("results");
    var link = document.getElementById("link").value;
    var episodes = document.getElementById("amount").value;

    var endHTML = "<h1>Episodes Link</h1>"

    if(link != ""){
        var match = /S\d+/.exec(link);
        var episodesMatch = /E\d+/.exec(link);

        if(match != null && match.length != 0 
            && episodesMatch != null && episodesMatch.length != 0){
            var season = parseInt(match[0].replace("S", ""));
            var count = parseInt(episodesMatch[0].replace("E", ""));

            endHTML = "<ul class=\"list-group\">";

            for(var i = count; i <= parseInt(episodes); i++){
                if(i < 10){
                    endHTML += "<li class=\"list-group-item\">"+"Episode "+ i;
                    endHTML += "<a class=\"ml-5 btn btn-primary\" target=\"_blank\" href=\"";
                    endHTML += link.replace(/E\d+/, "E0"+i);
                    endHTML += "\" type=\"application/octet-stream\" download>Download</a></li>";
                } else {
                    endHTML += link.replace(/E\d+/, "E"+i);
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
