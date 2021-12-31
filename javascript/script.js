function mouse_on_button(element) {
    element.style.height = '220px';
    element.style.padding = '45px';
}
function mouse_leave_button(element) {
    element.style.height = '200px';
    element.style.padding = '60px';
}

// reponse question

let levote = document.getElementById("zonevote");

zonevote.addEventListener("submit", function(e){
    
    let input = document.getElementById("levote");
    if (input.value.trim() == ""){
        let monErreur = document.getElementById("outputvote");
        monErreur.innerHTML = "Erreur";
        monErreur.style.color = "green";
        e.preventDefault();
    } else if (input.value.trim() == "oui"){

    }
    
}



