// Ex 1 - Par ou ímpar

var numero = parseFloat(prompt("Escolha um número"));

if (numero % 2 === 0) {
  console.log(`${numero} é par.`);
} else {
  console.log(`${numero} é ímpar.`);
}

// Ex 2 - Qual é maior

var num1 = parseFloat(prompt("Digite o primeiro número"));
var num2 = parseFloat(prompt("Digite o segundo número"));

if (num1 > num2) {
  console.log(`${num1} é maior.`);
} else if (num1 < num2) {
  console.log(`${num2} é maior.`);
} else {
  console.log(`Os números são iguais.`);
}

// Ex 3 - Fila preferencial pela idade

let pref = false;

while (!pref) {
  var age = parseInt(prompt("Digite sua idade"));

  if (age >= 60) {
    pref = true;
    console.log("Você está na fila preferencial.");
    break;
  }

  var pcd = prompt("Você é PCD? S/N");
  if (pcd.toLowerCase() === "s") {
    pref = true;
    console.log("Você está na fila preferencial.");
    break;
  }

  var pregnant = prompt("Grávida? S/N");
  if (pregnant.toLowerCase() === "s") {
    pref = true;
    console.log("Você está na fila preferencial.");
    break;
  }

  alert("Você está na fila normal.");
  break;
}

// Ex 4 - 16 ou 18

var age = parseInt(prompt("Digite sua idade"));

if (age < 16) {
  console.log("Você nao pode entrar");
} else if (age >= 16 && age < 18) {
  console.log("Você pode entrar acompanhado dos pais.");
} else {
  console.log("Você pode entrar");
}

// Ex 5 - Login

var user = prompt("Digite seu nome de usuário:");
var pass = prompt("Digite sua senha:");

if (user === "admin" && pass === "123") {
  console.log("Login efetuado com sucesso!");
} else {
  console.log("Usuário ou senha inválidos.");
}

// Ex 6 - Boletim

var approved = false;

while (!approved) {
  var grade1 = parseFloat(prompt("Digite a primeira nota"));
  var grade2 = parseFloat(prompt("Digite a segunda nota"));

  if ((grade1 + grade2) / 2 >= 6) {
    console.log("Parabéns! Você foi aprovado!");
    approved = true;
    break;
  }

  var graderec = parseFloat(prompt("Digite a nota da Recuperação"));

  if (grade1 > grade2) {
    if ((grade1 + graderec) / 2 >= 6) {
      console.log("Parabéns! Você foi aprovado na Recuperação!");
      approved = true;
      break;
    } else {
      console.log("Você foi reprovado.");
    }
  } else if (grade2 > grade1) {
    if ((grade2 + graderec) / 2 >= 6) {
      console.log("Parabéns! Você foi aprovado na Recuperação!");
      approved = true;
      break;
    } else {
      console.log("Você foi reprovado.");
    }
  } else {
    console.log("Você foi reprovado.");
  }
}

// Ex 7 - Divisibilidade 

var num = parseFloat(prompt("Digite um número"));
var div = parseFloat(prompt("Digite o divisor"))

if (num/div === 0) {
    console.log("O número é divisível por " + div);
} else {
    console.log("O número não é divisível por " + div);
}

//Ex 8

let score = 0; 
let wrongAnswers = 0; 
const maxWrongAnswers = 3;

const questions = [
    {
      question: "Qual é o elemento químico com símbolo Au?",
      options: ["A) Prata", "B) Ouro", "C) Cobre", "D) Alumínio"],
      answer: "B"
    },
    {
      question: "Em que ano foi assinada a Declaração de Independência dos Estados Unidos?",
      options: ["A) 1776", "B) 1783", "C) 1801", "D) 1754"],
      answer: "A"
    },
    {
      question: "Qual é a capital da Islândia?",
      options: ["A) Oslo", "B) Helsinque", "C) Reykjavik", "D) Estocolmo"],
      answer: "C"
    },
    {
      question: "Quem pintou 'A Última Ceia'?",
      options: ["A) Michelangelo", "B) Leonardo da Vinci", "C) Rafael", "D) Van Gogh"],
      answer: "B"
    },
    {
      question: "Qual é o maior deserto do mundo?",
      options: ["A) Saara", "B) Gobi", "C) Antártico", "D) Kalahari"],
      answer: "C"
    }
  ];

for (let i = 0; i < questions.length; i++) {
  const q = questions[i];
  
  const userAnswer = prompt(`${q.question}\n${q.options.join("\n")}`);
  
  
  if (userAnswer.toUpperCase() === q.answer) {
    score++; 
    alert("Resposta correta!");
  } else {
    wrongAnswers++; 
    alert(`Resposta incorreta! A resposta correta era: ${q.answer}.`);
  }

  
  if (wrongAnswers >= maxWrongAnswers) {
    alert("Você errou 3 vezes. Fim de jogo!");
    break; 
  }
}
if (wrongAnswers < maxWrongAnswers) {
  alert(`Você respondeu ${score} de 5 perguntas corretamente.`);
}