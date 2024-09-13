/*
Apresente o Menu de Pizzas:
1 -> Mussarela -> R$ 20,00
2 -> Calabresa -> R$ 25,00
3 -> Marguerita -> R$ 23,00
4 -> 4 Queijos -> R$ 29,99
5 -> Baiana -> 22,50

Apresente o Menu de Bebidas:
1 -> Refrigerante Lata -> R$ 5,00
2 -> Refrigerante 2L -> R$ 10,00
3 -> Agua -> R$ 3,50
4 -> Suco -> R$ 7,50

Solicite ao usuário qual Pizza e quantidade que deseja comprar, qual refrigerante e quantidade, ao final apresente o total a pagar.
*/

var menuPizza = "==== ESCOLHA A PIZZA ====\n";
menuPizza += "1 | Mussarela  | R$ 20,00 \n";
menuPizza += "2 |Calabresa   | R$ 25,00 \n";
menuPizza += "3 | Marguerita | R$ 23,00\n";
menuPizza += "4 | 4 Queijos  | R$ 29,99\n";
menuPizza += "5 | Baiana     | 22,50 \n";
menuPizza += "\n Digite o CÒDIGO do lanche escolhido: "

var numeroPizza = parent(prompt(menuPizza));

var quantidade = parseInt(prompt("Quantos pizzas deseja pedir? "));

var totalPizza = 0;

var menuBebida = "==== ESCOLHA A BEBIDA ====\n";
menuBebida += "1 |Refrigerante Lata| R$ 5,00\n";
menuBebida += "2 |Refrigerante 2L  | R$ 10,00\n";
menuBebida += "3 |Agua             | R$ 3,50\n";
menuBebida += "4 |Suco             | R$  7,50\n";
menuBebida += "\n Digite o CÒDIGO da bebida escolhido: "

var numeroBebida = parent(prompt(menuBebida));

var quantidade = parseInt(prompt("Quantos bebidas deseja pedir? "));

var totalBebida = 0;

if(numeroPizza == 1) {
    valorPizza = quantidade * 20.00;
}else if (numeroPizza == 2){
    valorPizza = quantidade * 25.00;
}else if (numeroBebida == 3){
    valorPizza = quantidade * 23.00;
}else if (numeroPizza == 4){
    valorPizza = quantidade * 29,99;
}else if (numeroPizza == 5){
    valorPizza = quantidade * 22,55;
}else{ 
    console.log("Código da pizza inválido!! ")
}

if(numeroBebida == 1) {
     = quantidade * 5.00;
}else if (numeroBebida == 2){
    valorTotal = quantidade * 10.00;
}else if (numeroBebida == 3){
    valorTotal = quantidade * 3,50;
}else if (numeroBebida == 4){
    valorTotal = quantidade * 7,50;
}else{ 
    console.log("Código de bebida inválido!! ")
}