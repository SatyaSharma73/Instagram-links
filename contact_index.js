
window.addEventListener("DOMContentLoaded", event => {

  //This is Code is used when audio src is passed in html boilerplate
  // const audio = document.querySelector("audio");
  // audio.volume = 0.2;
  // audio.play();

  //This code is used to generate random soundtracks every time the page is reloaded without the audio src is passed in html boilerplate
  // var audio=new Audio("Audio/music.mp3");
  // audio.volume = 0.2;
  // audio.play();

 const audio_number=Math.floor(Math.random() * 7);
 if(audio_number===0){
   var audio=new Audio("Audio/Guren.mp3");
   audio.volume = 0.5;
   audio.play();
 }
 else if(audio_number===1){
   var audio=new Audio("Audio/MinatoKushinas-Death.mp3");
   audio.volume = 0.5;
   audio.play();
 }
 else if(audio_number===2){
   var audio=new Audio("Audio/Naruto-Theme.mp3");
   audio.volume = 0.5;
   audio.play();
 }
 else if(audio_number===3){
   var audio=new Audio("Audio/NarutoMusicLoneliness.mp3");
   audio.volume = 0.5;
   audio.play();
 }
 else if(audio_number===4){
   var audio=new Audio("Audio/Sasuke.mp3");
   audio.volume = 0.5;
   audio.play();
 }
 else if(audio_number===5){
   var audio=new Audio("Audio/Raising-Fighting.mp3");
   audio.volume = 0.5;
   audio.play();
 }
 else{
   var audio=new Audio("Audio/Samidare.mp3");
   audio.volume = 0.5;
   audio.play();
 }

});

//Function For Time Delay
const delayInMilliseconds = 10000; //1 second

setTimeout(function() {
$("h2").text("Bazingaa")
}, delayInMilliseconds);


//Functions For Hover-Effects
$(".twitter").hover(function () {
	$("#social-section").toggleClass("color-twitter")
	$("h2").text("Twitter")
	$("h1").css("color", "Black");
  setTimeout(1)
});

$(".facebook").hover(function () {
	$("#social-section").toggleClass("color-facebook")
	$("h2").text("Facebook")
	$("h1").css("color", "Black");
  setTimeout(1)
});

$(".googleplus").hover(function () {
	$("#social-section").toggleClass("color-googleplus")
	$("h2").text("Google+")
	$("h1").css("color", "Black");
	setTimeout(1)
});

$(".github").hover(function () {
	$("#social-section").toggleClass("color-github")
	$("h2").text("GitHub")
	 $("h1").css("color", "white");
		setTimeout(1)
});

$(".pinterest").hover(function () {
	$("#social-section").toggleClass("color-pinterest")
	$("h2").text("Pinterest")
	$("h1").css("color", "Black");
	setTimeout(1)
});

$(".dribbble").hover(function () {
	$("#social-section").toggleClass("color-dribbble")
	$("h2").text("Dribble")
	$("h1").css("color", "Black");
	setTimeout(1)
});

$(".instagram").hover(function () {
	$("#social-section").toggleClass("color-instagram")
	$("h2").text("Instagram")
	$("h1").css("color", "Black");
	setTimeout(1)
});

$(".linkedin").hover(function () {
	$("#social-section").toggleClass("color-linkedin")
	$("h2").text("linkedin")
	$("h1").css("color", "Black");
	setTimeout(1)
});
