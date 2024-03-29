
const NAME = document.getElementById("name");
const NAMEDISPLAY = document.getElementById("nameDisplay");
const WEIGHT = document.getElementById("weight");
const HEIGHT = document.getElementById("height");
const FINALRESULT = document.getElementById("finalResult");
const WORDOUTPUT = document.getElementById("wordOutput");


let weightValue = 50;

function increment() {
  weightValue += 1;
  WEIGHT.textContent = weightValue;
}

function decrement() {
  if (weightValue > 0) {
    weightValue -= 1;
    WEIGHT.textContent = weightValue;
  }
}

function nameFinder(){
  NAMEDISPLAY.textContent = "Welcome "+NAME.value+"!";
  document.getElementById("nameDisplay").style.fontSize = "30px";
}
function BMICalculator() {
  const weight = parseFloat(WEIGHT.textContent);
  const height = parseFloat(HEIGHT.value);

  if (isNaN(weight) || isNaN(height) || height === 0) {
    FINALRESULT.textContent = "Invalid input            Please check weight and height.";
    FINALRESULT.style.fontSize="20px";
    FINALRESULT.style.color="red";
    WORDOUTPUT.style.display="none";
 document.getElementById("circle").style.display="none";
  } else {
    const bmi = weight / ((height / 100) * (height / 100));
    FINALRESULT.textContent = bmi.toFixed(2);
    colorChanger();
  }
}

function firstClick(){
  document.getElementById("wrap-first").style.display = "none";
  document.getElementById("output").style.display = "none";
  document.getElementById("wrap").style.display = "block";
}
function secondClick(){
  document.getElementById("wrap-first").style.display = "none";
  document.getElementById("wrap").style.display = "none";
  document.getElementById("output").style.display = "block";
}
function thirdClick(){
  document.getElementById("output").style.display = "none";
  document.getElementById("wrap").style.display = "none";
  document.getElementById("wrap-first").style.display = "block";
}
function colorChanger(){
   document.getElementById("vsunweight").style.backgroundColor = "white";
   document.getElementById("sunweight").style.backgroundColor = "white";
   document.getElementById("unweight").style.backgroundColor = "white";
   document.getElementById("normal").style.backgroundColor = "white";
   document.getElementById("oweight").style.backgroundColor = "white";
   document.getElementById("ocone").style.backgroundColor = "white";
   document.getElementById("octwo").style.backgroundColor = "white";
   document.getElementById("octhree").style.backgroundColor = "white";
  if(+FINALRESULT.textContent<16){
    document.getElementById("vsunweight").style.backgroundColor = "#00A2FD";
    WORDOUTPUT.textContent = "You Have to Increase Your weight";
    WORDOUTPUT.style.color="red";
    FINALRESULT.style.color="red";
     document.getElementById("circle").style.display="block";
  }
  else if (+(FINALRESULT.textContent>16) && +(FINALRESULT.textContent<16.9)){
    document.getElementById("sunweight").style.backgroundColor = "#43D2FF";
    WORDOUTPUT.textContent = "You Have to Increase Your weight";
     WORDOUTPUT.style.color="red";
    FINALRESULT.style.color="red";
     document.getElementById("circle").style.display="block";
  }
  else if (+(FINALRESULT.textContent>17) && +(FINALRESULT.textContent<18.4)){
    document.getElementById("unweight").style.backgroundColor = "#84E5FA";
    WORDOUTPUT.textContent = "You Have to Increase Your weight";
     WORDOUTPUT.style.color="red";
    FINALRESULT.style.color="red";
     document.getElementById("circle").style.display="block";
  }
  else if (+(FINALRESULT.textContent>18.5) && +(FINALRESULT.textContent<24.9)){
    document.getElementById("normal").style.backgroundColor = "#4CC885";
    WORDOUTPUT.textContent = "You Have Normal body weight";
     WORDOUTPUT.style.color="#80E034";
    FINALRESULT.style.color="#80E034";
     document.getElementById("circle").style.display="block";
  }
  else if (+(FINALRESULT.textContent>25) && +(FINALRESULT.textContent<29.9)){
    document.getElementById("oweight").style.backgroundColor = "#EDE735";
    WORDOUTPUT.textContent = "You Have to lose your weight";
    WORDOUTPUT.style.color="red";
    FINALRESULT.style.color="red";
     document.getElementById("circle").style.display="block";
  }
  else if (+(FINALRESULT.textContent>30) && +(FINALRESULT.textContent<34.9)){
    document.getElementById("ocone").style.backgroundColor = "#FFA903";
    WORDOUTPUT.textContent = "You Have to lose your weight";
    WORDOUTPUT.style.color="red";
    FINALRESULT.style.color="red";
     document.getElementById("circle").style.display="block";
  }
  else if (+(FINALRESULT.textContent>35) && +(FINALRESULT.textContent<39.9)){
    document.getElementById("octwo").style.backgroundColor = "#FE5B00";
    WORDOUTPUT.textContent = "You Have to lose your weight";
    WORDOUTPUT.style.color="red";
    FINALRESULT.style.color="red";
     document.getElementById("circle").style.display="block";
  }
  else if (+(FINALRESULT.textContent>39.9)){
    document.getElementById("octhree").style.backgroundColor = "red";
    WORDOUTPUT.textContent = "You Have to lose your weight";
    WORDOUTPUT.style.color="red";
    FINALRESULT.style.color="red";
     document.getElementById("circle").style.display="block";
  }
}
 