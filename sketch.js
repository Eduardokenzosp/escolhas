let suaidade;
let aventura;
let plataforma;
let luta;
let titulo;
let corpo;
let jogos = {
  menor10: {
    luta: "Super Smash Bros",
    aventura: "minecraft",
    plataforma: "Super Mario Bros"  
  },
  entre10e14:{
    luta: "brawlhalla",
    aventura: "Ratahet Clank",
    plataforma: "Donkey Kong Returns"
  },
  entre14e16:{
    luta: "Street Fighter 5",
    aventura: " THe Last of US",
    plataforma: "Crash Bandicoot the triology"
},
  entre16e18: {
luta: "Injustice 2",
  aventura: "God Of War Ragnarok",
  plataforma: " Nightmares"
  },
  maior18: {
    luta: "Mortal kombat 1",
    aventura: "GTA V",
    plataforma: "Qualquer Mario ;-;"
  }
};

let button;

function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("qual a sua idade?").position(650,500).addClass("hidden");
  suaidade = createInput("").position(590,585).addClass("hidden");
  aventura = createCheckbox("Gosta do gênero aventura? 💀").position(100,600).addClass("hidden");
  luta = createCheckbox("Gosta do gênero luta? 😠 ").position(100,650).addClass("hidden");
  plataforma = createCheckbox("Gosta do gênero plataforma? 😎 ").position(100,700).addClass("hidden");
  
  titulo = "Sevillana"
  corpo = "Open Sans"
  button = createButton("Baitolar Decisão🤓").position(width/2,585);
  button.mousePressed(bota);
  button.addClass("botao");
  // desgraçaT_T
  
}
function bota(){
selectAll(".hidden").forEach((el)=>el.removeClass("hidden"));
  
}

function draw() {
  background("rgb(209,62,62)");
  fill("rgb(10,10,10)");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("melhor indicador de games 0-0",width/2, 20);
  textFont(corpo);
  
  let idade = parseInt(suaidade.value())
  let checkaventura = aventura.checked();
  let checkluta = luta.checked();
  let checkaplataforma = plataforma.checked();
  let jogo = "insira suas preferências";
 if (suaidade.value() !== "") {
  jogo = mostrajogo(idade,checkaventura,checkluta, checkplataforma);
}
fill("black");
textAlign(CENTER,CENTER);
textSize(40);
text(jogo,width/2,height/2);
  textFont(titulo);
}




function mostrajogo(idade,cheackaventura, checkluta, checkplataforma){
   if (isNaN(idade)){
     return "idade invàlida"
     }else
       if (idade < 0) {
         return "vaza"
       }else 
         if (idade > 120){ 
           return "vai procurar uma caixão"
   }
   
   if (idade >= 5 && idade < 10){
     if (checkaventura){
       return jogos["menor10"]["aventura"];  
     }
     if (checkluta){
       return jogos["menor10"]["checkluta"];  
     }
     if (checkplataforma){
       return jogos["menor10"]["plataforma"];  
     }
   }
   else
     if (idade >= 10 && idade < 14){
     if (checkaventura){
       return jogos["entre10e14"]["aventura"];  
     }
     if (checkluta){
       return jogos["entre10e14"]["checkluta"];  
     }
     if (checkplataforma){
       return jogos["entre10e14"]["plataforma"];  
     }
   }
  else
    if (idade >= 14 && idade < 16){
     if (checkaventura){
       return jogos["entre14e16"]["aventura"];  
     }
     if (checkluta){
       return jogos["entre14e16"]["checkluta"];  
     }
     if (checkplataforma){
       return jogos["entre14e16"]["plataforma"];  
     }
   }
  else
    if (idade >18){
     if (checkaventura){
       return jogos["maior18"]["aventura"];  
     }
     if (checkluta){
       return jogos["maior18"]["checkluta"];  
     }
     if (checkplataforma){
       return jogos["maior18"]["plataforma"];  
     }
   }
  
  
  
  
  
  
 }