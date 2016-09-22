//  *** Pour la documentation complète voir LISEZ MOI.TXT ! Bonne lecture *** //


// PART 1 Vérification de l'existance de la sauvegarde 
if (localStorage.getItem("Menu") === null || localStorage.getItem("Menu") === 0 || localStorage.getItem("Menu") === "") {
    if (confirm('AUCUNE SAUVEGARDE. CHARGER LE MENU PAR DEFAULT ?')) {
        document.querySelector(".error").style.display = "block";

        document.onload = menu(); // au chargement de la page on verifie si il n'y a pas rien, si il n'y a rien on ajoute un menu de base et on affiche un msg 
    } else {
        document.querySelector('.error').innerHTML = "<p>Aucune sauvegarde chargée</p>";
        document.querySelector('.error').style.display = "block";
    }
}

// PART 2 Lecture du menu par type
function affichageParType(type) {
    var menu = localStorage.getItem('Menu');
    var menu = JSON.parse(menu);
    var flow = '';
    for (var i = 0; i < menu.length; i++) {
        if (menu[i].type == type) {
            flow += "<tr id=\"data" + i + "\"><td>" + menu[i].name + "</td><td>" + menu[i].recipe.join(",") + "</td><td>" + menu[i].price + "€ </td><td> <button onclick=\"supp(" + i + ")\"><i class=\"fa fa-trash\"></i></button> <button onclick=\"edit(" + i + ")\"><i class=\"fa fa-pencil\"></i></button></td></tr>";
        }
    }
    return flow;
}
// PART 3 Système d'affichage
function affichageMenu() {
    var e = document.querySelector("#type");
    var type = e.options[e.selectedIndex].value;
    document.querySelector('#listing').innerHTML = affichageParType(type);
}
affichageMenu();



// PART 4 Ajouter un produit
function ajout() {
    var fait = " <a href=\"\"><div class=\"done\"><p>Fait !</p></div></a>";
    var menuDeBase = localStorage.getItem('Menu');
    menuDeBase = JSON.parse(menuDeBase);
    var name = document.querySelector('#name').value;
    var recipe = document.querySelector('#recipe').value;
    var price = document.querySelector('#price').value;
    var e = document.querySelector("#type2");
    var type = e.options[e.selectedIndex].value;
    var content = {
        'name': name,
        'type': type,
        'recipe': recipe.split(","),
        'price': price
    };
    menuDeBase.push(content);
    var envoi = JSON.stringify(menuDeBase);
    localStorage.setItem('Menu', envoi);
    affichageMenu();
    document.querySelector('#infobox').innerHTML += fait;
}

// PART 5 Supprimer un produit
function supp(i) {
    var fait = " <a href=\"\"><div class=\"done\"><p>Fait !</p></div></a>";
    var Menu = JSON.parse(localStorage.getItem('Menu'));
    Menu.splice(i, 1);
    var envoi = JSON.stringify(Menu);
    localStorage.setItem('Menu', envoi);
    affichageMenu();
    document.querySelector('#infobox').innerHTML += fait;
}

// PART 6 Lancer l'edition d'un produit 
function edit(i) {
    var menu = localStorage.getItem('Menu');
    var menu = JSON.parse(menu);

    document.querySelector('#data' + i).innerHTML = "<tr id=\"data" + i + "\"><td>  <input type=\"text\" name=\"namen\" id=\"namen" + i + "\" value=\"" + menu[i].name + "\" /></td><td><input type=\"text\" name=\"recipen\" id=\"recipen" + i + "\" value=\"" + menu[i].recipe + "\" /></td><td><input type=\"text\" name=\"pricen\" id=\"pricen" + i + "\" value=\"" + menu[i].price + "\" /> </td><td><input onclick=\"modifier(" + i + ")\" id=\"submit\" type=\"submit\" value=\"Modifier\" /></td></tr>";
}

// PART 7 Faire l'edition du produit 
function modifier(i) {
    var fait = " <a href=\"\"><div class=\"done\"><p>Fait !</p></div></a>";
    var menuDeBase = localStorage.getItem('Menu');
    menuDeBase = JSON.parse(menuDeBase);
    var id1 = '#namen' + i;
    var id2 = '#recipen' + i;
    var id3 = '#pricen' + i;
    var name = document.querySelector(id1).value;
    var recipe = document.querySelector(id2).value;
    var price = document.querySelector(id3).value;
    menuDeBase[i].name = name;
    menuDeBase[i].recipe = recipe.split(",");
    menuDeBase[i].price = price;
    var envoi = JSON.stringify(menuDeBase);
    localStorage.setItem('Menu', envoi);
    affichageMenu();
    document.querySelector('#infobox').innerHTML += fait;
}

