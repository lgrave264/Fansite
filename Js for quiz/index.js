var score = 0;
var output = "";

var Q1 = prompt("What is lemillions quirk?");
if(Q1 == "Permeation"){
  score++;
}

var Q2 = prompt("What is the counter part to one for all?");
if(Q2 == "All for one"){
  score++;
}

var Q3 = prompt("Who called Midoriya Deku first?");
if(Q3 == "Bakudo"){
  score++;
}

var Q4 = prompt("What is the abriviation for the super hero school?");
if(Q4 == "UA"){
  score++;
}

var Q5 = prompt("Who is Midoriya's favorite hero?");
if(Q5 == "All might"){
  score++;
}

if(score == 0){
    output = score + "/5 "
}
if(score > 0){
    output = score + "/5 "
}
if(score > 5){
    output = score + "/5 "
}
if(score > 8){
    output = score + "/5 ";
}


document.getElementById("score").textContent = output;