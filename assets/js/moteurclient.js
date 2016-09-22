//  *** Pour la documentation complète voir LISEZ MOI.TXT ! Bonne lecture *** //

function menutypes() {
    var types = localStorage.getItem('Type');
    var type = JSON.parse(types);

    var flow = '';

    for (var i = 0; i < type.length; i++) {

        flow += "<option value=\"" + type[i] + "\">" + type[i] + "</option>";
    }
    document.querySelector('#type').innerHTML = flow;

}
menutypes();

// PART 1 Lecture du menu par type
function affichageParType(type) {
    var menu = localStorage.getItem('Menu');
    var menu = JSON.parse(menu);
    var flow = '';
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].type == type) {
            flow += "<tr id=\"data" + i + "\"><td>" + menu[i].name + "</td><td>" + menu[i].recipe.join(",") + "</td><td>" + menu[i].price + "€ </td><td> <button onclick=\"command(" + i + ")\"><i class=\"fa fa-plus\"></i></button></td></tr>";
        }
    }
    return flow;
}
// PART 2 Système d'affichage
function affichageMenu() {
    var e = document.querySelector("#type");
    var type = e.options[e.selectedIndex].value;
    document.querySelector('#listing').innerHTML = affichageParType(type);
}
affichageMenu();



// PART 3 Lancer la commande d'un produit 
function command(i) {
    var menu = localStorage.getItem('Menu');
    var menu = JSON.parse(menu);
    document.querySelector('.commande').innerHTML += "<tr id=\"dati" + i + "\"><td class=\"nameu\">" + menu[i].name + "</td><td>" + menu[i].recipe.join(",") + "</td><td > <span class=\"prix\">" + menu[i].price + "</span>€ </td><td><button onclick=\"annul(" + i + ")\"><i class=\"fa fa-times\"></i></button></td></tr>";
    total();
}


// Part 4 ajout de la commande
function commander(i) {
    var fait = " <a href=\"\"><div class=\"done\"><p>Commandé !</p></div></a>";
    var error = " <a href=\"\"><div class=\"error\"><p>Pas de nom !</p></div></a>";
    var nom = prompt('Entrez un nom pour la commande.');
    if (nom === null) {
        document.querySelector('#infobox').innerHTML += error;
    } else {
        var total = 0;
        var prix = document.querySelectorAll('.prix');
        var length = prix.length;
        for (i = 0; i < length; i++) {
            var data = prix[i].innerHTML;

            total += parseFloat(data);
        }
        document.querySelector('#total').innerHTML = total;

        var recette = document.querySelectorAll('.nameu');
        var noms = "";
        var length2 = recette.length;
        for (i = 0; i < length; i++) {
            var dati = recette[i].innerHTML;

            noms += "," + dati;
        }


        var commandes = localStorage.getItem('Commandes');
        commandes = JSON.parse(commandes);

        var content = {
            'nom': nom,
            'name': noms,
            'price': total

        }
        commandes.push(content);
        var commandesStringy = JSON.stringify(commandes);
        localStorage.setItem('Commandes', commandesStringy);
        document.querySelector('#infobox').innerHTML += fait;
        annul(i);
        affichageDesCommandes();

    }
}

function total() {
    var total = 0;
    var prix = document.querySelectorAll('.prix');
    var length = prix.length;
    for (i = 0; i < length; i++) {
        var data = prix[i].innerHTML;

        total += parseFloat(data);
    }
    document.querySelector('#total').innerHTML = total;


}
// PART 5 Annuler commande
function annul(i) {
    if (i === 'all') {
        document.querySelector('.commande').innerHTML = "";
    } else {
        document.querySelector('#dati' + i).innerHTML = "";
    }
    total();

}

