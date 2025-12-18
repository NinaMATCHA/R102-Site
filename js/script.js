var style1 = document.getElementById('style1');// on recupere les variables grace a leurs id
var style2 = document.getElementById('style2');

//fonction qui permet de se souvenir de quel css choisir dans tt les pages
if (localStorage.getItem('theme') == '2') { //localStorage permet de garder la variable même au travers des autres pages
    style1.disabled = true;//disabled desactive un css
    style2.disabled = false;
} else { // la premiere instance sera vide donc on pourra juste mettre le style 1
    style1.disabled = false;
    style2.disabled = true;
}

//fonction qui permet de changer de style css grâce a un bouton
function updateBtn() { //if else permet de pouvoir changer de style en appuyant sur le meme bouton
    if (style1.disabled) { 
        style1.disabled = false;//pareil que plus haut mais avec le boutton
        style2.disabled = true;
        localStorage.setItem('theme', '1'); //on enregistre ici dans une variable theme si on veut le style 1 ou 2 dans la prochaine page
    }
    else {
        style1.disabled = true;
        style2.disabled = false;
        localStorage.setItem('theme', '2');//pareil que plus haut mais pour garder le style 2
    }
}
