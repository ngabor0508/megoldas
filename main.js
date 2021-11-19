function szovegModositas(){

    let szoveg = document.getElementById("szoveg").value;

    document.getElementById("eloNezet").innerHTML = szoveg;

    if(szoveg == " " || szoveg == ""){
        
        document.getElementById("mintaSzoveg").style.color = "red";

        document.getElementById("mintaSzoveg").textContent = "A mintaszöveg nem lehet üres!";

    }
    else{

        document.getElementById("mintaSzoveg").style.color = "black";

        document.getElementById("mintaSzoveg").textContent = "Mintaszöveg:";

    }
}


function betuMeretModositas(){

    let betuMeret = document.getElementById("betuMeret").value;

    document.getElementById("eloNezet").style.fontSize = betuMeret+"px";

}


function szinModositas(){

    let szovegSzin = document.getElementById("szovegSzin").value;

    document.getElementById("eloNezet").style.color = szovegSzin;

}


function hatterSzinModositas(){

    let hatterSzin = document.getElementById("hatterSzin").value;

    document.getElementById("eloNezet").style.background = hatterSzin;

    
}


var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

    if (ev.target.tagName === 'LI') {

        ev.target.classList.toggle('checked');

    }

}, false);

function felVeszGomb() {

    var li = document.createElement("li");

    var berIrtSzoveg = document.getElementById("szoveg").value;

    var t = document.createTextNode(berIrtSzoveg);

    var szinSzoveg = document.getElementById("szovegSzin").value;

    var meretBetu = document.getElementById("betuMeret").value;

    var hatterSzoveg = document.getElementById("hatterSzin").value;


    li.appendChild(t);

    if (berIrtSzoveg === '') {

    alert("Írj be valamit!");

    } else {

    document.getElementById("lista").appendChild(li);
    document.getElementById("lista").appendChild(li).style.color = szinSzoveg;
    document.getElementById("lista").appendChild(li).style.background = hatterSzoveg;
    document.getElementById("lista").appendChild(li).style.fontSize = meretBetu + "px";
    }
}