document.addEventListener("DOMContentLoaded", onKirjautunut);

function onKirjautunut(){
    let kirjautunut = "kyllä";
    if(kirjautunut == "kyllä"){
        document.getElementById('tervetulo_teksti').textContent += ' Otto!';
    }
}
