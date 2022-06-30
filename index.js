var randomNumber1 = Math.floor(Math.random() * 5) + 1;  //Creates random number from 1 to 5
var randomImg1 = "option" + randomNumber1 + ".png";    //select images from option1 - option5
var randomImgSrc1 = "images/" + randomImg1;           //concat path for images
var image1 = document.querySelectorAll("img")[0];    //select img to be changed from array
image1.setAttribute("src", randomImgSrc1)           //set the new img to img source


var randomNumber2 = Math.floor(Math.random() * 5) + 1;
var randomImg2 = "option" + randomNumber2 + ".png";
var randomImgSrc2 = "images/" + randomImg2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImgSrc2);


console.log(randomNumber1);
console.log(randomNumber2);
if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "BAZINGA";
}else if(randomNumber1 === 1){
    if (randomNumber2 === 3 ){
        document.querySelector("h1").innerHTML = "Sheldon Wins";
        console.log("Condition 1.1");
    }else if (randomNumber2 === 4 ){
        document.querySelector("h1").innerHTML = "Sheldon Wins";
        console.log("Condition 1.2");
    }
    else{
        document.querySelector("h1").innerHTML = "Leonard Wins";
        console.log("Condition 1.3");
    }
}else if(randomNumber1 === 2){
    if(randomNumber2 === 1){
        document.querySelector("h1").innerHTML = "Sheldon Wins!";
        console.log("Condition 2.1");
    }else if(randomNumber2 === 5){
        document.querySelector("h1").innerHTML = "Sheldon Wins!";
        console.log("Condition 2.2");
    }
    else{
        document.querySelector("h1").innerHTML = "Leonard Wins";
        console.log("Condition 2.3");
    }
}else if(randomNumber1 === 3){
    if (randomNumber2 === 2){
        document.querySelector("h1").innerHTML = "Sheldon Wins!";
        console.log("Condition 3.1");
    }else if (randomNumber2 === 4){
        document.querySelector("h1").innerHTML = "Sheldon Wins!";
        console.log("Condition 3.2");
    }
    else{
        document.querySelector("h1").innerHTML = "Leonard Wins";
        console.log("Condition 3.3");
    }
}else if(randomNumber1 === 4){
    if(randomNumber2 === 2){
        document.querySelector("h1").innerHTML = "Sheldon Wins!";
        console.log("Condition 4.1");
    }else if(randomNumber2 === 5){
        document.querySelector("h1").innerHTML = "Sheldon Wins!";
        console.log("Condition 4.2");
    }
    else{
        document.querySelector("h1").innerHTML = "Leonard Wins";
        console.log("Condition 4.3");
    }
}else if(randomNumber1 === 5){ 
    if (randomNumber2 === 1){
        document.querySelector("h1").innerHTML = "Sheldon Wins";
        console.log("Condition 5.1");
    }else if (randomNumber2 === 3){
        document.querySelector("h1").innerHTML = "Sheldon Wins";
        console.log("Condition 5.2");
    }
    else{
        document.querySelector("h1").innerHTML = "Leonard Wins";
        console.log("Condition 5.3");
    }
}




