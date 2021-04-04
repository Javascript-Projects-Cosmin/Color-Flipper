//This is the simple list of color we can get from the button press
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; 

//This is the variable which containt the Button element of our 
//html page, by its ID 'btn'
const btn = document.getElementById('btn');

//The color variable gets the .color class
const color = document.querySelector(".color");

//Now, we add the call-response function, in this case of JS
btn.addEventListener('click',function(){

    //get random number between 0 - 3 because 
    //we have 4 elements in the colors above
    const randomNumber = getRandomNumber();

    //This changes the background color, nothing more really
    document.body.style.backgroundColor = colors[randomNumber];

    //This changes the text of elements with .color class to, you guesses it!
    color:text = colors[randomNumber];
})

//A simple function to return a number between 0 and the n-1 element of our colors
function getRandomNumber ()
{
    return Math.floor(Math.random() * colors.length);
}