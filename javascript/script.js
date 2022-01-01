function mouse_on_button(element) {
    element.style.height = '220px';
    element.style.padding = '45px';
}
function mouse_leave_button(element) {
    element.style.height = '200px';
    element.style.padding = '60px';
}

function vote (){
    var input = document.querySelector('#inputvote').value;
    if (input == 'oui') {
        document.body.style.backgroundColor = 'rgb(0, 150, 0)';
        var output = document.querySelector('#outputvote').textContent = '   ===>  Bonne réponse  <===';
        var output = document.querySelector('#outputvote').style.color = 'rgb(0, 255, 0)';
    } else if (input == 'non') {
    document.body.style.backgroundColor = 'rgb(200, 0, 0)'
        var output = document.querySelector('#outputvote').textContent = '   ===>  Mauvaise réponse  <===';
        var output = document.querySelector('#outputvote').style.color = 'rgb(255, 0, 0)';
    } else if (input == '') {
    document.body.style.backgroundColor = 'rgb(0, 0, 255)'
        var output = document.querySelector('#outputvote').textContent = '   ===>  Veuillez écrire votre réponse  <===';
        var output = document.querySelector('#outputvote').style.color = 'rgb(0, 0, 0)';
    } else {
    document.body.style.backgroundColor = 'rgb(0, 0, 255)'
        var output = document.querySelector('#outputvote').textContent = '   ===>  Cette réponse ne peut pas être acceptée  <===';
        var output = document.querySelector('#outputvote').style.color = 'rgb(0, 0, 0)';
    }
}

function modeSombre(){
    var color = document.body.style.backgroundColor;
    if (color = 'rgb(153, 153, 153)') {
        document.body.style.backgroundColor = 'rgb(20, 20, 20)'
        var output = document.querySelector('#couleurBan').style.backgroundColor = 'rgb(100, 100, 100)';
        var output = document.querySelector('#basPage').style.backgroundColor = 'rgb(100, 100, 100)';
        var output = document.querySelector('#ligne').style.backgroundColor = 'rgb(100, 100, 100)';
        var output = document.querySelector('#pteban').style.backgroundColor = 'rgb(0, 0, 80)';
        var output = document.querySelector('#pteban2').style.backgroundColor = 'rgb(0, 0, 80)';
        var output = document.querySelector('#pteban3').style.backgroundColor = 'rgb(0, 0, 80)';
        var output = document.querySelector('#pteban4').style.backgroundColor = 'rgb(0, 0, 80)'
        var output = document.querySelector('#pteban5').style.backgroundColor = 'rgb(0, 0, 80)';
        // var output = document.querySelector('#ban').style.background = 
    }
   
}
function modeClair(){
    var color = document.body.style.backgroundColor;
    if (color = 'rgb(0, 0, 0)') {
        document.body.style.backgroundColor = 'rgb(153, 153, 153)'
        var output = document.querySelector('#couleurBan').style.backgroundColor = 'rgb(0, 170, 145)';
        var output = document.querySelector('#basPage').style.backgroundColor = 'rgb(0, 170, 145)';
        var output = document.querySelector('#ligne').style.backgroundColor = 'rgb(0, 170, 145)';
        var output = document.querySelector('#pteban').style.backgroundColor = 'rgb(10, 0, 130)';
        var output = document.querySelector('#pteban2').style.backgroundColor = 'rgb(10, 0, 130)';
        var output = document.querySelector('#pteban3').style.backgroundColor = 'rgb(10, 0, 130)';
        var output = document.querySelector('#pteban4').style.backgroundColor = 'rgb(10, 0, 130)'
        var output = document.querySelector('#pteban5').style.backgroundColor = 'rgb(10, 0, 130)';
    }
}