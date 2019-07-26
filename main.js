document.getElementById("btn1").addEventListener("click", myName)
document.getElementById("btn2").addEventListener("click", mySchool)
document.getElementById("btn3").addEventListener("click", myCareer)
document.getElementById("btn4").addEventListener("click", myHobbies)


function myName() {
    if (document.getElementById("name").innerHTML == "I'm Katie!"){
        document.getElementById("name").innerHTML="";
    }else{
        document.getElementById("name").innerHTML="I'm Katie!";
    }
}

function mySchool() {
    if (document.getElementById("school").innerHTML == "I will be a junior at Chaparral Star Academy this year."){
        document.getElementById("school").innerHTML="";
    }else{
        document.getElementById("school").innerHTML="I will be a junior at Chaparral Star Academy this year.";
    }
}

function myCareer() {
   if (document.getElementById("career").innerHTML == "I want to major in mechanical engineering."){
       document.getElementById("career").innerHTML="";
   }else{
    document.getElementById("career").innerHTML="I want to major in mechanical engineering.";
   }
}

function myHobbies() {
    if (document.getElementById("hobbies").innerHTML == "I play the cello and enjoy learning new instruments."){
        document.getElementById("hobbies").innerHTML="";
    }else{
        document.getElementById("hobbies").innerHTML="I play the cello and enjoy learning new instruments.";
    }
}