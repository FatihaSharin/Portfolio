const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');
const text4 = document.querySelector('.text4');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const button4 = document.querySelector('.button4');


function changeText1() {
    window.confirm('Play?');
    text1.innerHTML = "Never gonna give you up. Never gonna let you down. Never gonna run around and desert you.";
    button1.disabled = true;
    button1.classList.add('disabled');

    setTimeout (function () {
        window.alert('Hint: Wait for 7 seconds.');
        setTimeout(function () {
            const liked = window.confirm("Liked the song?");
                button1.disabled = true;
                button1.classList.add('disabled');
                if (liked) {
                    text1.innerHTML = "I mean everybody does, sooooooooo.";
                    button1.disabled = true;
                    button1.classList.add('disabled');
                    kickOut();
                } 
                else {
                    text1.innerHTML = "So, you really hated it, huh? Well...";
                    button1.disabled = true;
                    button1.classList.add('disabled');
                }
        }, 7000);
    }, 0);
};

function changeText3() {
    text3.innerHTML = "You completely suck. Go find something better to do.";
    setTimeout(function() {
        text3.innerHTML = "You'll be kicked out in 3... 2... 1...";
        kickOut();
    }, 5000);
};

function kickOut() {
    text4.innerHTML = "You'll be kicked out in 3... 2... 1...";
    setTimeout(function() {
        window.close();
    }, 3000);
};

function changeText4() {
    text4.innerHTML = "Can't please everyone, now can we?";
    setTimeout(function() {
        kickOut();
    }, 5000);
};






















// function changeText1() {
//   document.getElementById("text1").innerHTML = "Never gonna give you up. Never gonna let you down. Never gonna run around and desert you.";
//   document.getElementById("section2").style.display = "none";
//   document.getElementById("section3").style.display = "none";
//   document.getElementById("button4").onclick = changeText4;
//   document.getElementById("text4").innerHTML = "Alright, click to rate your experience. Please give good ratings, cuz' I work hard y'know. Alright, I'll shut up. Good luck.";
//   document.getElementById("button4").innerHTML = "Here";
// }

// function changeText4() {
//   document.getElementById("button4").style.backgroundColor = "blue";
//   document.getElementById("text4").innerHTML = "Thank you for rating!";
//   document.getElementById("button4").disabled = true;

//   // Delay the transition back to the original state after 5 seconds
//   setTimeout(function() {
//     document.getElementById("text1").innerHTML = "Hey dude, wanna hear a cool song?";
//     document.getElementById("section2").style.display = "block";
//     document.getElementById("section3").style.display = "block";
//     document.getElementById("button4").onclick = changeText4;
//     document.getElementById("text4").innerHTML = "";
//     document.getElementById("button4").innerHTML = "";
//     document.getElementById("button4").style.backgroundColor = ""; // Set the button's background color to its original state
//     document.getElementById("button4").disabled = false; // Enable the button again
//   }, 5000); // 5000 milliseconds = 5 seconds
// }