// PART 8 Fonction de reset du menu 
function vider() {
    var annul = " <a href=\"\"><div class=\"done\"><p>Annulé !</p></div></a>";

    if (confirm('SUPPRIMER LE MENU ?')) {
        localStorage.removeItem("Menu");
        location.reload();
    } else {
        document.querySelector('#infobox').innerHTML += annul;
    }
}





function delet(i) {
    var fait = " <a href=\"\"><div class=\"done\"><p>Fait !</p></div></a>";
    var com = JSON.parse(localStorage.getItem('Commandes'));
    com.splice(i, 1);
    var envoi = JSON.stringify(com);
    localStorage.setItem('Commandes', envoi);
    affichageDesCommandesAdmin();
    document.querySelector('#infobox').innerHTML += fait;
}

function showadd() {
    document.querySelector('#edit').style.display = "block";


}


// Plats
function types() {

    if (localStorage.getItem('Type') === null || localStorage.getItem('Type') === 0 || localStorage.getItem('Type') === "") {
        var baseplats = ['Pizzas', 'Pâtes'];
        var platsstrigy = JSON.stringify(baseplats);
        localStorage.setItem('Type', platsstrigy);
    } else {
        var types = localStorage.getItem('Type');
        var type = JSON.parse(types);

        var flow = '';

        for (var i = 0; i < type.length; i++) {

            flow += "<tr id=\"platslist" + i + "\"><td>" + type[i] + "  <button style=\"float: right\" onclick=\"suppa(" + i + ")\"><i class=\"fa fa-trash\"></i></button> <button style=\"float: right\" onclick=\"edita(" + i + ")\"><i class=\"fa fa-pencil\"></i></button></td>";
        }
        document.querySelector('#platslist').innerHTML = flow;

    }

}
types();

function edita(i) {
    var type = localStorage.getItem('Type');
    var types = JSON.parse(type);

    document.querySelector('#platslist' + i).innerHTML = " <input type=\"text\" name=\"recipen\" id=\"reci\" value=\"" + types[i] + "\"/><button onclick=\"suppa(" + i + ")\"><i class=\"fa fa-trash\"></i></button> <button onclick=\"editaer(" + i + ")\"><i class=\"fa fa-check\"></i></button> ";
}

function editaer(i) {
    var fait = " <a href=\"\"><div class=\"done\"><p>Fait !</p></div></a>";
    var menuDeBase = localStorage.getItem('Type');
    menuDeBase = JSON.parse(menuDeBase);
    var name = document.querySelector('#reci').value;
    menuDeBase[i] = name;
    var envoi = JSON.stringify(menuDeBase);
    localStorage.setItem('Type', envoi);
    types();
    document.querySelector('#infobox').innerHTML += fait;

}


function ajouta() {
    var fait = " <a href=\"\"><div class=\"done\"><p>Cliquez ici pour actualiser et voir les changements</p></div></a>";
    var menuDeBase = localStorage.getItem('Type');
    menuDeBase = JSON.parse(menuDeBase);
    var name = document.querySelector('#aditc').value;
    menuDeBase.push(name);
    var envoi = JSON.stringify(menuDeBase);
    localStorage.setItem('Type', envoi);
    
    types();
    
    document.querySelector('#infobox').innerHTML += fait;
}

function menutype() {
    var types = localStorage.getItem('Type');
    var type = JSON.parse(types);
    var flow = '';

    for (var i = 0; i < type.length; i++) {
        console.log(type)
        flow += "<option value=\"" + type[i] + "\">" + type[i] + "</option>";
    }

    document.querySelector('#type').innerHTML = flow;
    document.querySelector('#type2').innerHTML = flow;
}
menutype();

function suppa(i) {
    var fait = " <a href=\"\"><div class=\"done\"><p>Cliquez ici pour actualiser et voir les changements</p></div></a>";
    var Menu = JSON.parse(localStorage.getItem('Type'));
    Menu.splice(i, 1);
    var envoi = JSON.stringify(Menu);
    localStorage.setItem('Type', envoi);
    document.querySelector('#infobox').innerHTML += fait;
    types();
}
// PART 9 Commandes admin
function affichageDesCommandesAdmin() {
    var commandes = localStorage.getItem('Commandes');
    var commandes = JSON.parse(commandes);

    var flow = '';

    for (var i = 0; i < commandes.length; i++) {

        flow += "<a href=\"\" onclick=\"delet(" + i + ")\"><article class=\"mini-post delete\"><header><h3>" + commandes[i].nom + "</h3><time class=\"published\"> Commandé: " + commandes[i].name + " <i> </i></time><a href=\"\" class=\"author\"> Total:" + commandes[i].price + " €</a></header></article></a>";
    }
    document.querySelector('#commandes').innerHTML = flow;

}
affichageDesCommandesAdmin();