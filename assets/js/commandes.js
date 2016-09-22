// Cette foconction contient le menu par défault
function commands() {
    var commandes = [{
        "nom": "Dupont Jean",
        "name": "Hawaïenne",
        "type": "Pizzas",
        "recipe": ["Double jambon", "double ananas", "sauce tomate", "mozzarella"],
        "price": 11.2
}];

    // Initialisation du menu dans le localstorage
    var commandesStringy = JSON.stringify(commandes);
    localStorage.setItem('Commandes', commandesStringy);


}

if (localStorage.getItem("Commandes") === null || localStorage.getItem("Commandes") === 0 || localStorage.getItem("Commandes") === "") {


    commands(); // au chargement de la page on verifie si il n'y a pas rien, si il n'y a rien on ajoute un menu de base et on affiche un msg 

}



function affichageDesCommandes() {
    var commandes = localStorage.getItem('Commandes');
    var commandes = JSON.parse(commandes);

    var flow = '';

    for (var i = 0; i < commandes.length; i++) {

        flow += "<article class=\"mini-post\"><header><h3>" + commandes[i].nom + "</h3><time class=\"published\"> Commandé: " + commandes[i].name + " <i> </i></time><a href=\"\" class=\"author\"> Total:" + commandes[i].price + " €</a></header></article>";
    }
    document.querySelector('#commandes').innerHTML = flow;

}
affichageDesCommandes();

function nommer() {
    var nom = document.querySelector('#resto').value;

    localStorage.setItem('Nom', nom);

}

function affichage_nom() {
    var nom = localStorage.getItem('Nom');
    var nom = JSON.parse(nom);
    document.querySelector('.restau').innerHTML = nom;
     document.querySelector('.restaurants').innerHTML = nom;
    document.querySelector('#nomaAfficher').innerHTML = '<input type="text" id="resto" value="' + nom + '" placeholder="Nom à afficher" />';

}
affichage_nom();