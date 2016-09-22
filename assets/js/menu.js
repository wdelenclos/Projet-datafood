// Cette foconction contient le menu par défault
function menu() {
    var menuDeBase = [
        {
            'name': 'Hawaïenne',
            'type': 'Pizzas',
            'recipe': ['Double jambon', 'double ananas', 'sauce tomate', 'mozzarella'],
            'price': 11.20
                },
        {
            'name': 'Régina',
            'type': 'Pizzas',
            'recipe': ['Triple merguez', 'champignons', ' sauce tomate', 'mozzarella'],
            'price': 11.20

                },
        {
            'name': 'Texane',
            'type': 'Pizzas',
            'recipe': ['Bœuf', 'jambon', 'champignons', 'oignons', 'sauce tomate', 'mozzarella'],
            'price': 9.50

                },
        {
            'name': 'Margherita',
            'type': 'Pizzas',
            'recipe': ['Oignons', 'tomate', 'mozzarella', 'jambon', 'champignons'],
            'price': 6.50

                },
        {
            'name': 'Veggie',
            'type': 'Pizzas',
            'recipe': ['Tomates', 'poivrons', 'oignons', 'mozzarella', 'basilic'],
            'price': 6.50

                },


        {
            'name': 'Rigatoni all\'Amatriciana',
            'type': 'Pâtes',
            'recipe': ['tomate', 'boeuf', 'jambon', 'frites'],
            'price': 8.50
                },
        {
            'name': 'Rigatoni alla Bolognese',
            'type': 'Pâtes',
            'recipe': ['tomate', 'mozzarella', 'jambon', 'champignons'],
            'price': 6.50
                },
        {
            'name': 'Rigatoni alla Carbonara',
            'type': 'Pâtes',
            'recipe': ['Pasta', 'Sauce carbo', 'jambon', 'epices'],
            'price': 7.50
                },
        {
            'name': 'Fusilli Quattro Formaggi',
            'type': 'Pâtes',
            'recipe': ['Pasta', 'fromage', 'jambon', 'champignons'],
            'price': 7.50
                },
        {
            'name': 'Cappeletti alla Roma',
            'type': 'Pâtes',
            'recipe': ['Pasta', 'mozzarella', 'thileuls', 'champignons'],
            'price': 9.50
                },
        {
            'name': 'Lasagne alla Bolognese',
            'type': 'Pâtes',
            'recipe': ['tomate', 'boeuf', 'poulet', 'champignons'],
            'price': 8.50
                },
        {
            'name': 'Fusilli al Salmone',
            'type': 'Pâtes',
            'recipe': ['tomate', 'saumon', 'epices', 'moules'],
            'price': 8.50
                }
            ];

    // Initialisation du menu dans le localstorage
    var menuStringy = JSON.stringify(menuDeBase);
    localStorage.setItem('Menu', menuStringy);


}

function nommer() {
    
    var resto = document.querySelector('#resto').value;
    var restStringy = JSON.stringify(resto);
    localStorage.setItem('Nom', restStringy);
}

if(localStorage.getItem('Nom') == null || localStorage.getItem('Nom') == 0 ){
  
}
else{
   function  go(){
         var nomResto = JSON.parse(localStorage.getItem('Nom'));
       document.querySelectorAll('.entreprise').innerHTML = nomResto;
     }
go();
}
