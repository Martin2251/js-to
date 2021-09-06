
function validate(){
  var mail = document.getElementById("text").nodeValue;
  var regx =


}


.addeventListner('submit', (e) => {
  e.preventDefault()
});



const fetchMovies = (query) => {
  fetch(`https://api.trumail.io/v2/lookups/{{json}}?email={{email}}`)
    .then((response) => response.json())
    .then(insertMovies);
};
function ValidateEmail(mail)
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
