
//EX 1

var num1 = prompt("Digite o primeiro número");
var num2 = prompt("Digite o segundo número");

num1 = parseFloat(num1)
num2 = parseFloat(num2)


console.log("A soma é: " + num1 + num2);


//EX 2

var name = prompt("Digite seu nome");

console.log("Olá, " + name + "!");

// EX 3 - Calculadora

var real = parseFloat(prompt("Insira um valor que converterei para dólar"))

console.log("Real: " + real + " R$ " + "Dólar:" + real / 5.25 + "$")

// EX 4 - Ant Suc

var num = parseFloat(prompt("Insira um valor"));

console.log("Antecessor: " + (num-1) + " Sucessor: " + (num+1) )

// EX 5 - Terreno

var length = parseFloat(prompt("Qual a medida do terreno em metros? (Largura)"));
var width = parseFloat(prompt("Qual a medida do terreno em metros? (Comprimento)"));

console.log("Área do terreno: " + (length * width) + " m²");

// EX 6 - Gasolina

var distance = parseFloat(prompt("Distância percorrida:"))
var km = parseFloat(prompt("Quantos litros de gasolina foram gastos?"))

console.log(distance / km + " km/l")

// EX 7 - Boletim

var grade1 = parseFloat(prompt("Insira a primeira nota"));
var grade2 = parseFloat(prompt("Insira a segunda nota"));
var grade3 = parseFloat(prompt("Insira a terceira nota"));
var grade4 = parseFloat(prompt("Insira a quarta nota"))

console.log("Média final: " + ((grade1 + grade2 + grade3 + grade4) / 4))

//EX 8 - Conversor Fahrenheit para Celsius

var fahrenheit = parseFloat(prompt("Insira a temperatura em Fahrenheit"));

console.log("Temperatura em Celsius: " + ((fahrenheit - 32) * 5/9))
