/*Author: Billy Reynolds
Project: Web Dev Final
 */
 
var tri =0;
window.addEventListener("DOMContentLoaded", loadedHandler);
function loadedHandler() {
    console.log("DOMContentLoaded");
        event.preventDefault();
        fetchResults();
        let valid = checkForm(event);
    }

function checkForm(event) {
  console.log("Performing data validation...");
  var nCheck = document.querySelector("#Name");
  var eCheck = document.querySelector("#Email");
  var nRe = /^[A-z]+\s*[A-z]*$/;
  var eRe = /\S+@\S+\.\S+/;
  if(!nRe.test(nCheck.value)){
    tri++;
    nCheck.value= nCheck.value + " (Please fix your input, no numbers and only two names allowed!"
    nCheck.style.backgroundColor = "red";
     event.preventDefault();
  }
  if(!eRe.test(eCheck.value)&&tri!==0){
    tri++;
    eCheck.value= eCheck.value + " (Invalid Email!)"
    eCheck.style.backgroundColor = "red";
     event.preventDefault();
  }
  if(eCheck.value==="Email"){
    tri++;
    event.preventDefault();
  }
}
var form = document.querySelector("#f1");
form.addEventListener("submit",checkForm);


var $cookie = $("#cookie");
var $btn = $("#close");
$cookie.slideToggle(1000);
$btn.click(function() {
  $cookie.fadeOut();
});
var timerStar = setTimeout(function() {
  var star1 = document.getElementById("s1");
  var star2 = document.getElementById("s2");
  var star3 = document.getElementById("s3");
  var star4 = document.getElementById("s4");
  var star5 = document.getElementById("s5");
  var form = document.getElementById("f1");
  star1.addEventListener("click", function(){
    this.innerHTML = "&starf;";
    this.style.color = "red";

    star2.style.color = "#FFF0D9";
    star3.style.color = "#FFF0D9";
    star4.style.color = "#FFF0D9";
    star5.style.color = "#FFF0D9";
    star2.innerHTML ="&star;";
    star3.innerHTML ="&star;";
    star4.innerHTML ="&star;";
    star5.innerHTML ="&star;";
    star2.style.backgroundColor = "rgb(52, 46, 44)";
    star3.style.backgroundColor = "rgb(52, 46, 44)";
    star4.style.backgroundColor = "rgb(52, 46, 44)";
    star5.style.backgroundColor = "rgb(52, 46, 44)";
    f1.style.display = "block";
  });
  star2.addEventListener("click", function(){
    star1.innerHTML ="&starf;";
    this.innerHTML = "&starf;";
    star1.style.color = "gold";
    this.style.color = "gold";

    star3.style.color = "#FFF0D9";
    star4.style.color = "#FFF0D9";
    star5.style.color = "#FFF0D9";
    star3.innerHTML ="&star;";
    star4.innerHTML ="&star;";
    star5.innerHTML ="&star;";
    star3.style.backgroundColor = "rgb(52, 46, 44)";
    star4.style.backgroundColor = "rgb(52, 46, 44)";
    star5.style.backgroundColor = "rgb(52, 46, 44)";
    f1.style.display = "block";
  });
  star3.addEventListener("click", function(){
    star1.innerHTML ="&starf;";
    star2.innerHTML ="&starf;";
    this.innerHTML = "&starf;";
    star1.style.color = "gold";
    star2.style.color = "gold";
    this.style.color = "gold";

    star4.style.color = "#FFF0D9";
    star5.style.color = "#FFF0D9";
    star4.innerHTML ="&star;";
    star5.innerHTML ="&star;";
    star4.style.backgroundColor = "rgb(52, 46, 44)";
    star5.style.backgroundColor = "rgb(52, 46, 44)";
    f1.style.display = "block";
  });

  star4.addEventListener("click", function(){
    star1.innerHTML ="&starf;";
    star2.innerHTML ="&starf;";
    star3.innerHTML ="&starf;";
    this.innerHTML = "&starf;";
    star1.style.color = "gold";
    star2.style.color = "gold";
    star3.style.color = "gold";
    this.style.color = "gold";

    star5.style.color = "#FFF0D9";
    star5.innerHTML ="&star;";
    star5.style.backgroundColor = "rgb(52, 46, 44)";
    f1.style.display = "block";
  });
  star5.addEventListener("click", function(){
    star1.innerHTML ="&starf;";
    star2.innerHTML ="&starf;";
    star3.innerHTML ="&starf;";
    star4.innerHTML = "&starf;";
    this.innerHTML = "&starf;";
    star1.style.color = "#FA4"
    star2.style.color = "#FA4";
    star3.style.color = "#FA4";
    star4.style.color = "#FA4";
    this.style.color = "#FA4";

    star1.style.shadow = "#952"
    star2.style.shadow = "#952";
    star3.style.shadow = "#952";
    star4.style.shadow = "#952";
    this.style.shadow = "#952";
    f1.style.display = "block";
  });
}, 1000);


function fetchResults() {
    // This function should construct the complete URL based on the form fields,
    // register an event handler for the data load event, and call the API.
    console.log("Fetching results from API...");
    let baseURL = 'https://api.chucknorris.io/jokes/random';
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load",displayResults);
    xhr.responseType="json";
    xhr.open("GET",baseURL);
    xhr.send();
}

function displayResults() {
  var output = document.getElementById("chuck");
  var outputStr ="";
  console.log("Displaying data...");
  if(this.status===200){
    var results = this.response;
    var img = JSON.stringify(results.icon_url, null, " ");
    var quote = JSON.stringify(results.value, null, " ");
    quote = quote.substring(1,quote.length-1);
    outputStr += "<img src=" + img + "alt='Chuck Face'>"+ quote+"</p>";
  }
  output.style.setProperty("display","block");
  output.innerHTML = outputStr;
}
